import React from "react";

import { MdVerified } from "react-icons/md";

import profile from "../assets/images/profile.jpg";

import imHim from "../assets/images/im-him.gif";
import webDesign from "../assets/images/web-design.gif";
import uplift from "../assets/images/uplift.png";

const About = () => {
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
            <div
              className="text-dblack md:text-base text-sm
              mb-2"
            >
              <p>
                I've been captivated by the tech world, nurturing a deep passion
                for all things tech-related. My journey into web development
                began as a self-taught adventure, where i eagerly taught myself
                how to code then joined a coding bootcamp to further enhance my
                skills.
                <br />
                <br />
                One of my greatest strengths is adaptability, a quality i hold
                dear in the fast-paced world of technology. The digital
                landscape is constantly evolving, with new languages,
                frameworks, and tools emerging at a rapid pace. Embracing this
                reality, I thrive on adapting to change, eagerly seizing
                opportunities to learn and grow alongside the ever-changing tech
                scene.
              </p>
              <p className="text-hash">
                <br />
                #aboutme #louda
              </p>
            </div>
            <div
              className="border border-lgray w-full
            rounded-lg"
            >
              <img src={imHim} alt="Im HIM" className="rounded-lg w-full" />
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
                  <p>6/22/23</p>
                </div>
              </div>
            </div>
            <div
              className="text-dblack md:text-base text-sm
              mb-2"
            >
              <p>
                These are the technologies I use
                <br />
                <br />
                For front-end development:
                <br />
                JavaScript, Tailwind, and React.
                <br />
                <br />
                For back-end development:
                <br />I have common knowledge of MongoDB, Express.js, and
                Node.js.
              </p>
              <p className="text-hash">
                <br />
                #myskills #tech
              </p>
            </div>
            <div
              className="border border-lgray w-full
            rounded-lg"
            >
              <img
                src={webDesign}
                alt="Web Development"
                className="rounded-lg w-full"
              />
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
                  <p>6/23/23</p>
                </div>
              </div>
            </div>
            <div
              className="text-dblack md:text-base text-sm
              mb-2"
            >
              <p>
                In January of this year, I joined &nbsp;
                <a
                  href="https://www.upliftcodecamp.com/"
                  className="text-hash"
                  target="_blank"
                >
                  @upliftcodecamp
                </a>
                <br />
                <br />
                During my time at Uplift Code Camp, I had the opportunity to
                immerse myself in the tech scene, gaining hands-on experience in
                developing and maintaining websites. Collaborating closely with
                fellow developers, I actively engaged in team projects. As part
                of this collaborative environment, I also took on the
                responsibility of providing code reviews, offering insights and
                suggestions to enhance code quality. Through these experiences,
                I not only honed my technical skills but also developed my
                teamwork and communication abilities, which are I think is vital
                in the tech world.
              </p>
              <p className="text-hash">
                <br />
                #myexperience #uplift
              </p>
            </div>
            <div
              className="border border-lgray w-full
            rounded-lg"
            >
              <img
                src={uplift}
                alt="Uplift Code Camp Batch 14"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
