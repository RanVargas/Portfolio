import Image from "next/image";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex">
          <div
            className="w-0 h-0
          md:border-l-[25rem] border-l-blue-500 
  md:border-t-[25rem] border-t-transparent
  border-b-[0px] border-b-transparent"
          ></div>
          <div
            className="w-0 h-0 
  border-t-[25rem]
  border-r-[25rem] border-r-green-500
   border-t-transparent
  border-b-[0px] border-b-transparent"
          ></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
