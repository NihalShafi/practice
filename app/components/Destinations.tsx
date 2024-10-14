import Image from "next/image";
import React from "react";
// import "../style.css";

function Destinations() {
  return (
    <section className="flex flex-col w-full mt-10 h-auto px-10">
      <div className="">
        <h1 className="text-4xl font-bold font-serif ">NGhastly Designers</h1>
      </div>

      <div className="flex w-full justify-center  bg-red-700  items-center   ">
        
        <figure className="w-1/3 h-[400px] bg-gradient-to-t to-slate-800 flex  group  transition-all duration-75 ease-in-out overflow-hidden relative">
        <img src="./images/image1.jpg"  className="object-cover before:to-slate-200 bg-gradient-to-t  w-auto scale-110 group-hover:scale-100 transition-all duration-75 " alt="" />
          <figcaption className="  absolute   text-center translate-y-7 group-hover:translate-y-0   group-hover:opacity-100 opacity-0 transition-all duration-75 ease-in-out flex items-center justify-center self-center before:to-slate-500 bg-gradient-to-t inset-0 w-full  ">
            <h1 className="text-black">Hi There </h1>
          </figcaption>
        </figure>
       
      </div>
    </section>
  );
}

export default Destinations;
