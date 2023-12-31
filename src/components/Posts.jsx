import React from "react";

import profile from "../assets/images/profile.jpg";
import hello from "../assets/images/hello.gif";

import { MdVerified } from "react-icons/md";

const Posts = () => {
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
              <p>Hey, I'm Louda. Welcome to my web portfolio!</p>
              <p className="text-hash">
                <br />
                #hello
              </p>
            </div>
            <div
              className="border border-lgray w-full
                        rounded-lg"
            >
              <img src={hello} alt="Thank You" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
