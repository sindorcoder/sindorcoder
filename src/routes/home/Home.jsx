import About from "../../routes/about/About";
import Project from "../../components/amazing/AmazingP";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Skills from "../skills/Skills";
import Sidebar from "../../components/sidebar/Sidebar";

import { BiMenuAltRight } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1] backdrop-blur-lg bg-white/30 px-1">
        <div className="flex w-full max-w-[1540px] px-5 mx-auto items-center justify-between">
          <div>
            <Link to="#">
              <img src={logo} width={80} className="w-[80px]" alt="logo" />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-5 md:gap-14">
            <li>
              <button
                className="text-[14px] text md:text-[20px] text-black border-b-[3px] border-transparent duration-150 delay-100"
                onClick={() => scrollToSection("about")}
              >
                <span className="hidden md:inline">#About</span>
              </button>
            </li>
            <li>
              <button
                className="text-[14px] text md:text-[20px] text-black border-b-[3px] border-transparent duration-150 delay-100"
                onClick={() => scrollToSection("skills")}
              >
                <span className="hidden md:inline">#Skills</span>
              </button>
            </li>
            <li>
              <button
                className="text-[14px] text md:text-[20px] text-black"
                onClick={() => scrollToSection("project")}
              >
                <span className="hidden md:inline">#Work</span>
              </button>
            </li>

            <li>
              <button
                className="text-[14px] text md:text-[20px] text-black"
                onClick={() => scrollToSection("project")}
              >
                <span className="hidden md:inline">#Contact</span>
              </button>
            </li>
          </ul>

          <div className="items-center gap-5 hidden lg:flex">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden hover:scale-125 duration-300"
          >
            <BiMenuAltRight size={30} color="black" />
          </button>
        </div>
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
