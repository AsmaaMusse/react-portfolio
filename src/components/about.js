import React from "react";

import picture from "../assets/images/Asmaa.jpg";
import "../App.css";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Asmaa Musse,
            <br />
            Full-Stack Web Developer.
          </h1>

          <p className="mb-8 leading-relaxed">
            I am a Software Web Developer based in the UK who is passionate
            about designing websites from scratch and making clients ideas turn
            to reality.
          </p>

          <div className="flex justify-center">
            <a
              href="https://docs.google.com/document/d/1lbwbAg4vfAlx0W6kf1Pz6cMBgKTcxd8x_bs1WiiEhVo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-4/12 sm:w-6/12 px-2">
            <img
              src={picture}
              alt="profile picture"
              className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
