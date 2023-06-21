import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setFadeOut(true);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center bg-dwhite z-[999999] top-0 left-0 bottom-0 right-0 ${
        fadeOut ? "fade-out fix" : ""
      }`}
    >
      <div className="flex w-auto items-center">
        <h1 className="md:text-4xl text-2xl font-blond text-dblack cursor-pointer">
          louda
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
