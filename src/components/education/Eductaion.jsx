import { education } from "../../data";
import { BlurFade } from "../magicui/blur-fade";
import { ResumeCard } from "../ui/resume-card";
const BLUR_FADE_DELAY = 0.04;
const Eductaion = () => {
  return (
    <section className="mb-[100px]">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold  ">Education</h2>
        </BlurFade>
        {education.map((education, id) => (
          <BlurFade
            key={education.school}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Eductaion;
