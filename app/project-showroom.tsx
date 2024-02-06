import handler from "./api/projectsfetcher/fetchers";
import React, { useEffect, useState } from "react";
import { encode } from "base64-arraybuffer";
import { ProjectsData } from "./api/projectsfetcher/projects-data-interface";
import { remark } from "remark";
import html from "remark-html";

function byteArrayToBase64(byteArray: Uint8Array) {
  const buffer = new ArrayBuffer(byteArray.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < byteArray.length; i++) {
    view[i] = byteArray[i];
  }
  return encode(buffer);
}

async function prepareProjects() {
  let fercherCacher: ProjectsData[] = [];
  let fetcher: ProjectsData[] = await handler(null, null).then((result) => {
    if (result.length != 0) {
      fercherCacher.concat(...result);
    }
    return result;
  });

  let projectsWithHtml: ProjectsData[] = fetcher.filter(
    (element) => element !== undefined
  );
  let refined = projectsWithHtml.map((data: ProjectsData) => {
    const tempP: ProjectsData = {
      description: remark().use(html).processSync(data.description).toString(),
      photo: data.photo,
      folder: data.folder,
    };
    return tempP;
  });

  return refined;
}

async function ProjectShowroom() {
  const processedContent = async (theContent: string) =>
    await remark().use(html).process(theContent);
  const contentHtml = async (processor: any): Promise<string> =>
    processor.toString();
  const projects = await prepareProjects();

  return (
    <section className="text-white" id="Projects">
      <div className="grid mt-5">
        <h2 className="font-black text-3xl justify-self-center">Projects</h2>
      </div>
      <div className="text-white grid justify-around m-8">
        {projects.map((content: ProjectsData) => (
          <div
            className="bg-gray-700 max-w-4xl max-h-fit rounded-lg  shadow-lg grid justify-center justify-items-center"
            key={content.folder}
          >
            {content.photo && (
              <img
                src={`data:image/jpeg;base64,${byteArrayToBase64(
                  content.photo
                )}`}
                alt="Photo of the project"
                className="h-96 md:h-auto md:w-96"
              />
            )}
            <div className="p-6 grid">
              <h3 className="text-lg font-black justify-self-center">
                {content.folder}
              </h3>

              <div className="mt-4 prose text-center">
                {content.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content.description,
                    }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectShowroom;
