import React from "react";
import { motion } from "framer-motion";

export default function OurServices() {
  const objectVariations = {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        damping: 10,
      },
    },
  };
  return (
    <div className="lg:px-28  mt-20 mb-20 md:px-11 sm:px-5 p-10 lg:pb-32 lg:pt-32">
      <div className="flex  flex-col md:flex-col   ">
        <div className=" flex-1 font-bold text-3xl flex-col text-slate-800	">
          <p>OUR SERVICES</p>
        </div>
        <div className="flex justify-center items-center lg:items-stretch	 lg:mt-10 md:flex-row lg:flex-col flex-col">
          <div className="flex  lg:flex-row lg:justify-between flex-col">
            <div className="flex flex-col w-80	mt-20 lg:mt-10 items-center">
              <img
                src="images/logos/services_icons/modeling.png"
                alt="logo"
                width="120"
              />
              <div className="mt-7">
                <p className="font-bold text-xl text-center">
                  TURNKEY EXPERIENCES:{" "}
                </p>
                <p className="text-center mt-6 text-base">
                  {" "}
                  Hassle-free immersive experiences tailored to your needs, from
                  concept to execution.
                </p>
              </div>
            </div>

            <div className="flex mt-10 flex-col w-80	items-center">
              <img
                src="images/logos/services_icons/story.png"
                alt="logo"
                width="120"
              />
              <div className="mt-7">
                <p className="font-bold text-xl text-center">
                  {" "}
                  STAFF AUGMENTATION:{" "}
                </p>
                <p className="text-center mt-6 text-base">
                  {" "}
                  Expand your teams capabilities with expert talent in metaverse
                  technologies, Web3, and pixel streaming.
                </p>
              </div>
            </div>

            <div className="flex mt-10 flex-col w-80	items-center">
              <img
                src="images/logos/services_icons/artconcept.png"
                alt="logo"
                width="120"
              />
              <div className="mt-7">
                <p className="font-bold text-xl text-center">
                  ONDEMAND PIXEL STREAMING:{" "}
                </p>
                <p className="text-center mt-6 text-base">
                  {" "}
                  Real-time, high-fidelity rendering and streaming for
                  graphics-intensive applications, accessible from any device.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            variants={objectVariations}
            initial="offscreen"
            whileInView="onscreen"
          >
            <div className="flex mt-17 lg:mt-20 lg:flex-row lg:justify-between flex-col">
              <div className="flex mt-10 flex-col w-80	items-center">
                <img
                  src="images/logos/services_icons/ux.png"
                  alt="logo"
                  width="120"
                />
                <div className="mt-7">
                  <p className="font-bold text-xl text-center">
                    {" "}
                    CUSTOMIZABLE INTERATIONS:{" "}
                  </p>
                  <p className="text-center mt-6 text-base">
                    {" "}
                    Engage your audience with tailored interactions, from
                    product showcases and ecommerce to personalized avatars.
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-80	mt-10 items-center">
                <img
                  src="images/logos/services_icons/scope.png"
                  alt="logo"
                  width="120"
                />
                <div className="mt-7">
                  <p className="font-bold text-xl text-center">
                    SEAMLESS EXPERIENCES:{" "}
                  </p>
                  <p className="text-center mt-6 text-base">
                    {" "}
                    Our advanced tech ensures smooth transitions, realistic
                    visuals, and fluid interactions for an authentic metaverse
                    engagement.{" "}
                  </p>
                </div>
              </div>

              <div className="flex mt-10 flex-col w-80	items-center">
                <img
                  src="images/logos/services_icons/development.png"
                  alt="logo"
                  width="120"
                />
                <div className="mt-7">
                  <p className="font-bold text-xl text-center">
                    FULL STACK TECH IMPLEMENTATION:{" "}
                  </p>
                  <p className="text-center mt-6 text-base ">
                    {" "}
                    End-to-end development of robust metaverse solutions, Web3
                    platforms, and pixel streaming applications.{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    //   <div className="mx-auto px-2 sm:px-6 lg:px-32">
    //   <div>
    //     <div className="flex flex-col flex-1 mt-20 mb-20">
    //       <div className="font-bold  text-slate-800	 text-3xl w-full">
    //         <div className="h-0.5 w-100 bg-slate-800 w-40 mb-10"> </div>
    //         <p>OUR SERVICES </p>
    //       </div>

    //       <div className="mt-20 flex lg:flex-row md:flex-row sm:flex-col justify-between">

    //       <div className="mt-20 flex lg:flex-row md:flex-row sm:flex-col justify-between">

    //       {/* <div className="font-base text-slate-800	text-2xl w-1/2">
    //         <ul className="list-disc leading-10">
    //           <li>
    //             Scope and reach study: Understanding the parameters and extent
    //             of the projects impact.
    //           </li>

    //           <li>
    //             Concept and storytelling development: Creating a cohesive and
    //             engaging narrative for the project.
    //           </li>

    //           <li>
    //             Concept art and visual exploration: Developing the visual
    //             identity and exploring different aesthetics.
    //           </li>

    //           <li>
    //             UX analysis: Analyzing and optimizing the user experience.
    //           </li>

    //           <li>
    //             Unreal model development: Building 3D models and environments
    //             using the Unreal engine.
    //           </li>

    //           <li>
    //             Full stack tech implementation: Implementing the technology
    //             required to bring the project to life.
    //           </li>
    //         </ul>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
  );
}
