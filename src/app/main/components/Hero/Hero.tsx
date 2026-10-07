import { Pointer } from "../../../../components/ui/pointer";
import { BASE_URL } from "../../../../lib/constants";
import Content from "./Content";
import PointerImage from "./PointerImage";

export default function Hero() {
  return (
    <section className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 xl:pt-40">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Content />
        <div className="text-left max-lg:hidden z-40">
          <img src={`${BASE_URL}hero-avatar.png`} alt="avatar" />
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
      <img
        src={`${BASE_URL}hero-avatar.png`}
        alt="avatar"
        className="w-[30%] absolute top-18 left-4 md:left-8 lg:hidden"
      />
    </section>
  );
}
