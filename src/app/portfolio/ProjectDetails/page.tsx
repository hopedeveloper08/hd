import { useLoaderData } from "react-router";
import ProjectHero from "./components/ProjectHero";
import ProjectOverview from "./components/ProjectOverview";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDescription from "./components/ProjectDescription";
import ProjectResults from "./components/ProjectResults";
import ProjectTechStack from "./components/ProjectTechStack";
import ProjectFeatures from "./components/ProjectFeatures";

export default function ProjectDetails() {
  const project = useLoaderData();

  return (
    <main className="min-h-screen bg-base-200/30 text-base-content">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectFeatures project={project} />
        <ProjectTechStack project={project} />
        <ProjectGallery project={project} />
        <ProjectDescription project={project} />
        <ProjectResults project={project} />
      </div>
    </main>
  );
}
