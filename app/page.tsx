import Image from "next/image";


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between px-14 py-9">

      <nav className="flex  bg-white bo top-0 fixed  items-center justify-between px-8 py-5 w-full  ">
      
      <div>
      <h1>
        Nghastly
      </h1>
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

      <section   className="h-[90vh] flex items-center justify-center mt-16 w-full box1 rounded-3xl bg-blue-600">
      <div className="flex flex-col">
      <h1 className="text-[4rem] text-wrap font-extrabold italic text-white">
        Unleash Your Cretive Ideas to Us <br />
        We make your Creative ideas to Reality
      </h1>
      </div>
      <div>
        <Image src="/01.png"
        alt="o1.png"
        width={100}
        height={100}/>
      </div>
      </section>
    </main>
  );
}
