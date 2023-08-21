import React from "react";
import { motion } from "framer-motion";


export default function Applications() {


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
    <div className="lg:px-20 pb-20 pt-20 md:px-11 p-10">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex-1 mb-16 font-bold text-3xl flex-col">
          <p>APPLICATIONS </p>
        </div>
        <motion.div
        className="flex-1 "
            variants={objectVariations}
            initial="offscreen"
            whileInView="onscreen"
          >
        <div >
          <ul
  
            className="list-disc leading-loose font-light text-xl"
          >
         <li>
              <span className="font-bold ">Architecture: </span>
              Concept art and visual exploration: Developing the visual identity
              and exploring different aesthetics.
            </li>

            <li className="mt-7">
              <span className="font-bold">Education: </span>
              Interactive virtual learning environments that enhance engagement
              and provide immersive educational experiences for empployees and
              students in professional as well as educational enviroments.
            </li>

            <li className="mt-7">
              <span className="font-bold">Entertainment: </span>
              Virtual reality (VR) and augmented reality (AR) experiences that
              revolutionize gaming, storytelling, and immersive entertainment,
              blurring the lines between the real and virtual worlds.
            </li>

            <li className="mt-7">
              <span className="font-bold">Advertising: </span>
              Cutting-edge advertising campaigns that leverage immersive
              technologies to captivate audiences, deliver memorable brand
              experiences, and drive customer engagement.
            </li>
            <li className="mt-7">
              <span className="font-bold">Ecommerce: </span>
              Virtual shopping experiences that enable customers to visualize
              and interact with products in realistic 3D, improving the online
              shopping journey and increasing conversion rates.
            </li>
          </ul>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
