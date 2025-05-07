import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/alex_01.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      {" "}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pd-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Alexander Allotey-Bray
            </motion.h1>
            <br />
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Developer | IT Analyst
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tigher"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-1">
          {" "}
          <div className="flex justify-center">
            <div className="w-[500px] h-[400px] overflow-hidden">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                alt="Alex Profile Picture"
                className=" rounded-3xl w-full h-auto object-cover object-top"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
