import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-10 text-dblack">
      <div className="flex flex-col w-[768px] px-4 space-y-4">
        <div
          className="flex space-x-4 justify-center
                cursor-pointer"
        >
          <a href="https://github.com/loudatppl" target="_blank">
            <BsGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/loudakris-tuppal-79b333258/"
            target="_blank"
          >
            <BsLinkedin size={26} />
          </a>
        </div>
        <div className="flex justify-center">
          <p className="md:text-sm text-xs cursor-pointer">
            LOUDAKRIS TUPPAL &copy; 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
