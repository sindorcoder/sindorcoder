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
            <NavLink className=" text-[14px] md:text-[18px] text-black text border-b-[3px] border-transparent hover:border-b-[3px] hover:border-black duration-150 delay-100 " to="/about">About Me</NavLink>
          </li>
          
          <li>
            <NavLink className=" text-[14px] md:text-[18px] text-black text border-b-[3px] border-transparent hover:border-b-[3px] hover:border-black duration-150 delay-100 " to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink className=" text-[14px] md:text-[18px] text-black text border-b-[3px] border-transparent hover:border-b-[3px] hover:border-black duration-150 delay-100 " to="/project">Project</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet/>
  </>
  )
}

export default Navbar