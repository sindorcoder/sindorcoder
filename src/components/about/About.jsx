import avatar from "../../assets/icons/AvatarAndIcons.svg";
import gif from "../../assets/images/hello.gif";
import { BlurFade } from "../magicui/blur-fade";
import { TextAnimate } from "../magicui/text-animate";
const BLUR_FADE_DELAY = 0.04;
const About = () => {
  return (
    <>
      <section className="mb-[150px]">
        <div className="flex items-center">
          <div className="grid grid-cols-1 place-content-center text-center place-items-center items-center gap-[70px]">
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
                <h2 className="title flex items-center justify-center text-[24px] md:text-[30px] text-black">
                  <TextAnimate
                    animation="blurInUp"
                    by="character"
                    duration={1}
                    once
                  >
                    Hi, I am Sindor
                  </TextAnimate>
                  <img
                    src={gif}
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Hello I am Sindor"
                  />
                </h2>
                <div className="flex items-start justify-start mt-10 mb-2">
                  <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-xl font-bold  ">About</h2>
                  </BlurFade>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                  <p className="text-[12px] md:text-[16px] text-start text font-bold mt-13px">
                    As a passionate frontend developer from Uzbekistan, I
                    approach every project with enthusiasm, striving to infuse
                    my work with creativity and dedication. I find joy in
                    continuously expanding my knowledge and sharing it with
                    others. Helping people is something I hold dear, and I
                    always seek to make a positive impact through my skills and
                    efforts.
                  </p>
                </BlurFade>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
