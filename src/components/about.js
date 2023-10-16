import React from "react";
import abtImg from "../assets/abt-img.png"

const About = () => {
  return (
    <div id="about" className="flex flex-row justify-center items-center bg-amber-600  gap-4  max-sm:flex-col">
      <div className="flex flex-col justify-center items-center w-1/2 max-sm:w-full">
        <div className="abt-head">
          <h1 className=" text-7xl text-white font-semibold pl-56 mt-16 max-sm:pl-24 max-sm:text-5xl ">
            About Us
          </h1>
        </div>
        <div className="abt-img max-sm:opacity-0 max-sm:-z-20 max-sm:absolute">
          <img src={abtImg}></img>
        </div>
      </div>

      <div className="w-3/5 text-white h-auto px-36 py-16 max-sm:p-8 max-sm:w-full">
        <h2 className="font-semibold text-2xl mb-4">Vision</h2>
        <p className="mb-12">
          "Our vision is to become a leading IT company that transforms
          businesses through cutting-edge technology and creative excellence. We
          aspire to be the go-to partner for businesses seeking comprehensive
          solutions for their digital needs. We aim to build a dynamic,
          forward-thinking organization that nurtures talent, fosters
          innovation, and contributes positively to the global digital
          landscape."
        </p>
        <h2 className="font-semibold text-2xl mb-4">Mission</h2>
        <p>
          "To empower businesses with innovative technology solutions, creative
          design, and data-driven insights, enhancing their digital presence and
          operational efficiency. We are committed to delivering exceptional
          website development, data analytics, creative design, data entry, and
          content writing services that drive success and growth for our
          clients."
        </p>
      </div>
    </div>
  );
};

export default About;
