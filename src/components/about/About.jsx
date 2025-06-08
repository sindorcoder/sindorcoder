import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/AvatarAndIcons.svg";
import { BlurFade } from "../magicui/blur-fade";
import { TextAnimate } from "../magicui/text-animate";
const BLUR_FADE_DELAY = 0.04;
import cv from "../../assets/Sindor O'lmasov.pdf";
const About = () => {
  return (
    <>
      <section className="mb-[150px]" id="about">
        <div className="flex items-center">
          <div className="grid grid-cols-1 place-content-center text-center md:grid-cols-1 md:place-items-center   lg:place-content-start md:text-center lg:text-start lg:grid-cols-2 items-center gap-[70px]">
            <div className="mt-[52px] flex justify-center md:block">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <img
                  src={avatar}
                  className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
                  alt="avatar"
                  loading="lazy"
                />
              </BlurFade>
            </div>
            <div className="w-full">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="title text-[24px] md:text-[30px] text-slate-700">
                  <TextAnimate
                    animation="blurInUp"
                    by="character"
                    duration={1}
                    once
                  >
                    Hi, I am Sindor
                  </TextAnimate>
                </h2>
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                  <p className="text-[12px] md:text-[16px] text font-bold mt-13px">
                    As a passionate frontend developer from Uzbekistan, I
                    approach every project with enthusiasm, striving to infuse
                    my work with creativity and dedication. I find joy in
                    continuously expanding my knowledge and sharing it with
                    others. Helping people is something I hold dear, and I
                    always seek to make a positive impact through my skills and
                    efforts.
                  </p>
                </BlurFade>
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
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
