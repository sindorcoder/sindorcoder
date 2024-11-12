/* eslint-disable react/no-unescaped-entities */

import interfaceWeb from "../../assets/icons/design.svg";
import coding from "../../assets/icons/conntection.svg";
import react from "../../assets/icons/builder.svg";
import word from "../../assets/icons/ui.svg";
import { Link } from "react-router-dom";
import avatar from "../../assets/icons/AvatarAndIcons.svg";
import ExperienceBox from "../../components/exprienceBox/ExprienceBox";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../components/footer/Footer";
const About = () => {

  AOS.init({

  })

  return (
    <>
      <section className="my-[150px]">

        <div className="bg-slate-50 p-2 flex items-center shadow-cm justify-center w-full max-w-[80px] md:max-w-[150px] rounded-full">
          <h2 className="text-[14px] md:text-[20px] capitalize title text-black">
            About
          </h2>
        </div>

        <div  className="flex items-center w-full max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 place-content-center text-center md:grid-cols-1 md:place-items-center   lg:place-content-start md:text-center lg:text-start lg:grid-cols-2 items-center gap-[70px]">
            <div data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="mt-[52px] flex justify-center md:block">
              <img
                src={avatar}
                className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
                alt="avatar"
              />
            </div>
            <div  data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="w-full">

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
                  to={"https://www.instagram.com/sindor_.7/"}
                  className=" text-[10px] border-b-2 border-emerald-600 md:text-[14px] font-semibold text-black"
                >
                  INSTAGRAM
                </Link>
                <Link
                  to={"https://github.com/sindorcoder"}
                  className=" text-[10px] border-b-2 border-emerald-600 md:text-[14px] font-semibold text-black"
                >
                  GITHUB
                </Link>
                <Link
                  to={"mailto:sindordev77@gmail.com"}
                  className=" text-[10px] border-b-2 border-emerald-600 md:text-[14px] font-semibold text-black"
                >
                  EMAIL
                </Link>

                <Link
                  to="https://drive.google.com/file/d/1ge--ercB5Xk62XaSXQQ28qdf_a4aX_cA/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] border-b-2 border-emerald-600 flex items-center gap-5 md:text-[14px] font-semibold text-black"
                >
                    RESUME CV
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  items-center w-full gap-7 mt-[70px]">

          <div data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]">
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

          <div data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]">
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

          <div data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]">
            <img src={interfaceWeb} width={40} height={40} alt="interface" />
            <div className="w-full max-w-[2px] min-h-[50px] bg-[#D9D9D9]"></div>
            <div>
              <h5 className="text-[16px] font-bold title text-black">
                React.js
              </h5>
              <span className="text-[10px] font-medium text">
                Build your system with node.js.
              </span>
            </div>
          </div>

          <div data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="flex items-center w-full gap-4 py-[15px] px-[20px] border-2 rounded-[10px]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">

          <ExperienceBox
            title="I have years of experience with"
            coding="Coding HTML5"
            css3="Coding CSS3"
            javascript="Coding JavaScript"
            using="Using Elementor"
            adobe="Using Adobe Package"
            creating="Creating Brand and Logo"
            userInterface="Creating User Interface"
          />
          <ExperienceBox
            title="I have years of experience with"
            coding="Coding HTML5"
            css3="Coding CSS3"
            javascript="Coding JavaScript"
            using="Using Elementor"
            adobe="Using Adobe Package"
            creating="Creating Brand and Logo"
            userInterface="Creating User Interface"
          />

          <ExperienceBox
            title="I work and study about"
            coding="Coding React.js"
            css3="Coding CSS3"
            javascript="Coding JavaScript"
            using="Coding TypeScript"
            adobe="Studying Node.js basics"
            creating="Studying API RESTful"
            userInterface=" Studying User Experience"
          />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;
