"use client";
import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from 'react-player'

export default function WhatDoWeDo() {
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
    <div className="lg:px-20 lg:mt-48 md:px-11 ">
      <div className="flex flex-col lg:flex-row  mb-16 lg:mb-20 ">
        <div className="flex-1 font-bold text-3xl flex-col">
          <p>BUILDING TECHNOLOGY </p>
          <p>DRIVEN EXPERIENCES </p>
        </div>
        <div className="flex-1 ">
          <p className="text-xl font-md mt-9 lg:mt-0	">
            Our expert team redefines possibilities with scalable digital
            solutions. From architecture and education to entertainment,
            advertising, and ecommerce, we cater to diverse industries.
           Immersive virtual solutions, branded platforms, and more.{" "}
            <span className="font-semibold">
              Engage,inspire, and connect with your customers in exciting new
              ways.
            </span>
          </p>
        </div>
      </div>
      <motion.div
        variants={objectVariations}
        initial="offscreen"
        whileInView="onscreen"
      >
 <div>

 <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://vimeo.com/856506193'
          width='100%'
          height='100%'
          muted={true}
          playing={true}
        />
      </div>

    </div>
      </motion.div>
      <motion.div
        variants={objectVariations}
        initial="offscreen"
        whileInView="onscreen"
      >
        <div className="flex flex-col lg:flex-row mt-24 mb-16 lg:mb-32 ">
          <div className="  flex-1 font-bold text-3xl flex-col">
            <p className="lg:pr-36 uppercase">
              Together, we shape the future of the web where beauty and
              scalability go hand in hand.
            </p>
            <img src="images/images/stars.svg" alt="logo" className="stars" />
          </div>
          <div className="flex-1 ">
            <p className="text-xl font-md mt-10 lg:mt-0">
              Our cutting-edge technology delivers hyper-real 3D product
              visualizations, immersive interactive features, and seamless
              integration with the web, making the metaverse accessible to
              anyone, anywhere.
            </p>
            <p className="text-xl sm:mb-0 font-md mt-10 lg:mt-10">
              Whether you are looking for an immersive virtual experiences, cutting-edge
              branded platforms, or impactful educational solutions, our mission
              is to redefine the possibilities in the digital realm. With a
              focus on delivering unparalleled experiences, we strive to engage,
              inspire, and connect people in extraordinary and transformative
              ways. 
            </p>
            {/* <div className="flex  items-center flex-col lg:flex-row mt-20 lg:mt-36">
              <div className="flex flex-col">
                <p className="text-6xl lg:text-8xl font-bold ttext-gray-50		">
                  +100T
                </p>
                <p className="font-bold  text-center lg:text-right text-sm lg:text-base text-slate-800">
                  PIXELS STREAMED
                </p>
              </div>
             
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
