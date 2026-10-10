import AnimatedContent from "../../../components/ui/AnimatedContent";
import { BASE_URL } from "../../../lib/constants";

const tools = [
  {
    name: "React",
    category: "Frontend",
    level: "خوب",
    score: 70,
  },
  {
    name: "Next",
    category: "Frontend",
    level: "خوب",
    score: 70,
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    level: "خوب",
    score: 70,
  },
  {
    name: "Tailwind",
    category: "Styling",
    level: "پیشرفته",
    score: 90,
  },
  {
    name: "Python",
    category: "Programming Language",
    level: "پیشرفته",
    score: 90,
  },
  {
    name: "Django",
    category: "Backend and API",
    level: "خوب",
    score: 80,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "متوسط",
    score: 50,
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "متوسط",
    score: 50,
  },
  {
    name: "Ollama",
    category: "LLM & RAG",
    level: "متوسط",
    score: 50,
  },
  {
    name: "Pandas",
    category: "Data Science",
    level: "متوسط",
    score: 50,
  },
];

export default function ResumeTools() {
  return (
    <section
      id="about-tools"
      aria-labelledby="tools-title"
      className="scroll-mt-8 space-y-6"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="badge badge-primary badge-outline">03</span>
          <span className="text-xl font-bold tracking-tight md:text-2xl text-base-content/60">
            ابزارها و تکنولوژی‌ها
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <AnimatedContent
            key={tool.name}
            direction="vertical"
            delay={0.3 * (index + 1)}
            duration={3}
          >
            <article className="card rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60 hover:border-primary/40 hover:shadow-primary hover:shadow-md transition-all duration-500 group">
              <div className="card-body gap-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <h3 className="break-words font-semibold transition-all duration-500 group-hover:text-primary">
                      {tool.name}
                    </h3>

                    <p className="text-xs text-base-content/50">
                      {tool.category}
                    </p>
                  </div>

                  <img
                    src={`${BASE_URL}images/technology/${tool.name.toLowerCase()}.svg`}
                    alt={tool.name}
                    className="size-12 md:size-16"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-base-content/60">
                    <span className="badge badge-accent shrink-0">
                      {tool.level}
                    </span>
                  </div>

                  <div
                    className="h-1.5 overflow-hidden rounded-full bg-base-300"
                    role="progressbar"
                    aria-label={`سطح تسلط به ${tool.name}`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={tool.score}
                  >
                    <div
                      className="h-full rounded-full bg-info duration-500 group-hover:bg-primary transition-all"
                      style={{ width: `${tool.score}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
