import React from "react";
import { motion } from "framer-motion";
export default function Team() {
  const objectVariations = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
        damping: 4,
      },
    },
  };
  return (
    <>
      <div className="mx-auto px-10 pb-20 pt-20  lg:px-32 lg:pb-32 lg:pt-32">
        <div className="flex flex-col flex-1 ">
          <motion.div
            variants={objectVariations}
            initial="offscreen"
            whileInView="onscreen"
          >
            <div className="flex flex-col pb-24 lg:flex-row ">
              <div className=" flex-1 pb-10 lg:pb-24 font-bold text-3xl flex-col text-slate-800	">
                <p>THE TEAM </p>
              </div>
              <div className="flex-1 ">
                <p className="text-xl font-md mt-0 lg:mt-0 text-slate-800	">
                  Meet our dream team of tech wizards, creative maestros, and
                  innovation enthusiasts. We are like a blend of caffeinated
                  unicorns and coding superheroes, on a mission to make your
                  digital dreams come true.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={objectVariations}
            initial="offscreen"
            whileInView="onscreen"
          >
            <div className="flex flex-col lg:mt-0 lg:flex-row  items-center justify-between	">
              <div className="flex items-center	 m-10 lg:m-0 justify-center flex-col ">
                <div className="h-60 w-60 flex justify-center team rounded-full">
                  <img
                    className="rounded-full "
                    src="images/team/Martin.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Martin Zenzerovich</p>
                  <p>CEO & Co-Founder</p>
                  <p className=" mt-4 text-sm font-light   w-60 text-center">
                    Systems Engineer, 20 years of software development
                    experience. Ex-Googler & DreamWorker. Loves pasta.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center	 m-10 justify-center flex-col ">
                <div className="h-60 w-60 flex justify-center  team rounded-full">
                  <img
                    className="rounded-full"
                    src="images/team/Matias.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Matías Podrojsky</p>
                  <p>COO & Co-Founder</p>
                  <p className=" mt-4 text-sm font-light   w-60 text-center">
                    Systems Engineer, serial entrepreneur, expert team-builder.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center	m-10 justify-center flex-col ">
                <div className="h-60 w-60 flex justify-center  team rounded-full">
                  <img
                    className="rounded-full"
                    src="images/team/Lisandro.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Lisandro Ancewicz</p>
                  <p>CCO & Co-Founder</p>
                  <p className=" mt-4 text-sm font-light   w-60 text-center">
                    Chief futurist & visionnaire, VFX specialist.
                    Ex-DreamWorker, Ex-Microsoft.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center	 m-10 justify-center flex-col ">
                <div className="h-60 w-60 flex justify-center  team rounded-full">
                  <img
                    className="rounded-full  "
                    src="images/team/Paz.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Paz Piña</p>
                  <p>Head of Customer Success</p>
                  <p className=" mt-4 text-sm font-light   w-60 text-center">
                    Chief futurist & visionnaire, VFX specialist.
                    Ex-DreamWorker, Ex-Microsoft.{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={objectVariations}
            initial="offscreen"
            whileInView="onscreen"
          >
            <div className="flex flex-col  lg:flex-row items-center justify-between	">
              <div className="flex items-center	 m-10  justify-center flex-col ">
                <div className="h-60 w-60 flex justify-center  team rounded-full">
                  <img
                    className="rounded-full"
                    src="images/team/Thomas.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Tom Corellano</p>
                  <p>Blockchain Architect</p>
                  <p className=" mt-4 text-sm font-light w-60 text-center">
                    Hacker in Chief, entrepreneur, sustainability expert.{" "}
                  </p>
                </div>
              </div>
              <div className="flex m-10 items-center justify-center flex-col ">
                <div className="h-60 w-60 flex justify-center  team rounded-full">
                  <img
                    className="rounded-full "
                    src="images/team/Edu.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Eduardo Bais</p>
                  <p>Chief Visualizations</p>
                  <p className=" mt-4 text-sm font-light   w-60 text-center">
                    Chief futurist & visionnaire, VFX specialist.
                    Ex-DreamWorker, Ex-Microsoft.{" "}
                  </p>
                </div>
              </div>

              <div className="flex m-10 justify-center items-center	 flex-col ">
                <div className="h-60 w-60 flex justify-center  team rounded-full">
                  <img
                    className="rounded-full   "
                    src="images/team/Paz.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Alan Jones</p>
                  <p>Metaverse Strategy Advisor</p>
                  <p className=" mt-4 text-sm font-light   w-60 text-center">
                    Chief futurist & visionnaire, VFX specialist.
                    Ex-DreamWorker, Ex-Microsoft.{" "}
                  </p>
                </div>
              </div>

              <div className="flex m-10 justify-center items-center	 flex-col ">
                <div className="h-60 w-60 flex justify-center  team rounded-full">
                  <img
                    className="rounded-full   "
                    src="images/team/Paz.png"
                    alt="logo"
                  />
                </div>
                <div className="sans text-base flex items-center flex-col text-center mt-5">
                  <p className="font-bold">Alan Jones</p>
                  <p>Metaverse Strategy Advisor</p>
                  <p className=" mt-4 text-sm font-light   w-60 text-center">
                    Chief futurist & visionnaire, VFX specialist.
                    Ex-DreamWorker, Ex-Microsoft.{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
