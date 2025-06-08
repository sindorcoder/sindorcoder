import { techsIcon } from "../../data";
import { BlurFade } from "../../components/magicui/blur-fade";
import { Badge } from "../../components/ui/badge";
import { IconCloudDemo } from "../../components/ui/IconCloud";
const BLUR_FADE_DELAY = 0.04;
const Skills = () => {
  return (
    <section className="mb-[70px]">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {techsIcon.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill.name}>{skill.name}</Badge>
            </BlurFade>
          ))}
        </div>
        <div className="w-full">
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
};

export default Skills;
