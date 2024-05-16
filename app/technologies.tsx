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
    <>
      <section
        id="technologies"
        className="flex flex-col items-center mt-28 text-white"
      >
        <p className="text-center mb-4 font-medium">
          These are the technologies I have worked with:
        </p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border border-white p-6 bg-gray-700 w-full max-w-screen-lg">
            <div className="flex flex-col items-center">
              <p className="font-bold">OS:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Image
                  src={windows}
                  height={45}
                  width={45}
                  alt="Windows Logo"
                />
                <Image src={linux} height={45} width={45} alt="Linux Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Frameworks:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Image src={spring} height={45} width={45} alt="Spring Logo" />
                <Image
                  src={tailwind}
                  height={45}
                  width={45}
                  alt="Tailwind CSS Logo"
                />
                <Image src={nextjs} height={45} width={45} alt="NextJS Logo" />
                <Image
                  src={angular}
                  height={45}
                  width={45}
                  alt="Angular Logo"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Others:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Image src={html} height={45} width={45} alt="HTML Logo" />
                <Image src={css} height={45} width={45} alt="CSS Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Programming Languages:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Image src={rust} height={45} width={45} alt="Rust Logo" />
                <Image src={golang} height={45} width={45} alt="Go Logo" />
                <Image src={csharp} height={45} width={45} alt="C# Logo" />
                <Image src={cpp} height={45} width={45} alt="C++ Logo" />
                <Image src={zig} height={45} width={45} alt="Zig Logo" />
                <Image
                  src={javascript}
                  height={45}
                  width={45}
                  alt="Javascript Logo"
                />
                <Image
                  src={typescript}
                  height={45}
                  width={45}
                  alt="Typescript Logo"
                />
                <Image src={java} height={45} width={45} alt="Java Logo" />
                <Image src={python} height={45} width={45} alt="Python Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Clouds:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Image src={aws} height={45} width={45} alt="AWS Logo" />
                <Image src={azure} height={45} width={45} alt="Azure Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Libraries:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Image src={reactlib} height={45} width={45} alt="React Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">CI/CD:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Image src={git} height={45} width={45} alt="Git Logo" />
                <Image src={github} height={45} width={45} alt="Github Logo" />
                <Image src={docker} height={45} width={45} alt="Docker Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
