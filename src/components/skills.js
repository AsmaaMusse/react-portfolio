import React from "react";
import { frontend, backend, nonTechnical, softSkills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>

        <h2>Frontend:</h2>
        <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
          {frontend.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <br />

        <h2>Backend:</h2>
        <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
          {backend.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <br />

        <h2>Non Technical:</h2>
        <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
          {nonTechnical.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <br />

        <h2>Soft Skills:</h2>
        <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
          {softSkills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
