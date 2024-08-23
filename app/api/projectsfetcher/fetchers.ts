import { ListObjectsV2Command, GetObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";
import { Stream } from "stream";
import { S3Client } from "@aws-sdk/client-s3";
import { Credentials } from "@aws-sdk/types";
import * as dotenv from "dotenv";
import {ProjectsData} from "./projects-data-interface"
dotenv.config();

const sKeys: Credentials = {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.ACCESS_KEY_SECRET!,
}

const config: S3ClientConfig = {
    region: process.env.BUCKET_REGION,
    credentials: sKeys
}
const s3 = new S3Client(config);



export default async function handler(req: any, res: any): Promise<ProjectsData []>{
  dotenv.config();
  
    
    try {
    const listObjectsCommand = new ListObjectsV2Command({
        Bucket: process.env.BUCKET_NAME,
        Delimiter: "/",
      });
  
      const listObjectsResponse = await s3.send(listObjectsCommand);
      // Fetch content for each folder
      const folderContents = await Promise.all(
        listObjectsResponse.CommonPrefixes!.map(async (prefix) => {
          if (prefix.Prefix == undefined) {
          }
          const listFolderContentCommand = new ListObjectsV2Command({
            Bucket: process.env.BUCKET_NAME,
            Prefix: prefix.Prefix,
          });
          const folderContentResponse = await s3.send(listFolderContentCommand);

          let mdFile;
          let photo;
          folderContentResponse.Contents!.forEach((file) => {
            if (file.Key != undefined && file.Key.endsWith("md")) {
              mdFile = file.Key;
            } else if (
              file.Key != undefined &&
              (file.Key.endsWith("jpg") ||
                file.Key.endsWith("jpeg") ||
                file.Key.endsWith("png") ||
                file.Key.endsWith("gif"))
            ) {
              photo = file.Key;
            }
          });
          
          //return;
          if (mdFile == undefined && photo == undefined) {
            return;
          }
          const folderName = prefix.Prefix!.slice(0, -1); 
          
          
          // Fetch the MD file
          const mdFileCommand = new GetObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: mdFile,
          });
  
          const mdFileResponse = await s3.send(mdFileCommand);
  
          const mdContent = await mdFileResponse.Body?.transformToString();
         
          const imageFileCommand = new GetObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: photo,
          });
  
          const imageFileResponse = await s3.send(imageFileCommand);
          const photoBlob = await imageFileResponse.Body?.transformToByteArray();
          const returnable: ProjectsData = {
            photo: photoBlob,
            description: mdContent!,
            folder: folderName

          }
          
          return returnable;
        })
      ).catch((reason) => {
        console.log(reason);
        return [] as ProjectsData[];
      });
      
     let trial = folderContents.filter(Boolean) as ProjectsData[];
      
      return trial;
    } catch (error) {
      console.log(`Error fetching S3 files: ${error}`);
      
      return res;
    }
}