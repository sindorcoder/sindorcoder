import { BlurFade } from "../../components/magicui/blur-fade";
import github from "../../assets/icons/githubProfile.svg";
import { Link } from "react-router-dom";
const BLUR_FADE_DELAY = 0.04;
const Skills = () => {
  return (
    <section className="mt-[50px]">
      <BlurFade delay={BLUR_FADE_DELAY * 10 + 2 * 0.05}>
        <div className={"flex justify-center"}>
          <div className={"border-4 p-4 max-w-[500px]  bg-white rounded-2xl"}>
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
                className={
                  "text text-[10px] sm:text-[15px] font-normal text-[#525252]"
                }
              >
                All my projects are here, you can access them if you want. I’ll
                keep updating this space regularly, so feel free to check back
                for new additions.
              </span>
            </div>
            <Link
              to={"https://github.com/sindorcoder"}
              className={
                "mt-4 inline-block bg-black title px-8 py-2 font-medium text-[10px]  sm:text-[12px] text-white rounded-3xl"
              }
            >
              See Projects
            </Link>
          </div>
        </div>
      </BlurFade>
      <div className="flex items-center justify-center mt-10">
        <span className="text-[14px] font-normal text-[#525252] opacity-80">
          © 2025 Sindor Coder | All rights reserved
        </span>
      </div>
      {/* <div className="flex min-h-0 flex-col items-center my-10 gap-y-3">
        <div className="flex flex-wrap gap-1 max-w-[550px]">
          {techsIcon?.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill.name}>{skill.name}</Badge>
            </BlurFade>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
