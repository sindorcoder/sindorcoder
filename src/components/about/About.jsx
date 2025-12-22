import avatar from '../../assets/image.webp'
import { BlurFade } from '../magicui/blur-fade'
import { TextAnimate } from '../magicui/text-animate'

const BLUR_FADE_DELAY = 0.04
const About = () => {
  return (<>
    <section className="mb-7">
      <div className="flex items-center">
        <div className="flex flex-col w-full items-center gap-5">
          <div className="mt-10 flex justify-center md:block">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <img
                src={avatar}
                width="80px"
                height="80px"
                className="rounded-full"
                alt="my avatar image"
                loading="lazy"
              />
            </BlurFade>
          </div>
          <div className="w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h6 className="title flex items-center justify-center text-[14px]  text-black">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  duration={1}
                  once
                >
                  O&#39;lmasov Sindor
                </TextAnimate>
              </h6>
              <span className="flex items-center justify-center text-[15px]  text-[#525252]">
                      <TextAnimate
                        animation="blurInUp"
                        by="character"
                        duration={1}
                        once
                      >
                          Frontend Developer
                      </TextAnimate>
                  </span>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default About
