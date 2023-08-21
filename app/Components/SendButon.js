import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function TalkButton() {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <motion.div
          className="absolute right-1 top-1"
          whileHover={{
            transition: { duration: 1 },
            rotate: [0, 0, 180, 180, 0],
          }}
        >
          <div className="flex rounded-full  z-30 h-14 w-14  justify-center items-center bg-blue-500">
            <ArrowUpRightIcon className="flex text-white h-8" />
          </div>
        </motion.div>
        <div className="flex justify-right pl-5 items-center flex-row   rounded-full h-16 w-52   bg-slate-800">
          <p className=" text-white   text-2xl">Let&apos;s Talk</p>
        </div>
      </motion.div>
    </div>
  );
}
