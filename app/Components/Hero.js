import React from "react";
import Head from "./Model";

import TalkButton from "./TalkButon";

export default function Hero() {
  return (
    <>
      <div className=" flex h-screen flex-col md:px-11 lg:place-content-center lg:py-10 lg:px-20">
        <div className="flex h-full justify-between">
          <div>
            <img src="images/images/logo.svg" alt="logo" width="300" />
          </div>
          <div>
            <p>©2023.</p>
          </div>
        </div>
        <h3 className="text-2xl flex justify-items-start font-medium">
          A CREATIVE TECHNOLOGY STUDIO
        </h3>
        <div className="hero-text w-full ">
          <div className="flex mt-3 w-full justify-center flex-col ">
            <h1 className="css-selector z-20 hero-line1">
              RE-IMAGINE TECHNOLOGY
            </h1>
            <div className="flex align-middle items-center flex-row">
              <h1 className="z-20 hero-line1">WITH US</h1>
              <button className=" first-letter hidden lg:block relative z-30 ml-12 ">
                <TalkButton />
              </button>
            </div>
          </div>
        </div>
        <h2 className=" text-base lg:text-lg sans tracking-widest font-light mt-6 lg:mt-36">
          IMMERSIVE EXPERIENCES, METAVERSE AND PIXEL STREAMING SERVICES{" "}
        </h2>
        <button className=" first-letter hidden relative z-30 mt-10 ">
          <TalkButton />
        </button>
        <Head />
      </div>
    </>
  );
}
