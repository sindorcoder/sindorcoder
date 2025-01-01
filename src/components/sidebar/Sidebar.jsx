/* eslint-disable react/prop-types */
import { CgClose } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div
      style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      className="fixed top-0 z-10 duration-300 right-0 min-h-screen w-full bg-black/50"
    >
      <div className="h-full absolute right-0 top-0 bg-white w-[270px]">
        <div className="w-full h-full p-4">
          <button
            className="hover:rotate-90 duration-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <CgClose color="black" size={30} />
          </button>
          <div className="flex flex-col justify-between  h-[95%]">
            <div>
              <ul className="flex flex-col my-[100px] w-full gap-2 md:gap-4">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-[14px] md:text-[22px] text-black border-b-[3px] border-transparent duration-150 delay-100"
                  >
                    <span>#About</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-[14px] md:text-[22px] text-black border-b-[3px] border-transparent duration-150 delay-100"
                  >
                    <span>#Skills</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("project")}
                    className="text-[14px] md:text-[22px] text-black"
                  >
                    <span>#Work</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-[14px] md:text-[22px] text-black"
                  >
                    <span>#Contact</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex mb-[50px] flex-col gap-4">
              <div className="flex items-center justify-end gap-5">
                <Link
                  to={"https://github.com/sindorcoder"}
                  className="hover:scale-125 duration-300"
                  target="_blank"
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
              <div className="w-full h-[3px] bg-[#a4a4a4] rounded-full"></div>
              <div className="flex items-center gap-5 justify-between">
                <Link
                  className="text-center text-[10px] whitespace-nowrap sm:text-[12px]"
                  to="tel:+998906027875"
                >
                  +998 90 602 7875
                </Link>
                <Link
                  className="text-center text-[10px] sm:text-[12px]"
                  to="mailto:sindordev77@gmail.com"
                >
                  sindordev77@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
