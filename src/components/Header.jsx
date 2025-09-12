import React from "react";

function Header() {
  return (

    <div>
      <nav
        className="fixed top-10 left-1/2 -translate-x-1/2 z-[5000] flex max-w-fit w-auto 
         border border-white/20 rounded-full 
         shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
         bg-[#000319] px-10 py-5 items-center justify-center gap-6"
      >
        <a
          className="text-[#FAFAFA] no-underline text-base font-sans 
         flex items-center gap-1 
         transition-colors duration-200 
         relative cursor-pointer"
          href="#about"
        >
          <span className="text-sm">About</span>
        </a>
        <a
          className="text-[#FAFAFA] no-underline text-base font-sans 
         flex items-center gap-1 
         transition-colors duration-200 
         relative cursor-pointer"
          href="#projects"
        >
          <span className="text-sm">Projects</span>
        </a>
        <a
          className="text-[#FAFAFA] no-underline text-base font-sans 
         flex items-center gap-1 
         transition-colors duration-200 
         relative cursor-pointer"
          href="#skills"
        >
          <span className="text-sm">Skills</span>
        </a>
        <a
          className="text-[#FAFAFA] no-underline text-base font-sans 
         flex items-center gap-1 
         transition-colors duration-200 
         relative cursor-pointer"
          href="#experience"
        >
          <span className="text-sm">Experience</span>
        </a>
        <a
          className="text-[#FAFAFA] no-underline text-base font-sans 
         flex items-center gap-1 
         transition-colors duration-200 
         relative cursor-pointer"
          href="#contact"
        >
          <span className="text-sm">Contact</span>
        </a>
      </nav>

      <div className="w-screen h-screen flex items-center justify-center text-center overflow-x-hidden max-w-full">
        <div className="text-[60px] leading-[1.5] font-bold text-[#333]">
          <p className="text-[12px] text-[#E4ECFF] opacity-100 uppercase font-sans tracking-[0.1em]">
            DYNAMIC WEB MAGIC WITH NEXT.JS
          </p>
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-italic">
            Transforming
          </span>
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-italic">
            Concepts
          </span>
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-italic">
            into{" "}
          </span>
          <br />
          <span className="inline-block mx-[5px] text-white font-sans font-bold not-talic">
            Seamless
          </span>
          <span className="inline-block mx-[5px] text-[#cbacf9] font-sans font-bold not-italic">
            User
          </span>
          <span className="inline-block mx-[5px] text-[#cbacf9] font-sans font-bold not-italic">
            Experinces
          </span>
          <p className="text-[24px] text-[#FAFAFA] font-sans">
            Hi, I'm Shivam, a Full Stack Developer
          </p>

          <button
            className="inline-flex items-center justify-center mx-auto h-[48px] min-w-[180px] 
               cursor-pointer rounded-[12px] bg-[#020617] px-7 text-[1rem] font-medium font-sans 
               text-white gap-2 shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] 
               backdrop-blur-[12px] border border-current animate-borderColorChange"
          >
            Show my work
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  
  );
}

export default Header;
