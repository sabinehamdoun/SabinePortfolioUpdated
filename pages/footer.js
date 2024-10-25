import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-300 py-10 px-12 md:px-16 font-semibold">
      <div>
        <div className="flex flex-col sm:flex-row"> 
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Sabine Hamdoun</p>
          <div className="flex items-center gap-5 leading-10">
            <div>
              <img src="/images/icons8-mail-24.png" />
            </div>
            <a href="mailto:sabinehamdoun24@outlook.com">
              sabinehamdoun24@outlook.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <img src="/images/icons8-phone-30.png" className="w-[25px]" />
            </div>
            <p>+1 (313) 746 7074 </p>
          </div>
        </div>
        <div className="mt-4 flex space-x-4 sm:ml-auto gap-3">
          <a href="mailto:your@email.com" className="hover:text-gray-300">
            Email
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col sm:items-center sm:justify-center mt-4 md:mt-16">
        <p>&copy; 2024 Sabine Hamdoun. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
