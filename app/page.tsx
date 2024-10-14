import Image from "next/image";
import "./style.css";
import Destinations from "./components/Destinations";
import Testimoniels from "./components/Testimoniels";
import Showcase from "./components/Showcase";
export default function Home() {
  return (
    <main className="flex bg-slate-100 min-h-screen flex-col items-center justify-between px-14 py-9">
      <nav className="flex z-20  bg-white bo top-0 fixed  items-center justify-between px-8 py-5 w-full  ">
        <div>
          <h1>Nghastly</h1>
        </div>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>About Us</li>
          <li>FAQ</li>
        </ul>

        <button className="rounded-full outline outline-black outline-1 bg-blue-800 text-white w-24 py-3">
          Sign Up
        </button>
      </nav>

      <section className="h-[90vh]  flex items-center justify-center mt-16 w-full box1 px-10 rounded-3xl bg-blue-600">
        <div className="flex   justify-center px-4 flex-col w-1/2">
          <h1 className="text-[3.4rem]   text-wrap font-extrabold font-sans text-white">
            Unleash Your Cretive Ideas to Us We make your Creative ideas to
            Reality
          </h1>
          <footer className="text-white font-mono mt-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex minima
            vero delectus ad inventore esse quo, fuga labore veniam aut autem
            aliquam corrupti voluptatem, debitis repudiandae optio repellat
            eaque ipsam.
          </footer>
          <div className="flex mt-6 h-12 ">
            <button className="rounded-full button1 ml-6 w-[150px] transition-all duration-75 ease-in-out hover:w-[170px] p-2 bg-red-400 text-white relative group">
              Know More
              <span className="inline-block ml-2 transform transition-transform duration-200 ease-in-out group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
        <div className=" rounded-sm  flex justify-center w-1/2">
          <Image
            className=""
            src="/01.png"
            alt="o1.png"
            width={300}
            height={300}
          />
        </div>
      </section>
      <Destinations />

      <Showcase/>
      <Testimoniels/>
    </main>
  );
}
