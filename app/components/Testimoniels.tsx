import React from "react";

function Testimoniels() {
  return (
    <section className="flex h-[650px] flex-col px-8 py-9   w-full ">
      <div className="w-full justify-between gap-6 items-center py-7  flex ">
        <h1 className="text-3xl text-nowrap">The Results from nobody</h1>

        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          harum quos iure pariatur impedit fugit quis eligendi obcaecati beatae
          provident consectetur quam illum commodi voluptatem quae nostrum odit
          dolor error!
        </p>

        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          harum quos iure pariatur
        </p>
      </div>

      <div className="flex w-full justify-between gap-3 p-10 h-full">
        <div className="bg-green-300 w-1/3 justify-between flex flex-col px-6 py-8 rounded-3xl h-full">
          <div>
            <p className=" text-lg font-semibold font-sans">
              "What stands out to me is the seamless responsiveness across all
              devices. Whether I’m on a tablet, phone, or desktop, the design
              adjusts beautifully. Plus, the overall functionality and ease of
              use make the site feel very professional and polished."
            </p>
          </div>

          <div className="flex gap-3 items-center ">
            <div className="overflow-hidden outline-2 outline-black outline outline-offset-2 w-10 h-10 rounded-full ">
              <img
                className="object-cover w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-mono font-semibold">Jhon Wick</h3>
              <footer className="text-sm font-light">
                The Nobody
              </footer>
            </div>
          </div>
        </div>

        <div className="bg-red-300 w-1/3 justify-between flex flex-col px-6 py-8 rounded-3xl h-full">
          <div>
            <p className=" text-lg font-semibold font-sans">
              "I really appreciate how fast the website loads and how smoothly
              everything runs, even on my mobile device. It's clear that a lot
              of effort went into optimizing the performance, which makes the
              user experience much more enjoyable."
            </p>
          </div>

          <div className="flex gap-3 items-center ">
            <div className="overflow-hidden outline-2 outline-black outline outline-offset-2 w-10 h-10 rounded-full ">
              <img
                className="object-cover w-full h-full"
                src="./images/nihal.png"
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
              "The site’s design is clean and intuitive, making it easy to find
              what I need without any hassle. The navigation is smooth, and the
              layout works perfectly across different screen sizes. It feels
              like a lot of attention went into ensuring a great user
              experience."
            </p>
          </div>

          <div className="flex gap-3 items-center ">
            <div className="overflow-hidden outline-2 outline-black outline outline-offset-2 w-10 h-10 rounded-full ">
              <img
                className="object-cover w-full h-full"
                src="./images/mymoon.png"
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
