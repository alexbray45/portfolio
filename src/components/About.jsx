import React from "react";
import aboutImg from "../assets/alex_02.jpg";
import { ABOUT_TEXT } from "../constants/index";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {" "}
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 lg:p-9 flex justify-center lg:justify-end">
          <div className="flex items-center justify-center">
            <img
              className="rounded-3xl translate-x-8"
              src={aboutImg}
              alt="about me"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex justify-center lg:justify-start">
            <p className="my-20 max-w-2xl py-10 -translate-y-20">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
