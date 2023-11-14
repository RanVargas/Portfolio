import Image from "next/image";
import Footer from "./footer";
import Navbar from "./navbar";
import Mask from "../app/svg-components/mask";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex justify-center items-center bg-[url('../public/mask-blue.svg')] bg-no-repeat bg-[length:100%] bg-center mask">
          <div className="grid justify-items-stretch">
            <div className="justify-self-center font-black sm:text-lg md:text-4xl lg:text-9xl">
              <div className="grid justify-items-center">
                <span className="text-white justify-self-center">RAN</span>
                <span className="text-white -mt-6">VARGAS</span>
              </div>
            </div>
            <p className="font-bold text-white mt-2 sm:text-base md:text-lg lg:text-2xl">
              SOFTWARE ENGINEER, BACKEND, SYSTEMS & BLOCKCHAIN DEVELOPER.
            </p>
          </div>
        </section>
        <section>
          <span className="text-white">My Expertise</span>
        </section>
      </main>
      <Footer />
    </>
  );
}
