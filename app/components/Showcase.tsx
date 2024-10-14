"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Showcase() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <section className="h-[80vh] w-full flex px-10  justify-between  items-center">
      <div className="w-[50%] h-full items-center justify-center flex">
        <img className="w-[300px]" src="./images/minion.png" />
      </div>

      <div className="w-[50%] h-full flex items-center justify-center">
        <Accordion
          onValueChange={(value: string | null) => setOpenItem(value)}  
          type="single"
          collapsible
          className="w-full  border-none space-y-4  px-2   rounded-md"
        >
          <div
            className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
              openItem === "item-1" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            <AccordionItem className="border-none " value="item-1">
              <AccordionTrigger className="no-underline">
                Minions
              </AccordionTrigger>
              <AccordionContent>
                Minions are from Minons 
              </AccordionContent>
            </AccordionItem>
          </div>
          <div
            className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
              openItem === "item-2" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            <AccordionItem className="border-none " value="item-2">
              <AccordionTrigger className="">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div
            className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
              openItem === "item-3" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            <AccordionItem className="border-none " value="item-3">
              <AccordionTrigger className="">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </section>
  );
}

export default Showcase;
