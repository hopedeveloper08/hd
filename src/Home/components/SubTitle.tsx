import { SUB_TITLE_DATA } from "../../data/home";

export default function SubTitle() {
  return (
    <p
      className="text-base lg:text-xl
            bg-linear-to-l from-base-content to-secondary from-55%
            bg-clip-text text-transparent
          "
    >
      {SUB_TITLE_DATA}
    </p>
  );
}
