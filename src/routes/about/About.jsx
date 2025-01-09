import { HiOutlineEye } from "react-icons/hi";
/* eslint-disable react/no-unescaped-entities */
import interfaceWeb from "../../assets/icons/design.svg";
import coding from "../../assets/icons/conntection.svg";
import react from "../../assets/icons/builder.svg";
import word from "../../assets/icons/ui.svg";
import { Link } from "react-router-dom";
import avatar from "../../assets/icons/AvatarAndIcons.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../../assets/resume/Sindor O'lmasov.pdf";
const About = () => {
  AOS.init({});

  return (
    <>
      <section className="my-[150px]" id="about">
        <div className="flex items-center w-full max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 place-content-center text-center md:grid-cols-1 md:place-items-center   lg:place-content-start md:text-center lg:text-start lg:grid-cols-2 items-center gap-[70px]">
            <div
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mt-[52px] flex justify-center md:block"
            >
              <img
                src={avatar}
                className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
                alt="avatar"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="w-full"
            >
              <h2 className="title text-[24px] md:text-[30px] text-slate-700">
                Hi, I'm Sindor
              </h2>
              <p className="text-[12px] md:text-[16px] text font-bold mt-13px">
                As a passionate frontend developer from Uzbekistan, I approach
                every project with enthusiasm, striving to infuse my work with
                creativity and dedication. I find joy in continuously expanding
                my knowledge and sharing it with others. Helping people is
                something I hold dear, and I always seek to make a positive
                impact through my skills and efforts.
              </p>
              <div className="flex justify-center md:justify-center lg:justify-start items-center gap-5 mt-[20px]">
                <Link
                  to={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 text-black py-1 flex items-center gap-2 bg-[#adb5bd] rounded-lg"
                >
                  RESUME
                  <button>
                    <HiOutlineEye size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-easing="ease-in-sine"
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  items-center w-full gap-7 mt-[70px]"
        >
          <div
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]"
          >
            <img src={react} width={40} height={40} alt="react" />
            <div className="w-full max-w-[2px] min-h-[50px] bg-[#D9D9D9]"></div>
            <div>
              <h5 className="text-[16px] font-bold title text-black">
                Interface & Design
              </h5>
              <span className="text-[10px] font-medium text">
                Briefing, wireframe, UX, UI and branding.
              </span>
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]"
          >
            <img src={word} width={40} height={40} alt="react" />
            <div className="w-full max-w-[2px] min-h-[50px] bg-[#D9D9D9]"></div>
            <div>
              <h5 className="text-[16px] font-bold title text-black">
                html & css
              </h5>
              <span className="text-[10px] font-medium text">
                Responsive websites with fast loading.
              </span>
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]"
          >
            <img src={interfaceWeb} width={40} height={40} alt="interface" />
            <div className="w-full max-w-[2px] min-h-[50px] bg-[#D9D9D9]"></div>
            <div>
              <h5 className="text-[16px] font-bold title text-black">
                React.js & Next.Js
              </h5>
              <span className="text-[10px] font-medium text">
                Build your system with React.js Or Next.Js
              </span>
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]"
          >
            <img src={coding} width={40} height={40} alt="react" />
            <div className="w-full max-w-[2px] min-h-[50px] bg-[#D9D9D9]"></div>
            <div>
              <h5 className="text-[16px] font-bold title text-black">
                Ant Design
              </h5>
              <span className="text-[10px] font-medium text">
                Briefing, wireframe, UX, UI and branding.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
