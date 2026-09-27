import { TypeAnimation } from "react-type-animation";
import { TYPE_WRITTER_DATA } from "../../data/home";

export default function TypeWritter() {
  return (
    <h3
      className="
        font-medium text-xl md:text-2xl 
        bg-linear-to-l from-base-content to-secondary to-80%
        bg-clip-text text-transparent
    "
    >
      <TypeAnimation
        sequence={TYPE_WRITTER_DATA}
        wrapper="span"
        speed={30}
        repeat={Infinity}
      />
    </h3>
  );
}
