import Image from "next/image";
import React from "react";

function Testimoniels() {
  return (
    <section className="flex h-[650px] flex-col px-8 py-9   w-full ">
      <div className="w-full justify-between gap-6 items-center py-7 px-10  flex ">
        <h1 className="text-5xl font-bold text-nowrap">Testimonials</h1>

        <p className="font-bold w-[30%] text-sm">
          Don't just take our word for it - hear from our satisfied clients who
          have experienced the transformative impact of our Al text tool
        </p>

        <p className="font-bold w-[30%] text-sm">
          Learn how this powerful tool has revolutionized their work and
          accelerated their success
        </p>
      </div>

      <div className="flex w-full justify-between gap-3 p-10 h-full">
        <div className="bg-green-300 w-1/3 justify-between flex flex-col px-6 py-8 rounded-3xl h-full">
          <div>
            <p className=" text-lg font-semibold font-sans">
              &quot;What stands out to me is the seamless responsiveness across
              all devices. Whether I’m on a tablet, phone, or desktop, the
              design adjusts beautifully. Plus, the overall functionality and
              ease of use make the site feel very professional and polished.
              &quot;
            </p>
          </div>

          <div className="flex gap-3 items-center ">
            <div className="overflow-hidden outline-2 outline-black outline outline-offset-2 w-10 h-10 rounded-full ">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
                src="/images/jhonwick.png"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-mono font-semibold">Jhon Wick</h3>
              <footer className="text-sm font-light">The Nobody</footer>
            </div>
          </div>
        </div>

        <div className="bg-red-300 w-1/3 justify-between flex flex-col px-6 py-8 rounded-3xl h-full">
          <div>
            <p className=" text-lg font-semibold font-sans">
              &quot;I really appreciate how fast the website loads and how
              smoothly everything runs, even on my mobile device. It's clear
              that a lot of effort went into optimizing the performance, which
              makes the user experience much more enjoyable. &quot;
            </p>
          </div>

          <div className="flex gap-3 items-center ">
            <div className="overflow-hidden outline-2 outline-black outline outline-offset-2 w-10 h-10 rounded-full ">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
                src="/images/nihal.png"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-mono font-semibold">Nihal Shafi</h3>
              <footer className="text-sm font-light">
                Designer at Mymoon Designs
              </footer>
            </div>
          </div>
        </div>

        <div className="bg-blue-300 w-1/3 justify-between flex flex-col px-6 py-8 rounded-3xl h-full">
          <div>
            <p className=" text-lg  font-semibold font-sans">
              &quot;The site’s design is clean and intuitive, making it easy to
              find what I need without any hassle. The navigation is smooth, and
              the layout works perfectly across different screen sizes. It feels
              like a lot of attention went into ensuring a great user
              experience.&quot;
            </p>
          </div>

          <div className="flex gap-3 items-center ">
            <div className="overflow-hidden outline-2 outline-black outline outline-offset-2 w-10 h-10 rounded-full ">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
                src="/images/mymoon.png"
                alt=""
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-mono font-semibold ">Mymoon PK</h3>
              <footer className="text-sm font-light">
                CEO at Mymoon Designs
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoniels;
