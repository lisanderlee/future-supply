import React from "react";
import { motion } from "framer-motion";

export default function OurStack() {
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
    <div className="mx-auto px-10 pt-20 pb-20 lg:pt-32 lg:pb-32 lg:px-20">
      <motion.div
        variants={objectVariations}
        initial="offscreen"
        whileInView="onscreen"
      >
        <div className="  ">
          <div className="flex flex-col flex-1 ">
            <div className="font-bold text-3xl w-1/2">
              <p>OUR STACK </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center	 mt-20	">
              <div className="m-10">
                <img
                  src="images/images/unreal.svg"
                  alt="logo"
                  width="183"
                />
              </div>
              <div className="m-10">
                <img
                  src="images/images/azure.svg"
                  alt="logo"
                  width="334"
                />
              </div>
              <div className="m-10">
                <img
                  src="images/images/next.svg"
                  alt="logo"
                  width="142"
                  height="84"
                />
              </div>
              <div className="m-10">
                <img
                  src="images/images/webgl.svg"
                  alt="logo"
                  width="246"
                  height="70"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
