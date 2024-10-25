import React from "react";

const Banner = () => {
  return (
    <section id="banner">

<div className="flex md:flex-row flex-col justify-center items-center min-h-screen py-16 md:py-28 px-12 md:px-16 text-center gap-9 -mt-20 mx-auto max-w-full">
      <img src="/images/lic-bg.png" className="h-52 w-52" />
      <div className="h-64 w-3 bg-purple-400 rounded-lg hidden md:block mt-10" />
      <div className="flex flex-col gap-9">
        <h3 className="text-4xl font-bold mt-16">
          Designer, Frontend Developer & Mentor
        </h3>
        <p className="text-xl">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
    </div>
    </section>
  );
};

export default Banner;
