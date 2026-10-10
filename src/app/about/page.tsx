import ResumeSummary from "./components/ResumeSummary";
import ResumeSkills from "./components/ResumeSkills";
import ResumeTools from "./components/ResumeTools";
import ResumeEducation from "./components/ResumeEducation";
import AnimatedContent from "../../components/ui/AnimatedContent";

const sections = [
  { id: "about-summary", label: "معرفی", number: "01" },
  { id: "about-skills", label: "توانمندی‌ها", number: "02" },
  { id: "about-tools", label: "ابزارها", number: "03" },
  { id: "about-education", label: "تحصیلات", number: "04" },
];

export default function Resume() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-32 pt-20 md:pt-24 sm:px-6 lg:px-8">
      <div className="space-y-16 sm:space-y-20">
        <AnimatedContent
          direction="horizontal"
          delay={0.1}
          duration={2}
        >
          <ResumeSummary />
        </AnimatedContent>

        <ResumeSkills />

        <ResumeTools />

        <ResumeEducation />
      </div>

      <nav
        aria-label="ناوبری بخش‌های درباره من"
        className="fixed bottom-4 left-1/2 z-50 w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2"
      >
        <div className="flex items-center gap-1 overflow-x-auto rounded-2xl border border-base-300 bg-base-100/90 p-2 shadow-xl backdrop-blur-xl">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex shrink-0 flex-col items-center gap-1 rounded-xl px-3 py-2 text-base-content/65 transition-colors hover:bg-base-200 hover:text-base-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span className="text-[10px] opacity-60">{section.number}</span>

              <span className="text-xs font-medium">{section.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </main>
  );
}
