import { useState } from "react";
import pattern from "../assets/pattern.png";
import profile from "../assets/profile.jpg";
import { FaCode, FaKeyboard, FaTrophy } from "react-icons/fa";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaAngleDown,
  FaInstagram,
} from "react-icons/fa";
import MouseAnimation from "./MouseAnimation";
const Hero = () => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(true);
  return (
    <section
      style={{ backgroundImage: `url(${pattern})` }}
      className="relative"
    >
      <MouseAnimation />
      <div className="relative flex flex-col items-center justify-center min-h-screen gap-8 p-5 lg:p-0">
        <div className="shadow-2xl conic shadow-sec-color">
          <img
            src={profile}
            className={`img ${isImgLoaded ? "blur-img" : ""}`}
            loading="lazy"
            onLoad={() => setIsImgLoaded(false)}
          />
        </div>
        <h3 className="text-2xl font-bold lg:text-5xl text-center">
          Hi, I'm <span className="text-main-color">Md. Fazle Rabbi Riyad</span>
        </h3>
        <h2 className="lg:text-xl -mt-6 text-center">
          Python Backend Developer.
        </h2>
        <p className="text-xs text-center lg:text-lg lg:w-1/2 text-desc-color">
        Passionate 'Software Engineer - Backend Focused' crafting efficient and scalable solutions. Always exploring new technologies to optimize performance and enhance user experience. 🚀
        </p>
        <div className="flex items-center gap-6">
          <a
            className="social-btn"
            href="https://www.linkedin.com/in/riyadsheikh27/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-btn"
            href="https://github.com/RiyadSheikh27"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="social-btn"
            href="https://codeforces.com/profile/Riyad27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode />  {/* or <FaKeyboard /> or <FaTrophy /> */}
          </a>
          <a
            className="social-btn"
            href="https://www.facebook.com/fazle.riyad"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="social-btn"
            href="https://www.instagram.com/__riyad.py__/"
            target="_blank"
          >
            <FaInstagram />
          </a>


        </div>
        <div className="absolute flex gap-2 text-xs text-desc-color bottom-4">
          <span className="text-xl animate-bounce">
            <FaAngleDown />
          </span>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
