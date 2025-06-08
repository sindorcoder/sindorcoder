import { BlurFade } from "../../components/magicui/blur-fade";
import { ProjectCard } from "../../components/ui/project-card";
import projectData from "../../data/index";

const BLUR_FADE_DELAY = 0.04;

const Projects = () => {
  return (
    <section>
      <div className="w-full p-3">
        <div className="mb-[60px]">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projectData.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                to={project.href}
                key={project.title}
                title={project.title}
                description={project.text}
                tags={project.type}
                image={project.image}
                links={project.links}
                source={project.source}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
