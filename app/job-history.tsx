import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function JobHistory() {
  return (
    <section className="mt-24 text-white">
      <div className="grid justify-center items-center">
        <p className="uppercase sm:text-base md:text-2xl lg:text-5xl">
          <span>Professional</span>
          <br /> <span>Experience</span>
        </p>
      </div>
      <div className="m-5 grid justify-stretch items-center">
        <Accordion
          type="single"
          collapsible
          className=" border-white bg-gray-700 w-1/3 justify-self-center rounded-lg grid"
        >
          <AccordionItem value="item-1" className="p-2">
            <AccordionTrigger>
              Software Engineer @ Saimon Global Ltd 2029-Present
            </AccordionTrigger>
            <AccordionContent>
              icon Dhaka, Bangladesh icon saimonglobal.com Yes. It adheres to
              the WAI-ARIA design pattern. skill bubbles
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="p-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="p-2">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default JobHistory;
