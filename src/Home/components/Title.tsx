import { TITLE_DATA } from "../../data/home";

export default function Title() {
  return (
    <h1
      className="
        font-bold text-4xl md:text-5xl
        pt-2
        bg-linear-to-l from-primary/80 to-secondary from-30%
        bg-clip-text text-transparent
      "
    >
      {TITLE_DATA}
    </h1>
  );
}
