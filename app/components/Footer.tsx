import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full items-center flex-col  flex py-8 px-6">
      <div className=" w-full flex justify-between items-center px-5 py-2 ">
        <div className="w-[20%]">
          <Image width={100} height={100} src="/images/aially.png" alt="" />
        </div>

        <div className="flex ">
          <ul className=" flex gap-8 list-none">
            <li>Home</li>
            <li>Fetures</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="flex ">
          <ul className=" flex gap-8 list-none">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className="w-full justify-between text-gray-300 flex border-t px-4 border-gray-300 mt-6 py-4 items-center ">
        <h3 className="text-sm">
          Copyright &#169; 2024 Nihal Shafi Nghastly Designs
        </h3>

        <h3 className="text-sm">
          <a href="">Privacy Policy</a>
        </h3>
      </div>
    </section>
  );
}
