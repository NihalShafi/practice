import Image from "next/image";
import "./style.css";
import Destinations from "./components/Destinations";
import Testimoniels from "./components/Testimoniels";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex dark:bg-slate-800 bg-slate-100 min-h-screen flex-col items-center justify-between px-14 pt-9">
      <nav className="flex z-20  bg-white bo top-0 fixed  items-center justify-between px-8 py-5 w-full  ">
        <div>
          <img src="./images/aially.png" alt="" />
        </div>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>About Us</li>
          <li>FAQ</li>
        </ul>

        <button className="rounded-full outline outline-black outline-1 bg-[#54ea54] bg w-24 py-3">
          Sign Up
        </button>
      </nav>

      <section className="h-[80vh]  flex items-center justify-center mt-16 w-full box1 px-10 rounded-3xl relative bg-[#181a1b]">
        <div className="bg-gradient-radial from-slate-50 to-50% blur-2xl rounded-full w-[550px] h-[550px]  absolute right-36" />
        <div className="flex  items-center justify-center px-4 flex-col w-1/2">
          <div className="w-[60%]">
            <h1 className="text-[3rem]   text-wrap font-extrabold font-sans text-white">
              Unleash the full potential of Al
            </h1>
            <div className="">
              <h4 className="text-white text-wrap  font-mono mt-3 ">
                Al Ally is a versatile assistant that utilizes state-of-the-art
                natural language processing to provide real-time support and
                assistance across various domains
              </h4>
            </div>

            <div className="flex w-[93%]   items-center    mt-6 h-12 ">
              <button className="rounded-full  button1  w-[150px] transition-all duration-75 ease-in-out hover:w-[170px] p-2 bg-[#54ea54] outline-1 outline outline-slate-950 outline-offset-2  text-slate-950  group">
                <span className="font-semibold text-black">Get the App</span>
                <span className="inline-block ml-2 transform transition-transform duration-200 ease-in-out group-hover:translate-x-1">
                  →
                </span>
              </button>

              <a
                href="3"
                className="text-white ml-8 hover:underline underline-offset-4"
              >
                More
              </a>
            </div>

            <div className="flex mt-6 justify-between w-full text-white">
              <div className="">
                <h1 className="text-[2rem] font-bold">4.8</h1>
                <h3>Rating on AppStore</h3>
              </div>

              <div className="">
                <h1 className="text-[2rem] font-bold">700k+</h1>
                <h3>Acive users</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-sm  flex h-full flex-col justify-end items-center w-1/2">
          <div className="relative ">
            <Image
              className=""
              src="/images/Layer 1.png"
              alt="o1.png"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <Destinations />
      <Showcase />
      <Testimoniels />
      <Pricing />
      <Footer />
    </main>
  );
}
