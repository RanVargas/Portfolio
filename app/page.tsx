import Image from "next/image";
import Footer from "./footer";
import Navbar from "./navbar";
import Expertise from "./expertise";
import Technologies from "./technologies";
import JobHistory from "./job-history";
import scroller from "../public/scroller-new.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex justify-center items-center bg-[url('../public/mask-blue.svg')] bg-no-repeat bg-[length:100%] bg-center mask">
          <div className="grid justify-items-stretch">
            <div className="justify-self-center font-black sm:text-lg md:text-4xl lg:text-9xl">
              <div className="md:grid justify-items-center sm:flex">
                <span className="text-white justify-self-center">RAN</span>
                <span className="text-white -mt-6">VARGAS</span>
              </div>
            </div>
            <p className="font-bold text-white mt-2  sm:text-xs md:text-lg lg:text-2xl">
              SOFTWARE ENGINEER, BACKEND, SYSTEMS & BLOCKCHAIN DEVELOPER.
            </p>
          </div>
        </section>
        <div className="flex justify-center items-center mt-32 mb-20">
          <a href="#expertise">
            <Image
              src={scroller}
              height={40}
              width={40}
              alt="Scroller"
              className="animate-bounce"
            ></Image>
          </a>
        </div>
        <Expertise />
        <Technologies />
        <section id="projects"></section>
        <JobHistory />
      </main>
      <Footer />
    </>
  );
}
