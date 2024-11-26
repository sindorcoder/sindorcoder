import { BiMenuAltRight } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1] backdrop-blur-lg bg-white/30  bg-slate-50  px-1">
        <div className="flex w-full max-w-[1440px] px-5 mx-auto items-center justify-between">
          <div>
            <NavLink to="/">
              <img src={logo} width={80} className="w-[80px]" alt="logo " />
            </NavLink>
          </div>
          <ul className="hidden lg:flex item-center gap-5 md:gap-14">
            <li>
              <NavLink
                className=" text-[14px] md:text-[22px] text-black text border-b-[3px] border-transparent duration-150 delay-100 "
                to="/about"
              >
                <span className="hidden md:inline">About Me</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className=" text-[14px] md:text-[22px] text-black text border-b-[3px] border-transparent duration-150 delay-100 "
                to="/skills"
              >
                <span className="hidden md:inline">Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-[14px] md:text-[22px] text-black text"
                to="/project"
              >
                <span className="hidden md:inline">Work</span>
              </NavLink>
            </li>
          </ul>
          <div className="items-center gap-5 hidden lg:flex">
            <Link
              to={"https://github.com/sindorcoder"}
              className="hover:scale-125 duration-300"
              target="_black"
            >
              <AiFillGithub size={30} />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/sindor-olmasov-8848222b7/"}
              className="hover:scale-125 duration-300 hover:text-blue-600"
              target="_blank"
            >
              <AiFillLinkedin size={30} />
            </Link>

            <Link
              to={"https://t.me/sindor_712"}
              className="hover:scale-125 duration-300 hover:text-blue-600"
              target="_blank"
            >
              <BsTelegram size={27} />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden hover:scale-125 duration-300"
          >
            <BiMenuAltRight size={30} color="black" />
          </button>
        </div>
      </nav>
      <Outlet />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
