import { BiMenu } from "react-icons/bi";
import bmc from "../assets/bmc-button.png";

const Navbar = () => {
  const navOptions = (
    <>
      <a href="#" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">01.</span> HOME
      </a>
      <a href="#about" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">02.</span> ABOUT
      </a>
      <a href="#skills" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">03.</span> SKILLS
      </a>
      <a href="#projects" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">04.</span> PROJECTS
      </a>
      <a href="#contact" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color">05.</span> CONTACT
      </a>
    </>
  );
  return (
    <nav className="absolute z-20 w-full my-glass">
      <div className="navbar lg:w-[1300px] mx-auto">
        <div className="navbar-start">
          <a
            href="#"
            className="text-2xl font-black uppercase select-none text-main-color lg:text-4xl"
          >
            Riyad <span className="text-[#fafafa]">Sheikh</span>
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="items-center gap-8 px-1 menu menu-horizontal">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <button className="border-0 rounded shadow-lg btn lg:btn-md btn-sm primary-btn bg-main-color hover:bg-main-color shadow-sec-color">
            <span>Hire me</span>
          </button> */}
          <div className="bmc">
            <a
              href="https://buymeacoffee.com/riyad_cse27"
              target="_blank"
            >
              <img src={bmc} alt="" className="w-32 h-auto" />
            </a>
          </div>
          <div className="dropdown dropdown-left">
            <label
              tabIndex={0}
              className="p-1 ml-3 text-2xl text-white bg-transparent border-0 hover:bg-main-color hover:text-gray-600 lg:hidden btn btn-sm"
            >
              <BiMenu />
            </label>
            <ul
              tabIndex={0}
              className="items-center justify-center gap-3 py-20 mt-6 shadow w-72 menu menu-sm dropdown-content ms-10 my-glass rounded-box"
            >
              <div className="flex flex-col items-start justify-start gap-6 text-lg">
                {navOptions}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
