import AnimatedContent from "../../../../components/ui/AnimatedContent";
import { Pointer } from "../../../../components/ui/pointer";
import { BASE_URL } from "../../../../lib/constants";
import Content from "./Content";
import PointerImage from "./PointerImage";

export default function Hero() {
  return (
    <section className="container md:px-8 pt-28 relative">
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <Content />
        <div className="text-left max-md:hidden z-40 animate-avatar">
          <AnimatedContent animateOpacity scale={0.5} duration={3}>
            <img src={`${BASE_URL}hero-avatar.png`} alt="avatar" />
          </AnimatedContent>
          <Pointer>
            <img
              src={`${BASE_URL}images/pointers/heart.svg`}
              alt="pointer"
              className="size-12 animate-heartbeat"
            />
          </Pointer>
        </div>
      </div>
      <PointerImage />
      <AnimatedContent scale={0.2} duration={3}>
        <img
          src={`${BASE_URL}hero-avatar.png`}
          alt="avatar"
          className="w-[35%] absolute top-18 left-4 md:hidden animate-avatar"
        />
      </AnimatedContent>
    </section>
  );
}
