import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function TalkButton() {
  return (
    <div>
      <motion.div  >
        <motion.div
          className="absolute right-1 top-1"
       
        
        >
          <div className="flex rounded-full  z-30 lg:h-14 lg:w-14 h-12  justify-center items-center bg-blue-500">
            <ArrowUpRightIcon className="flex text-white h-8" />
          </div>
        </motion.div>
        <div className="flex justify-right pl-5 items-center flex-row   rounded-full h-14  w-44 lg:h-16 lg:w-52   bg-slate-800">
          <p className=" text-white   text-base lg:text-2xl">Let&apos;s Talk</p>
        </div>
      </motion.div>
    </div>
  );
}
