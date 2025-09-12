import React from "react";

function Content() {
  return (
    <>
      <div>
        <div className="h-[px] w-[1200px] flex justify-center flex-wrap gap-[50px] py-[80px]">
      
          <div
            className="h-[450px] w-[755px] bg-[url('/b1.svg')] bg-cover bg-no-repeat bg-center
            rounded-[20px] flex items-end p-10 border border-white/20"
          >
            <div className="text-[#FAFAFA] h-[108px] w-[384px] font-bold font-sans text-[30px] ml-[50px]">
              I prioritize client collaboration, fostering open communication
            </div>
          </div>
          <div className='flex justify-center ]' >
          <div className="h-[384px] w-[300px] flex  flex-wrap gap-[60px]">
            <div className="h-[161px] w-[500px] bg-[#04071D] flex items-center justify-center rounded-[20px] box-border border border-white/20 p-[20px]">
              <div className="h-[72px] w-[500px] text-[#fafafa] text-[30px] font-sans font-bold  ]">
                I'm very flexible with time zone communications
              </div>
            </div>
            <div className="h-[161px] w-[492px] bg-[#04071d] flex flex-col items-start justify-center rounded-[20px] box-border border border-white/20 text-white">
              <div className="h-[24px] w-[411px] text-[16px] font-sans text-[#c1c2d3] ml-10">
                I constantly try to improve
              </div>
              <div className="h-[36px] w-[384px] text-[30px] font-sans font-bold ml-10">
                My tech stack
              </div>
            </div>
          </div>
          </div>

          <div className="flex justify-center gap-[50px] ml-[200px]">
            <div className="h-[161px] w-[492px] bg-[#04071D] flex items-center justify-center rounded-[20px] box-border border border-white/20 text-[#fafafa] text-[30px] font-sans font-bold p-[20px] ">

              Tech enthusiast with a passion for development.
            </div>
              <div className="h-[161px] w-[492px] bg-[#04071D] flex items-center justify-center rounded-[20px] box-border border border-white/20  text-[#fafafa] text-[30px] font-sans font-bold p-[20px]">
              Crafting modern, responsive, and impactful websites
            </div>
        
          </div>
            <h1 className="text-white">A small selection of <span></span> </h1>
        </div>
        <div> </div>
      </div>
    </>
  );
}

export default Content;
