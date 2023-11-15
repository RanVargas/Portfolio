import React from "react";
import Image from "next/image";
import aws from "../public/amazonwebservices-original-wordmark.svg";
import docker from "../public/docker-original.svg";
import linux from "../public/linux-original.svg";
import cpp from "../public/cplusplus-original.svg";
import csharp from "../public/csharp-original.svg";
import css from "../public/css3-original.svg";
import tailwind from "../public/tailwindcss-original-wordmark.svg";
import git from "../public/git-original.svg";
import github from "../public/github-original.svg";
import golang from "../public/go-original-wordmark.svg";
import html from "../public/html5-original.svg";
import javascript from "../public/javascript-original.svg";
import typescript from "../public/typescript-original.svg";
import angular from "../public/angularjs-plain.svg";
import spring from "../public/spring-original.svg";
import azure from "../public/azure-original.svg";
import reactlib from "../public/react-original.svg";
import nextjs from "../public/nextjs-original-wordmark.svg";
import python from "../public/python-original.svg";
import java from "../public/java-original-wordmark.svg";
import windows from "../public/windows8-original.svg";
import rust from "../public/rust-plain.svg";
import zig from "../public/zig-original.svg";

function Technologies() {
  return (
    <section id="technologies" className="grid justify-center mt-28 text-white">
      <p className="justify-self-center">
        This are the technologies I have worked with:
      </p>
      <table className="table-fixed justify-self-center border border-white h-1/3 w-1/4 bg-gray-700">
        <tbody>
          <tr className="grid space-y-6">
            <td className="grid justify-center items-center pt-2">
              <div className="justify-self-center grid justify-center items-center">
                <p className="justify-self-center">OS:</p>
                <div className="flex space-x-3 mt-1">
                  <Image
                    src={windows}
                    height={45}
                    width={45}
                    alt="Windows Logo"
                    className=""
                  />
                  <Image
                    src={linux}
                    height={45}
                    width={45}
                    alt="Linux Logo"
                    className=""
                  />
                </div>
              </div>
            </td>
            <td className="grid justify-center items-center">
              <div className="justify-self-center grid justify-center items-center">
                <p className="justify-self-center">Frameworks:</p>
                <div className="flex space-x-3 mt-1">
                  <Image
                    src={spring}
                    height={45}
                    width={45}
                    alt="Spring Logo"
                    className=""
                  />
                  <Image
                    src={tailwind}
                    height={45}
                    width={45}
                    alt="Tailwind CSS Logo"
                    className=""
                  />
                  <Image
                    src={nextjs}
                    height={45}
                    width={45}
                    alt="NextJS Logo"
                    className=""
                  />
                  <Image
                    src={angular}
                    height={45}
                    width={45}
                    alt="Angular Logo"
                    className=""
                  />
                </div>
              </div>
            </td>
            <td className="grid justify-center items-center">
              <div className="justify-self-center grid justify-center items-center">
                <p className="justify-self-center">Others:</p>
                <div className="flex space-x-3 mt-1">
                  <Image
                    src={html}
                    height={45}
                    width={45}
                    alt="HTML Logo"
                    className=""
                  />
                  <Image
                    src={css}
                    height={45}
                    width={45}
                    alt="CSS Logo"
                    className=""
                  />
                </div>
              </div>
            </td>

            <td className="grid justify-center items-center">
              <div className="justify-self-center grid justify-center items-center">
                <p className="justify-self-center">Programming Languages:</p>
                <div className="flex space-x-3 mt-1">
                  <Image
                    src={rust}
                    height={45}
                    width={45}
                    alt="Rust Logo"
                    className=""
                  />
                  <Image
                    src={golang}
                    height={45}
                    width={45}
                    alt="Go Logo"
                    className=""
                  />
                  <Image
                    src={csharp}
                    height={45}
                    width={45}
                    alt="C# Logo"
                    className=""
                  />
                  <Image
                    src={cpp}
                    height={45}
                    width={45}
                    alt="C++ Logo"
                    className=""
                  />
                  <Image
                    src={zig}
                    height={45}
                    width={45}
                    alt="Zig Logo"
                    className=""
                  />
                  <Image
                    src={javascript}
                    height={45}
                    width={45}
                    alt="Javascript Logo"
                    className=""
                  />
                  <Image
                    src={typescript}
                    height={45}
                    width={45}
                    alt="Typescript Logo"
                    className=""
                  />
                  <Image
                    src={java}
                    height={45}
                    width={45}
                    alt="Java Logo"
                    className=""
                  />
                  <Image
                    src={python}
                    height={45}
                    width={45}
                    alt="Python Logo"
                    className=""
                  />
                </div>
              </div>
            </td>
            <td className="grid justify-center items-center">
              <div className="justify-self-center grid justify-center items-center">
                <p className="justify-self-center">Clouds:</p>
                <div className="flex space-x-3 mt-1">
                  <Image
                    src={aws}
                    height={45}
                    width={45}
                    alt="AWS Logo"
                    className=""
                  />
                  <Image
                    src={azure}
                    height={45}
                    width={45}
                    alt="Azure Logo"
                    className=""
                  />
                </div>
              </div>
            </td>

            <td className="grid justify-center items-center">
              <div className="justify-self-center grid justify-center items-center">
                <p className="justify-self-center">Libraries:</p>
                <div className="flex space-x-3 mt-1">
                  <Image
                    src={reactlib}
                    height={45}
                    width={45}
                    alt="React Logo"
                    className=""
                  />
                </div>
              </div>
            </td>
            <td className="grid justify-center items-center pb-2">
              <div className="justify-self-center grid justify-center items-center">
                <p className="justify-self-center">CI/CD:</p>
                <div className="flex space-x-3 mt-1">
                  <Image
                    src={git}
                    height={45}
                    width={45}
                    alt="Git Logo"
                    className=""
                  />
                  <Image
                    src={github}
                    height={45}
                    width={45}
                    alt="Github Logo"
                    className=""
                  />
                  <Image
                    src={docker}
                    height={45}
                    width={45}
                    alt="Docker Logo"
                    className=""
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Technologies;
