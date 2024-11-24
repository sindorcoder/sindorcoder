import { BsTelegram } from "react-icons/bs"; 
import { AiFillHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai"; 
import { SiKnowledgebase } from "react-icons/si";
import { TbBriefcase2Filled } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom"
import logo from "../../assets/icons/logo.svg"

const Navbar = () => {
  return (
  <>
    <nav className="fixed top-0 left-0 right-0 z-[1] backdrop-blur-lg bg-white/30  bg-slate-50  px-1">
      <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between">
        <div>
            <NavLink to="/">
          <img src={logo} width={80} className="w-[40px] md:w-[80px]" alt="logo " />
            </NavLink>
        </div>
        <ul className="flex item-center gap-5 md:gap-14">

          
          <li>
            <NavLink className=" text-[14px] md:text-[22px] text-black text border-b-[3px] border-transparent duration-150 delay-100 " to="/about">
            <span className="hidden md:inline">About Me</span>
            <AiFillHome size={27} color="#000" className="inline md:hidden" />
            </NavLink>
          </li>
          
          <li>
            <NavLink className=" text-[14px] md:text-[22px] text-black text border-b-[3px] border-transparent duration-150 delay-100 " to="/skills">
            <span className="hidden md:inline">Skills</span>
            <SiKnowledgebase size={27} color="#000" className="inline md:hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink className=" text-[14px] md:text-[22px] text-black text" to="/project">
            <span className="hidden md:inline">
            Work
            </span>
            <TbBriefcase2Filled size={27} color="#000" className="inline md:hidden" />            
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <Link to={"https://github.com/sindorcoder"} className="hover:scale-125 duration-300" target="_black">
          <AiFillGithub size={30} />
          </Link>
          
          <Link to={"https://www.linkedin.com/in/sindor-olmasov-8848222b7/"} className="hover:scale-125 duration-300 hover:text-blue-600" target="_blank">
          <AiFillLinkedin size={30} />
          </Link>
          
          <Link to={"https://t.me/sindor_712"} className="hover:scale-125 duration-300 hover:text-blue-600" target="_blank">
          <BsTelegram size={27} />
          </Link>
        </div>
      </div>
    </nav>
    <Outlet/>
  </>
  )
}

export default Navbar