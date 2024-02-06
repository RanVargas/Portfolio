import React from "react";
import Image from "next/image";
import OSS from "../public/operating-system-icon.svg";
import SWE from "../public/software-engineer-icon.svg";
import blockchain from "../public/blockchain.svg";
import backend from "../public/backend.svg";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Expertise() {
  return (
    <section id="expertise">
      <div className="flex justify-center items-center">
        <span className="text-white font-bold sm:text-xl md:text-2xl lg:text-4xl mt-5 mb-5">
          My Expertise
        </span>
      </div>
      <Table className="text-white bg-gray-700">
        <TableBody>
          <TableRow>
            <TableCell className="">
              <div className="grid items-center">
                <div className="justify-self-center">
                  <div className="grid justify-items-center">
                    <Image
                      src={SWE}
                      alt="Software Engineer"
                      width={45}
                      height={45}
                    ></Image>
                    <p>
                      <span className="underline decoration-[#993506] decoration-4">
                        Software
                      </span>
                      <br /> <span>Engineer</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid items-center mt-3">
                <p className="justify-self-center w-60">
                  Experienced Software Engineer in programming paradigms such as
                  OOP, Functional, Structured, and Imperative.
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="grid items-center">
                <div className="justify-self-center">
                  <div className="grid justify-items-center">
                    <Image
                      src={backend}
                      alt="Backend Software"
                      height={45}
                      width={45}
                    ></Image>
                    <span className="underline decoration-[#06994b] decoration-4">
                      BACKEND
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid items-center mt-3">
                <p className="justify-self-center w-60">
                  Serious and passionate about Backend development. Worked in
                  many technologies which contributed to the decisions taken on
                  where to go next.
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="">
                <div className="justify-self-center">
                  <div className="grid justify-items-center">
                    <Image
                      src={blockchain}
                      alt="Blockchain"
                      height={45}
                      width={45}
                    ></Image>
                    <span className="underline decoration-[#b30e27] decoration-4">
                      BLOCKCHAIN
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid items-center mt-3">
                <p className="justify-self-center w-60">
                  Diving into Cryptocurrency and Blockchain has been something I
                  decided, and thus I began my endevour.
                </p>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="grid items-center">
                <div className="justify-self-center">
                  <div className="grid justify-items-center">
                    <Image
                      src={OSS}
                      alt="Operating System"
                      height={45}
                      width={45}
                    ></Image>
                    <span className="underline decoration-[#240fbf] decoration-4">
                      SYSTEMS
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid items-center mt-3">
                <p className="justify-self-center w-60">
                  Not confined to only one corner, but rather looking behind the
                  veil on our very principles some give for granted. I have
                  worked and will work on Systems of different kinds and
                  purpuses.
                </p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}

export default Expertise;
