import React from 'react';

const Contact = () => {
  return (
    <div  className="py-24 px-16 bg-purple-50">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold tracking-normal">CONTACT ME</p>
        <div className="h-1 w-7 bg-purple-300 rounded-xl mx-auto mt-4" />
      </div>
      <div className="flex items-center space-x-4"> 
        <div>
          <p className="text-lg font-semibold">Sabine Hamdoun</p>
          <div className="flex items-center gap-5">
            <div>
                <img src='/images/icons8-mail-24.png' />
            </div>
            <a href="mailto:sabinehamdoun24@outlook.com">sabinehamdoun24@outlook.com</a>
          </div>
          <div className="flex items-center gap-5">
          <div>
                <img src='/images/icons8-phone-30.png' className='w-[25px]'/>
            </div>
          <p>+1 (313) 746 7074 </p>
          </div>
        </div> 
        <div>
          <p className="text-lg font-semibold">Connect with Me</p>
          <div className="flex space-x-2 mt-1">
            <a href="https://twitter.com/yourtwitter" className="text-blue-500 hover:text-blue-700">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M22.46 2.392c-0.83 0.37-1.72 0.62-2.65 0.73 0.95-0.57 1.68-1.48 2.02-2.55-0.89 0.53-1.88 0.91-2.93 1.12-0.84-0.9-2.04-1.46-3.36-1.46-2.54 0-4.6 2.06-4.6 4.6 0 0.36 0.04 0.71 0.13 1.05-3.83-0.19-7.22-2.03-9.48-4.82-0.4 0.69-0.63 1.49-0.63 2.34 0 1.6 0.81 3 2.04 3.82-0.75-0.02-1.46-0.23-2.08-0.57-0.01 0.02-0.01 0.04-0.01 0.06 0 2.24 1.59 4.11 3.69 4.54-0.39 0.11-0.8 0.17-1.22 0.17-0.3 0-0.6-0.03-0.89-0.08 0.61 1.91 2.37 3.3 4.47 3.33-1.64 1.28-3.71 2.05-5.96 2.05-0.39 0-0.78-0.02-1.17-0.07 2.13 1.36 4.65 2.16 7.36 2.16 8.83 0 13.68-7.54 13.68-14.08 0-0.21 0-0.42-0.01-0.63 0.94-0.68 1.76-1.54 2.41-2.52z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-500 hover:text-blue-700">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h18v18H3V3zm5.1 17H5.4V9.3h2.7V20zm-1.4-12a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4zm12.3 8.1c0 1.4-1 2.3-2.7 2.3s-2.6-1-2.6-2.4c0-1.3 1-2.3 2.6-2.3h.1c1.7 0 2.7 1 2.7 2.4zm4.5-8.1h-2.7v1.3c0 .3 0 .7.1 1h.1l.1-.2c.3.4.9.8 1.6.8 1.2 0 2-1 2-2.5s-.7-2.5-2.3-2.5c-1.1 0-1.7.5-2.1 1.1h.1V7h-2.7v10.1h2.7V12c0-.7 0-1.2-.1-1.6h-.1c.4-.6 1.1-1.4 2.5-1.4 1.8 0 3.2 1.2 3.2 3.7v5.4h2.7V12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
