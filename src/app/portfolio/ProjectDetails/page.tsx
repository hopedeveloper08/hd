import { useLoaderData } from "react-router";
import ProjectHero from "./components/ProjectHero";

export default function ProjectDetails() {
  const project = useLoaderData();

  return (
    <main className="min-h-screen bg-base-200/30 text-base-content">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <ProjectHero project={project} />
      </div>
    </main>
  );
}
