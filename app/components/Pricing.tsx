import { Crown, Lightbulb, Zap } from "lucide-react";
import { pricing } from "..";

function Pricing() {
  return (
    <section className="m-10 pt-9 w-full flex flex-col items-center justify-center rounded-3xl px-10 bg-[#181a1b]">
      <div className="w-full mt-7">
        <div>
          <h1 className="text-4xl text-white">Choose Your Plan</h1>
        </div>
      </div>

      <div className="w-full flex flex-col  mt-8 ">
        <div className="w-full flex rounded-2xl bg-gray-800 items-center justify-between py-5 px-10">
          <div>
            <h3 className="text-white text-lg font-sans font-semibold ">
              Subscription level
            </h3>
          </div>

          <div className="w-1/2  items-center gap-4 justify-between px-6   flex">
            <div className="bg-green-400 flex-1  flex justify-between py-2 px-3 rounded-lg   ">
              <h2 className="text-slate-900 font-sans font-semibold text-base">
                Basic
              </h2>

              <Lightbulb className="text-white" />
            </div>

            <div className="bg-purple-400 flex-1  justify-between flex  py-2 px-3 rounded-lg   ">
              <h2 className="text-slate-900 font-sans font-semibold text-base">
                Advance
              </h2>

              <Zap className="text-white" />
            </div>

            <div className="bg-yellow-400 flex-1 justify-between flex  py-2 px-3 rounded-lg   ">
              <h2 className="text-slate-900 font-sans font-semibold text-base">
                Premium
              </h2>

              <Crown className="text-white" />
            </div>
          </div>
        </div>

        {pricing.map((e, value) => (
          <div
            key={value}
            className="w-full flex  border-b border-gray-800  items-center justify-between py-5 px-10"
          >
            <div>
              <h3 className="text-white text-lg font-sans font-semibold ">
                {e.name}
              </h3>
            </div>

            <div className="w-1/2  items-center gap-4 justify-between px-6   flex">
              <div className=" flex-1  py-2 px-3 rounded-lg   ">
                <h2
                  className={`text-white font-sans ${
                    e.text ? e.text : "text-base font-semibold"
                  }`}
                >
                  {e.basic}
                </h2>
              </div>

              <div className=" flex-1  py-2 px-3 rounded-lg   ">
                <h2
                  className={`text-white font-sans ${
                    e.text ? e.text : "text-base font-semibold"
                  }`}
                >
                  {e.advance}
                </h2>
              </div>

              <div className=" flex-1  py-2 px-3 rounded-lg   ">
                <h2
                  className={`text-white font-sans ${
                    e.text ? e.text : "text-base font-semibold"
                  }`}
                >
                  {e.premium}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full  flex justify-between items-center px-14 mt-7 ">
        <div className="w-1/2  h-full flex flex-col items-center justify-center">
          <div className="w-[80%]   flex flex-col ">
            <h1 className="font-sans font-semibold   text-[4.4rem] text-white">
              Try it now
            </h1>
            <p className="text-white w-[80%]   text-sm mt-3">
              Download the Ai Ally on the AppStore and Google Play store and
              discover the world of artificial intelligence! Enjoy innovative Ai
              technologies directly on your Your device.
            </p>



            <div className="w-full    mt-5 flex gap-4">
            <button>
              <img width={180} src="./images/appstore.png" alt="" />
            </button>

            <button>
              <img width={180} src="./images/playstore.png" alt="" />
            </button>
          </div>
          </div>

          
        </div>

        <div className="w-[50%] h-full items-center flex-col-reverse flex">
          <img
            className="w-[300px] object-cover justify-self-end"
            src="./images/layer3.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
