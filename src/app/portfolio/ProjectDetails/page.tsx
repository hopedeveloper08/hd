import { useLoaderData } from "react-router";
import ProjectHero from "./components/ProjectHero";
import ProjectOverview from "./components/ProjectOverview";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDescription from "./components/ProjectDescription";
import ProjectResults from "./components/ProjectResults";
import ProjectTechStack from "./components/ProjectTechStack";
import ProjectFeatures from "./components/ProjectFeatures";
import AnimatedContent from "../../../components/ui/AnimatedContent";

export default function ProjectDetails() {
  const project = useLoaderData();

  return (
    <main className="min-h-screen bg-base-200/30 text-base-content">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <AnimatedContent direction="horizontal" delay={0.2} duration={3}>
          <ProjectHero project={project} />
        </AnimatedContent>
        <ProjectOverview project={project} />
        <AnimatedContent direction="horizontal" delay={0.5} duration={3}>
          <ProjectFeatures project={project} />
        </AnimatedContent>
        <AnimatedContent direction="horizontal" delay={0.5} duration={3}>
          <ProjectTechStack project={project} />
        </AnimatedContent>
        <AnimatedContent direction="horizontal" delay={0.5} duration={3}>
          <ProjectGallery project={project} />
        </AnimatedContent>
        <AnimatedContent direction="horizontal" delay={0.5} duration={3}>
          <ProjectDescription project={project} />
        </AnimatedContent>
        <AnimatedContent direction="horizontal" delay={0.5} duration={3}>
          <ProjectResults project={project} />
        </AnimatedContent>
      </div>
    </main>
  );
}
