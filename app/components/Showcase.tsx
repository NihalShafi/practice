"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { collapse } from "..";

function Showcase() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <section className="h-[500px]  w-full flex px-10  mt-10 justify-between  items-center">
      <div className="w-[50%] h-full items-center flex-col-reverse flex">
        <img className="w-[300px] object-cover justify-self-end" src="./images/Layer 2.png" />
      </div>

      <div className="w-[50%] h-full flex items-center justify-center">
        <Accordion
          onValueChange={(value: string | null) => setOpenItem(value)}  
          type="single"
          collapsible
          className="w-full  border-none space-y-4  px-2   rounded-md"
        >
          
       
          {collapse.map((c,value)=>(
            <div
            key={value} className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
              openItem === c.key ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            <AccordionItem className="border-none " value={c.key}>
              <AccordionTrigger className="no-underline">
                {c.name}
              </AccordionTrigger>
              <AccordionContent>
                {c.info}
              </AccordionContent>
            </AccordionItem>
          </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Showcase;
