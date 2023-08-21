"use client";

import Hero from "./Components/Hero";
import WhatDoWeDo from "./Components/WhatDoWeDo";
import ContactDesign from "./Components/ContactDesign";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Applications from "./Components/Applications";
import OurStack from "./Components/OurStack";
import { motion, useScroll, useSpring, stagger } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sectionVariants = {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
        damping: 10,
      },
    },
  };

  return (
    <main className="w-screen h-screen">
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, delay: stagger(2) }}
      >
        <Hero />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <WhatDoWeDo />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Applications />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <OurStack />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <ContactDesign />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <ContactUs />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Footer />
      </motion.div>
      <motion.div className="progress" style={{ scaleX }} />
    </main>
  );
}
