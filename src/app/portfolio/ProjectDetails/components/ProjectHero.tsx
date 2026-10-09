import { HiOutlineExternalLink } from "react-icons/hi";
import type { Project } from "../../projectItems";
import { FaGithub } from "react-icons/fa6";
import { BsArrowUpLeft } from "react-icons/bs";

export default function ProjectHero({ project }: { project: Project }) {
  const {
    title,
    categories = [],
    problemStatement,
    images = [],
    link,
    githubLink,
  } = project;

  const previewImage = images[0];

  return (
    <section
      id="project-hero"
      aria-labelledby="project-hero-title"
      className="relative mb-8 overflow-hidden rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60"
    >
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10">
        {/* Project information */}
        <div className="flex min-w-0 flex-col items-start gap-5">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="badge badge-accent">
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            id="project-hero-title"
            className="text-3xl leading-relaxed font-bold tracking-tight text-base-content sm:text-4xl lg:text-5xl"
          >
            {title}
          </h1>

          {/* Summary */}
          {problemStatement && (
            <p className="max-w-2xl text-sm leading-8 text-base-content/70 sm:text-base sm:leading-9 text-justify">
              {problemStatement}
            </p>
          )}

          {/* Project links */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                مشاهده آنلاین
                <HiOutlineExternalLink size={16} aria-hidden="true" />
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FaGithub size={18} aria-hidden="true" />
                مشاهده سورس کد
                <BsArrowUpLeft size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Project preview */}
        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-2xl border border-base-300/70 bg-base-200/50 shadow-sm">
            {previewImage ? (
              <img
                src={previewImage}
                alt={`پیش‌نمایش ${title}`}
                fetchPriority="high"
                className="aspect-5/3 w-full object-top"
              />
            ) : (
              <div
                role="img"
                aria-label={`تصویری برای ${title} موجود نیست`}
                className="flex aspect-4/3 items-center justify-center"
              >
                <span className="text-sm text-base-content/50">
                  تصویر پروژه موجود نیست
                </span>
              </div>
            )}
          </div>

          {/* Decorative element */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-e-3 -bottom-3 -z-10 size-24 rounded-2xl border border-primary/20 bg-primary/5"
          />
        </div>
      </div>
    </section>
  );
}
