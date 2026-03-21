import BlurFade from "@/components/magicui/blur-fade";
import LogoBadge from "@/components/logo-badge";
import SectionHeading from "@/components/section/section-heading";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <SectionHeading>Projects</SectionHeading>
      </BlurFade>

      <div className="flex flex-col gap-8">
        {DATA.projects.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY + index * 0.05}
          >
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-x-3"
            >
              <div className="flex min-w-0 flex-1 items-start gap-x-3">
                <LogoBadge src={project.image} alt={project.title} />

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-center gap-2 font-semibold leading-none">
                    {project.title}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {project.description}
                  </div>

                  {project.technologies.length > 0 && (
                    <div className="text-xs text-muted-foreground">
                      {project.technologies.join(" • ")}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-none text-right text-xs tabular-nums text-muted-foreground">
                {project.dates}
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
