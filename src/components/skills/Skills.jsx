import {BlurFade} from "../magicui/blur-fade.tsx";
import github from "../../assets/githubProfile.svg";
import {Link} from "react-router-dom";

const BLUR_FADE_DELAY = 0.04;
const Skills = () => {
    return (<section className="mt-[50px]">
        <BlurFade delay={BLUR_FADE_DELAY * 10 + 2 * 0.05}>
            <div className={"flex justify-center"}>
                <div className={"p-4   bg-white rounded-2xl"}>
                    <div
                        className={"rounded-2xl border overflow-hidden border-gray-300"}
                    >
                        <img
                            alt="github profile img"
                            loading="lazy"
                            className="w-full h-[240px] object-cover bg-white"
                            src={github}
                        />
                    </div>

                    <div className={"flex flex-col items-start gap-2 mt-5"}>
                        <h5 className={"title text-[14px] sm:text-[17px] font-normal"}>
                            All Projects
                        </h5>
                        <span
                            className={"text text-[10px] sm:text-[15px] font-normal text-[#525252]"}
                        >
                All my projects are here, you can access them if you want. I’ll
                keep updating this space regularly, so feel free to check back
                for new additions.
              </span>
                    </div>
                    <a
                        href={"https://github.com/sindorcoder"}
                        className={"mt-4 inline-block bg-black title px-8 py-2 font-medium text-[10px]  sm:text-[12px] text-white rounded-3xl"}
                    >
                        See Projects
                    </a>
                </div>
            </div>
        </BlurFade>
        <div className="flex items-center justify-center mt-10">
       <BlurFade delay={BLUR_FADE_DELAY * 10 + 2 * 0.05}>
            <span className="text-[14px] font-normal text-[#525252] opacity-80">
          © 2025 Sindor Coder | All rights reserved
        </span>
       </BlurFade>
        </div>
    </section>);
};

export default Skills;
