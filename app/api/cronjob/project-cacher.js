import { Octokit, App } from "octokit";
import dotenv from "dotenv";
import { Stream } from "stream";
import fetch from "node-fetch";
import { get } from "https";
import { Upload } from "@aws-sdk/lib-storage";
import {
  S3Client,
  ListObjectsV2Command,
  DeleteObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { randomInt } from "crypto";

export const handler = async (event) => {
  dotenv.config();
  const BUCKET_NAME = process.env.BUCKET_NAME;
  const username = "RanVargas";
  const octokit = new Octokit({
    auth: process.env.PERSONAL_TOKEN_GITHUB,
  });
  const s3 = new S3Client({
    region: process.env.BUCKET_REGION,
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.ACCESS_KEY_SECRET,
    },
  });
  async function getText(url) {
    // Fetch request
    const response = await fetch(url);
    // Handle response
    if (response.ok) {
      const text = await response.text();
      return text;
    } else {
      throw new Error("Request failed");
    }
  }

  async function uploadAssestsV2(
    downloadUrl,
    bucketName,
    projectName,
    projectAsset
  ) {
    console.log("this was called");
    const url = downloadUrl;
    const bucket = bucketName;
    const key = `${projectName}/${projectName}-${projectAsset}`;

    await new Promise((resolve, reject) => {
      const req = get(url, async (res) => {
        // Get data stream from response
        const streamer = Stream.PassThrough();
        const stream = res.pipe(streamer);
        const params = {
          Bucket: bucket,
          Key: key,
          Body: stream,
        };
        const parallelUpload = new Upload({
          client: s3,
          params: params,
        });

        try {
          console.log("upload will be done");
          await parallelUpload.done();
          console.log("upload is done");
          resolve(); // Resolve the Promise when upload is successful
        } catch (error) {
          reject(error); // Reject the Promise if an error occurs during upload
        }
        console.log("this triggered");
      });

      req.on("error", (error) => {
        reject(error); // Reject the Promise if there is an error with the HTTP request
      });

      req.end();
    });
  }

  async function uploadAssests(
    downloadUrl,
    bucketName,
    projectName,
    projectAsset
  ) {
    console.log("this was called");
    const url = downloadUrl;
    const bucket = bucketName;
    const key = `${projectName}/${projectName}-${projectAsset}`;

    get(url, async (res) => {
      // Get data stream from response
      const streamer = Stream.PassThrough();
      const stream = res.pipe(streamer);
      const params = {
        Bucket: bucket,
        Key: key,
        Body: stream,
      };
      const parallelUpload = new Upload({
        client: s3,
        params: params,
      });

      try {
        console.log("upload will be done");
        await parallelUpload.done();
        console.log("upload is done");
      } catch (error) {}
      console.log("this triggered");
    });
  }

  async function emptyBucket(bucket) {
    let listedObjects;

    const listObjectsV2 = new ListObjectsV2Command({
      Bucket: bucket,
    });
    listedObjects = await s3.send(listObjectsV2);

    if (listedObjects.Contents == undefined) return;

    listedObjects.Contents.forEach(({ Key }) => {
      const deleter = new DeleteObjectCommand({
        Bucket: bucket,
        Key: Key,
      });
      try {
        s3.send(deleter);
      } catch (error) {}
    });
  }

  async function getAllGithubAssetsLinks(repoName) {
    const values = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: "RanVargas",
        repo: repoName,
        path: "/showcase",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return values;
  }
  emptyBucket(BUCKET_NAME);
  let reposReadmeOjb = {};
  let reposData = await octokit.request("GET /users/{username}/repos", {
    username: "RanVargas",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  await Promise.all(
    reposData.data.map(async (repo) => {
      try {
        const result = await octokit.request(
          "GET /repos/{owner}/{repo}/readme",
          {
            owner: username,
            repo: repo.name,
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        reposReadmeOjb[repo.name] = result;
      } catch (error) {
        if (error.status === 404) {
          // No readme found, skip this repo
        } else {
          throw error; // rethrow other errors
        }
      }
    })
  );

  let projects = {};
  for (const [key, value] of Object.entries(reposReadmeOjb)) {
    try {
      const seachKeyword = "NatsukiSubaru";
      const text = await getText(value.data.download_url);

      const resolved = new RegExp(`\\b${seachKeyword}\\b`, "i");
      if (resolved.test(text)) {
        projects[key] = value;
      }
    } catch (error) {
      console.log(error);
    }
  }

  for (const [key, value] of Object.entries(projects)) {
    try {
      const assetsLinks = await getAllGithubAssetsLinks(key);
      console.log(assetsLinks);
      assetsLinks.data.map(async (dataObj) => {
        try {
          console.log(dataObj);
          await uploadAssests(
            dataObj.download_url,
            BUCKET_NAME,
            key,
            dataObj.name
          ).catch((error) => {
            const response = {
              statusCode: 400,
              body: JSON.stringify(`Error encountered: ${error}`),
            };
            return response;
          });
          console.log(`${dataObj.name} has been uploaded`);
        } catch (error) {
          const response = {
            statusCode: 400,
            body: JSON.stringify(`Error encountered: ${error}`),
          };
          return response;
        }
      });
    } catch (error) {
      const response = {
        statusCode: 400,
        body: JSON.stringify(`Error encountered: ${error}`),
      };
      return response;
    }
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify("Ran successfully"),
  };
  return response;
};
