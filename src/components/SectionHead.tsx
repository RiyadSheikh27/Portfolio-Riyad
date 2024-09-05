import { Parallax } from "react-scroll-parallax";
import { SectionTitles } from "../types";
const SectionHead = ({ parallaxValue, value }: SectionTitles) => {
  return (
    <>
      <Parallax translateX={[-200, 200]}>
        <h3 className="lg:text-[150px] text-[100px] text-[#1B2335] font-black leading-[145px] uppercase">
          {parallaxValue}
        </h3>
      </Parallax>
      <div className="absolute top-4 lg:right-[40%] right-[25%] left-[25%] lg:left-[40%] text-center text-xl">
        <h3 className="pb-4 text-2xl font-black uppercase">{value}</h3>
        <div className="relative w-full h-2 bg-sec-color rounded-xl section-underline"></div>
      </div>
    </>
  );
};

export default SectionHead;
