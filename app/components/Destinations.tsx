import Image from "next/image";
import React from "react";
// import "../style.css";

import { data } from "@/app/index";

function Destinations() {
  return (
    <section className="flex flex-col w-full items-center justify-center  mt-10 h-[850px] px-10">
      <div className="">
        <h1 className="text-4xl font-bold  ">Different Destinations</h1>
      </div>

      <div className="w-full flex items-center justify-between h-[100px]">
        <div className="w-1/4">
          <h4 className="text-sm">
            We explore the diverse ways in which this technology can
            revolutionize work across various industries and fiels
          </h4>
        </div>

        <div className="w-1/4">
          <h4 className="text-sm">
            Discover how Ai can streamline processes and elevate your work to
            new height.
          </h4>
        </div>

        <div className="w-1/4 flex flex-row-reverse">
          <h4 className="text-sm text-left">Discover all applications</h4>
        </div>
      </div>

      <div className="flex gap-4 justify-between w-full ">
        {data?.map((t, value) => (
          <div
            key={value}
            className="w-1/3 flex-col items-center justify-between  py-6  flex min-h-[450px] "
          >
            <div className="rounded-2xl bg-orange-600 overflow-hidden w-[80%] h-72   relative">
              <div className="z-10 absolute rounded-full top-5 left-3 p-1 outline outline-1 outline-black text-black bg-white">
                Try it now
              </div>
              <img
                src={t.imgurl}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="w-full px-11 ">
              <h1 className="text-2xl">{t.title}</h1>
              <p className="mt-2">{t.descreption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center  items-center h-16">
        <button className="rounded-full   py-3 px-6 mt-9 bg-[#54ea54] outline-1 outline outline-slate-950 outline-offset-2  text-slate-950  group">
          <span className="font-semibold text-black">
            And more than 50 other destionations
          </span>
          
        </button>
      </div>
      {/* <div className="flex gap-4 justify-between w-full ">
        <div className="w-1/3 flex-col items-center justify-between  py-6  flex min-h-[450px] ">
          <div className="rounded-2xl bg-orange-600 overflow-hidden w-[80%] h-72   relative">
            <div className="z-10 absolute rounded-full top-5 left-3 p-1 outline outline-1 outline-black text-black bg-white">
              Try it now
            </div>
            <img src="./images/nihal.png" alt="" />
          </div>

          <div className="w-full px-11 ">
            <h1 className="text-2xl">Students</h1>
            <p className="mt-2">
              Ai Ally can assist in research, provide 
              learning materials, and answer questions
            </p>
          </div>
        </div>


      

        


        
      </div> */}
    </section>
  );
}

export default Destinations;
