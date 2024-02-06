import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import website from "../public/website.svg";
import location from "../public/location.svg";
import Image from "next/image";

function JobHistory() {
  return (
    <section className="mt-24 text-white mb-20" id="experience">
      <div className="grid justify-center items-center">
        <p className="uppercase sm:text-base md:text-2xl lg:text-5xl font-extrabold">
          <span>Professional</span>
          <br /> <span>Experience</span>
        </p>
      </div>
      <div className="m-5 justify-stretch items-center lg:grid sm:flex flex-wrap">
        <Accordion
          type="single"
          collapsible
          className=" border-white bg-gray-700 lg:w-1/3 sm:w-screen md:w-1/2 lg:justify-self-center sm:justify-self-stretch rounded-lg"
        >
          <AccordionItem value="item-1" className="py-2 px-6">
            <AccordionTrigger className=" font-bold place-content-around">
              <span className="">
                Full Stack Software Engineer @ Hahn Software
              </span>
              <span>2023-2023</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="md:grid justify-center space-y-3 flex-wrap">
                <div className="flex justify-start space-x-5">
                  <div className="flex justify-center items-center">
                    <Image
                      src={location}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-0.5"
                    />
                    <p>Santo Domingo, Dominican Republic (Remote)</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={website}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-1"
                    />
                    <a href="https://www.hahn-software.io/en/home">
                      hahn-software.io
                    </a>
                  </div>
                </div>
                <div>
                  <div className="">
                    <p>
                      The following were some of the responsabilities involved
                      in this role:{" "}
                    </p>
                    <ul className="list-disc list-inside leading-relaxed">
                      <li>
                        Coordinate in requirements breakdown next to be
                        implementated.
                      </li>
                      <li>
                        Iterate over past software delivered to improve quality.
                      </li>
                      <li>
                        Implement requirements elicitated by the Product Owner.
                      </li>
                      <li>Document code for stakeholder overview.</li>
                      <li>
                        Coordinate along with junior engineers over critical
                        tasks to ensure timely delivery
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 flex flex-wrap">
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Javascript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Typescript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      C#
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Go
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Azure
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      NextJS
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Angular
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Strapi
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      SQL Server
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2 px-6">
            <AccordionTrigger className=" font-bold place-content-around">
              <span className="">Backend Engineer @ XpertCode</span>
              <span>2022-2023</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="md:grid flex-wrap justify-center space-y-3">
                <div className="flex justify-start space-x-5">
                  <div className="flex justify-center items-center">
                    <Image
                      src={location}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-0.5"
                    />
                    <p>Santo Domingo, Dominican Republic (Remote)</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={website}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-1"
                    />
                    <a href="http://xpertcode.com.do/">xpertcode.com.do</a>
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      The following were some of the responsabilities involved
                      in this role:{" "}
                    </p>
                    <ul className="list-disc list-inside leading-relaxed	">
                      <li>
                        Maintain critical systems for the biggest
                        Telecomunications company of the DR.
                      </li>
                      <li>
                        Ensure compatibility with distributed systems which
                        consumed and/or delivered information to this main
                        backend system.
                      </li>
                      <li>
                        Offer assistance in troubleshooting service failure in
                        Production and ship solutions to such bugs.
                      </li>
                      <li>Document code for stakeholder overview.</li>
                      <li>Assist meets with stakeholders .</li>
                    </ul>
                  </div>
                  <div className="mt-3 flex flex-wrap">
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Javascript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Typescript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Java
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      J2EE
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      C#
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Angular
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      OracleDB
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      SQL Server
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2 px-6">
            <AccordionTrigger className="font-bold place-content-around">
              <span className="">
                Full Stack Software Engineer @ Laborat.io
              </span>
              <span>2021-2022</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="md:grid justify-center space-y-3 flex-wrap">
                <div className="flex justify-start space-x-5">
                  <div className="flex justify-center items-center">
                    <Image
                      src={location}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-0.5"
                    />
                    <p>Santo Domingo, Dominican Republic (Remote)</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={website}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-1"
                    />
                    <a href="https://www.Laborat.io">Laborat.io</a>
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      The following were some of the responsabilities involved
                      in this role:{" "}
                    </p>
                    <ul className="list-disc list-inside leading-relaxed	">
                      <li>
                        Maintain enterprise websites for different companies.
                      </li>
                      <li>
                        Work alongside the Software Architect to implement a
                        complex system responsible for connecting a network of
                        companies in the Construction sector.
                      </li>
                      <li>Ensure delivered code has been thoroughly tested</li>
                    </ul>
                  </div>
                  <div className="mt-3 flex flex-wrap">
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Javascript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Typescript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Java
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      AWS
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Docker
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2 px-6">
            <AccordionTrigger className="font-bold place-content-around">
              <span className="">Software Engineer @ CardNet</span>
              <span>2020-2021</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="md:grid justify-center space-y-3 flex-wrap">
                <div className="flex justify-start space-x-5">
                  <div className="flex justify-center items-center">
                    <Image
                      src={location}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-0.5"
                    />
                    <p>Santo Domingo, Dominican Republic</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={website}
                      width={20}
                      height={20}
                      alt="Location"
                      className="mr-1"
                    />
                    <a href="https://www.cardnet.com.do/">cardnet.com.do/</a>
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      The following were some of the responsabilities involved
                      in this role:{" "}
                    </p>
                    <ul className="list-disc list-inside leading-relaxed	">
                      <li>Document processes and automate documentaion.</li>
                      <li>
                        Implement requirements elicitated by the Product Owner.
                      </li>
                      <li>Develop automations for Database improvements.</li>
                      <li>Implement new features over corporate web app.</li>
                    </ul>
                  </div>
                  <div className="mt-3 flex flex-wrap">
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Javascript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Typescript
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      C#
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Python
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Azure
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      Angular
                    </span>
                    <span className="bg-gray-800 border rounded-full p-1 font-medium text-gray-400">
                      SQL Server
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default JobHistory;
