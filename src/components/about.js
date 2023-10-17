import React from "react";
import abtImg from "../assets/abt-img.png"

const About = () => {
  return (
    <section id="about" className="flex flex-row justify-center items-center bg-amber-600  gap-4  max-sm:flex-col">
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

      <div className="w-3/5 text-white h-auto px-36 py-16 text-justify max-sm:p-8 max-sm:w-10/12 max-sm:text-justify  ">
        <h2 className="font-semibold text-2xl mb-4 max-sm:text-center">Vision</h2>
        <p className="mb-12">
        "Our vision is to become a leading IT company and build a dynamic, forward-thinking organization that nurtures talent and contributes positively to the global digital landscape."
        </p>
        <h2 className="font-semibold text-2xl mb-4 max-sm:text-center">Mission</h2>
        <p>
        "To empower businesses with innovative technology solutions, creative design, and data-driven insights, enhancing their digital presence and operational efficiency that drive success and growth for our clients."

        </p>
        <h2 className="text-2xl font-semibold mt-12 mb-2 max-sm:text-center max-sm:mb-6">Core Values</h2>
        <div class="pr-6 pt-4 pb-2 w-full max-sm:text-center max-sm:p-0 ">
        
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-amber-600 mr-2 mb-2">Innovation</span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-amber-600 mr-2 mb-2">Client-Centric</span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-amber-600 mr-2 mb-2">Quality</span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-amber-600 mr-2 mb-2">Integrity</span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-amber-600 mr-2 mb-2">Teamwork</span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-amber-600 mr-2 mb-2">Continuous Learning</span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-amber-600 mr-2 mb-2">Sustainability</span>
      </div>
      </div>
    </section>
  );
};

export default About;
