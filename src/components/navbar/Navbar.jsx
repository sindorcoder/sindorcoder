import { SiKnowledgebase } from "react-icons/si";
import { TbBriefcase2Filled } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai"; 
import { NavLink, Outlet } from "react-router-dom"
import logo from "../../assets/icons/logo.svg"
const Navbar = () => {
  return (
  <>
    <nav className="fixed top-0 left-0 right-0 z-[1] backdrop-blur-lg bg-white/30  bg-slate-50  px-5">
      <div className="flex w-full max-w-[1240px] mx-auto items-center justify-between">
        <div>
            <NavLink to="/">
          <img src={logo} width={100} className="w-[60px] md:w-[100px]" alt="logo " />
            </NavLink>
        </div>
        <ul className="flex item-center gap-5 md:gap-9">
          
          <li>
            <NavLink className=" text-[14px] md:text-[18px] text-black text border-b-[3px] border-transparent hover:border-b-[3px] hover:border-black duration-150 delay-100 " to="/about">
            <span className="hidden md:inline">About Me</span>
            <AiFillHome size={27} color="#588157" className="inline md:hidden" />
            </NavLink>
          </li>
          
          <li>
            <NavLink className=" text-[14px] md:text-[18px] text-black text border-b-[3px] border-transparent hover:border-b-[3px] hover:border-black duration-150 delay-100 " to="/skills">
            <span className="hidden md:inline">Skills</span>
            <SiKnowledgebase size={27} color="#588157" className="inline md:hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink className=" text-[14px] md:text-[18px] text-black text border-b-[3px] border-transparent hover:border-b-[3px] hover:border-black duration-150 delay-100 " to="/project">
            <span className="hidden md:inline">
            Project
            </span>
            <TbBriefcase2Filled size={27} color="#588157" className="inline md:hidden" />            
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet/>
  </>
  )
}

export default Navbar