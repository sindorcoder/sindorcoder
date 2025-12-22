import github from '../../assets/githubProfile.svg'
import { BlurFade } from '../magicui/blur-fade.tsx'

const BLUR_FADE_DELAY = 0.04
const Skills = () => {
  return (<section className="mt-7">
    <BlurFade delay={BLUR_FADE_DELAY * 10 + 2 * 0.05}>
      <div className={'flex justify-center'}>
        <div className={'p-4 bg-white rounded-xl'}>
          <div
            className={'rounded-2xl border overflow-hidden border-gray-300'}
          >
            <img
              alt="github profile img"
              loading="lazy"
              width="100%"
              height="180px"
              className="object-cover h-47.5"
              src={github}
            />
          </div>

          <div className={'flex flex-col items-start gap-2 mt-5'}>
            <h5 className={'title text-[12px]'}>
              All Projects
            </h5>
            <span
              className={' text-[12px] tracking-tight text-[#525252]'}
            >
                All my projects are here, you can access them if you want. I’ll
                keep updating this space regularly, so feel free to check back
                for new additions.
              </span>
          </div>
          <a
            href={'https://github.com/sindorcoder'}
            className={'mt-4 inline-block bg-black  px-5 py-2 text-[12px]  text-white rounded-2xl'}
          >
            See Projects
          </a>
        </div>
      </div>
    </BlurFade>
    <div className="flex items-center justify-center mt-5">
      <BlurFade delay={BLUR_FADE_DELAY * 10 + 2 * 0.05}>
            <span className="text-[14px] font-normal text-[#525252] opacity-70">
          © 2025 Sindor Coder | All rights reserved
        </span>
      </BlurFade>
    </div>
  </section>)
}

export default Skills
