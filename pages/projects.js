import React from "react";

const Projects = () => {
  return (
    <section id="projects">
    <div className="py-24 px-12 md:px-16 bg-purple-50 min-h-screen ">
      <div className="mx-auto max-w-full">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold tracking-normal">PROJECTS</p>
        <div className="h-1 w-7 bg-purple-500 rounded-xl mx-auto mt-4" />
      </div>
      <div className="flex">
        <div className="w-full grid grids-cols-1 md:grid-cols-2 gap-y-5">
          <div className="flex flex-col items-center mb-6 gap-10">
            <img
              src="/images/pixel.jpg"
              className="h-[204px] rounded-xl"
            /> 
            <a href="https://gorgeous-stroopwafel-ddd071.netlify.app/" target="_blank">
            <button className="bg-purple-400 px-5 py-3 font-semibold rounded-3xl text-center">
              Visit Website &#8594;
            </button>
            </a>
          </div>
          <div className="flex flex-col items-center mb-6 gap-10">
            <img
              src="/images/jobs.jpeg"
              className="h-[204px] rounded-xl"
            />
            <a href="https://main--splendorous-malasada-b1e307.netlify.app/" target="_blank">
            <button className="bg-purple-400 px-5 py-3 font-semibold rounded-3xl text-center">
              Visit Website &#8594;
            </button>
            </a>
          </div>
          <div className="flex flex-col items-center mb-6 gap-10">
            <img
              src="/images/portfolio.jpg"
              className="h-[204px] rounded-xl"
            />
            <a href="https://beautiful-lokum-57a7c6.netlify.app/" target="_blank">

            <button className="bg-purple-400 px-5 py-3 font-semibold rounded-3xl text-center">
              Visit Website &#8594;
            </button>
            </a>
          </div>
          <div className="flex flex-col items-center mb-6 gap-10">
            <img
              src="/images/dummy.jpeg"
              className="h-[204px] rounded-xl"
            />
            <a href="https://benevolent-crostata-9256d1.netlify.app/home" target="_blank">
            <button className="bg-purple-400 px-5 py-3 font-semibold rounded-3xl text-center">
              Visit Website &#8594;
            </button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
