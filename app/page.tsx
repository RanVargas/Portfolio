import Image from "next/image";
import Footer from "./footer";
import Navbar from "./navbar";
import Expertise from "./expertise";
import Technologies from "./technologies";
import JobHistory from "./job-history";
import scroller from "../public/scroller-new.svg";
import cron from "node-cron";
import { handler } from "./api/cronjob/project-cacher";
import ProjectShowroom from "./project-showroom";

export default function Home() {
  cron.schedule("0 0 1,15 * *", () => {
    //*/10 * * * * is for every 10 mins --------0 0 1,15 * * for twice a month
    handler();
  });
  return (
    <>
      <Navbar />
      <main>
        <section className="flex justify-center items-center bg-[url('../public/mask-blue.svg')] bg-no-repeat bg-[length:100%] bg-center mask">
          <div className="grid justify-items-stretch text-center">
            <div className="font-black text-white">
              <div className="text-6xl sm:text-8xl md:text-9xl">RAN</div>
              <div className="text-6xl sm:text-8xl md:text-9xl">VARGAS</div>
            </div>
            <p className="font-bold text-white mt-2 text-sm sm:text-lg md:text-2xl">
              SOFTWARE ENGINEER, BACKEND, SYSTEMS & BLOCKCHAIN DEVELOPER.
            </p>
          </div>
        </section>

        <div className="hidden">
          <section className="flex justify-center items-center bg-[url('../public/mask-blue.svg')] bg-no-repeat bg-[length:100%] bg-center mask">
            <div className="grid justify-items-stretch">
              <div className="justify-self-center font-black sm:text-lg md:text-4xl lg:text-9xl">
                <div className="justify-items-center sm:flex flex-wrap lg:grid">
                  <span className="text-white justify-self-center">RAN</span>
                  <span className="text-white ">VARGAS</span>
                </div>
              </div>
              <p className="font-bold text-white mt-2  sm:text-xs1/8 md:text-lg lg:text-2xl">
                SOFTWARE ENGINEER, BACKEND, SYSTEMS & BLOCKCHAIN DEVELOPER.
              </p>
            </div>
          </section>
        </div>
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
        <ProjectShowroom />
        <JobHistory />
      </main>
      <Footer />
    </>
  );
}
