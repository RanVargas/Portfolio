"use client";
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

function prepareProjects(): ProjectsData[] {
  let fetcher: ProjectsData[] = handler({}, {}).then((value) => {
    return value;
  });
  let projectsWithHtml = fetcher
    .filter(function (element) {
      return element !== undefined? element: return;
    })
    .map(async (data: ProjectsData) => {
      const tempP: ProjectsData = {description: (await remark().use(html).process(data.description)).toString(), photo: data.photo, folder: data.folder}
      return tempP;
    });
  projectsWithHtml = projectsWithHtml.filter(
    (element) => {
      return element !== undefined;
    }
  );
  console.log(projectsWithHtml);
  return projectsWithHtml.then();
  
}

function ProjectShowroom() {
  const [projects, setProjects] = useState<ProjectsData[]>();

  useEffect(() => {
    const callProjects = async () => {
      const fetcher = await handler({}, {}).then((data) => {
        return data;
      });
      console.log(fetcher);
      let projectsWithHtml = fetcher
        .filter(function (element: ProjectsData) {
          return element !== undefined;
        })
        .map(async (data: ProjectsData): Promise<ProjectsData> => {
          return {
            description: (
              await contentHtml(await processedContent(data.description))
            ).toString(),
            folder: data.folder,
            photo: data.photo,
          };
        });
      projectsWithHtml = projectsWithHtml.filter(function (
        element: ProjectsData
      ) {
        return element !== undefined;
      });
      console.log(projectsWithHtml);
      const projects: ProjectsData[] = projectsWithHtml;
      setProjects(projects);
    };

    callProjects();
  }, []);
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  /*let folderContents: ProjectsData[] = await handler({}, {});
  folderContents = folderContents.filter(function (element) {
    return element !== undefined;
  });*/
  const processedContent = async (theContent: string) =>
    await remark().use(html).process(theContent);
  const contentHtml = async (processor: any): Promise<string> =>
    processor.toString();

  //const folderContents = await response.json();

  return (
    <section className="text-white">
      {projects!.map((content: ProjectsData) => (
        <div key={content.folder}>
          <p className="font-bold">{content.folder}</p>
          {content.description && (
            <div
              dangerouslySetInnerHTML={{
                __html: content.description,
              }}
            ></div>
          )}
          {content.photo && (
            <img
              src={`data:image/jpeg;base64,${byteArrayToBase64(content.photo)}`}
              alt="Photo of the project"
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default ProjectShowroom;
