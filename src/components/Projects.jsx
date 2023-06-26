import React from "react";

import profile from "../assets/images/profile.jpg";
import edsaJS from "../assets/images/p2.png";
import connectify from "../assets/images/p5.png";
import CaliKan from "../assets/images/p4.png";

import { MdVerified } from "react-icons/md";

const Projects = () => {
  return (
    <section className="w-full flex justify-center py-5">
      <div className="w-[768px] flex flex-col px-4 space-y-10">
        <div className="flex flex-row space-x-2">
          <div className="md:w-[5%] w-[10%]">
            <img src={profile} alt="profile" className="rounded-[50%] w-10" />
          </div>
          <div className="md:w-[95%] w-[90%] flex-col justify-start">
            <div
              className="flex md:text-base font-rroboto text-dblack
                        items-start text-sm"
            >
              <div className="flex items-center space-x-1">
                <h2
                  className="flex items-center md:text-lg font font-broboto
                                text-base"
                >
                  Loudakris Tuppal
                  <span className="ml-1 text-dgreen">
                    <MdVerified />
                  </span>
                </h2>
                <div
                  className="flex items-center space-x-1
                                text-dgray"
                >
                  <p>@loudatppl</p>
                  <p>·</p>
                  <p>6/21/23</p>
                </div>
              </div>
            </div>
            <div className="text-dblack md:text-base text-sm mb-2">
              <p>
                EDSA
                <br />
                <br />
                A car game created using HTML, CSS, and JavaScript.
                <br />
                <br />
                You can try it out at{" "}
                <a
                  href="https://edsa-js.vercel.app/"
                  target="_blank"
                  className="text-hash"
                >
                  EdsaJS
                </a>{" "}
                and view the source code at{" "}
                <a
                  href="https://github.com/loudatppl/edsa-js"
                  target="_blank"
                  className="text-hash"
                >
                  github/edsa-js
                </a>
                .
              </p>
              <p className="text-hash">
                <br />
                #html #css #js
              </p>
            </div>
            <div
              className="border border-lgray w-full
                        rounded-lg"
            >
              <img src={edsaJS} alt="EDSA" className="rounded-lg w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-2">
          <div className="md:w-[5%] w-[10%]">
            <img src={profile} alt="profile" className="rounded-[50%] w-10" />
          </div>
          <div className="md:w-[95%] w-[90%] flex-col justify-start">
            <div
              className="flex md:text-base font-rroboto text-dblack
                        items-start text-sm"
            >
              <div className="flex items-center space-x-1">
                <h2
                  className="flex items-center md:text-lg font font-broboto
                                text-base"
                >
                  Loudakris Tuppal
                  <span className="ml-1 text-dgreen">
                    <MdVerified />
                  </span>
                </h2>
                <div
                  className="flex items-center space-x-1
                                text-dgray"
                >
                  <p>@loudatppl</p>
                  <p>·</p>
                  <p>6/21/23</p>
                </div>
              </div>
            </div>
            <div className="text-dblack md:text-base text-sm mb-2">
              <p>
                Connectify
                <br />
                <br />
                A marketplace app that connects buyers, sellers, and suppliers,
                enabling them to form valuable connections and secure lucrative
                deals. Connectify is being developed using the MERN stack.
                <br />
                <br />
                Although it's work in progress you can checkout the initial
                features at{" "}
                <a
                  href="https://connectify-xzkm.onrender.com/"
                  target="_blank"
                  className="text-hash"
                >
                  Connectify
                </a>{" "}
                and view the source code at{" "}
                <a
                  href="https://github.com/loudatppl/connectify"
                  target="_blank"
                  className="text-hash"
                >
                  github/connectify
                </a>
              </p>
              <p className="text-hash">
                <br />
                #MERN #nodejs #expressjs #mongodb
              </p>
            </div>
            <div
              className="border border-lgray w-full
                        rounded-lg"
            >
              <img src={connectify} alt="EDSA" className="rounded-lg w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-2">
          <div className="md:w-[5%] w-[10%]">
            <img src={profile} alt="profile" className="rounded-[50%] w-10" />
          </div>
          <div className="md:w-[95%] w-[90%] flex-col justify-start">
            <div
              className="flex md:text-base font-rroboto text-dblack
                        items-start text-sm"
            >
              <div className="flex items-center space-x-1">
                <h2
                  className="flex items-center md:text-lg font font-broboto
                                text-base"
                >
                  Loudakris Tuppal
                  <span className="ml-1 text-dgreen">
                    <MdVerified />
                  </span>
                </h2>
                <div
                  className="flex items-center space-x-1
                                text-dgray"
                >
                  <p>@loudatppl</p>
                  <p>·</p>
                  <p>6/21/23</p>
                </div>
              </div>
            </div>
            <div className="text-dblack md:text-base text-sm mb-2">
              <p>
                CaliKan
                <br />
                <br />
                A kanban board application that helps you track your tasks.
                Calikan is being developed using the MERN stack.
                <br />
                <br />
                Although it's work in progress you can checkout the initial
                features at{" "}
                <a
                  href="https://calikan-app.vercel.app/"
                  target="_blank"
                  className="text-hash"
                >
                  CaliKan
                </a>{" "}
                and view the source code at{" "}
                <a
                  href="https://github.com/loudatppl/calikan"
                  target="_blank"
                  className="text-hash"
                >
                  github/calikan
                </a>
                .
              </p>
              <p className="text-hash">
                <br />
                #MERN #nodejs #expressjs #mongodb
              </p>
            </div>
            <div
              className="border border-lgray w-full
                        rounded-lg"
            >
              <img src={CaliKan} alt="EDSA" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
