import { BASE_URL } from "../../../../lib/constants";
import Content from "./Content";
import Pointer from "./Pointer";

export default function Hero() {
  return (
    <section className="container relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:pt-28 lg:px-8 xl:pt-36">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Content />
        <div className="text-left max-lg:hidden">
          <img src={`${BASE_URL}hero-avatar.png`} alt="avatar" />
        </div>
      </div>
      <Pointer />
      <img
        src={`${BASE_URL}hero-avatar.png`}
        alt="avatar"
        className="w-[30%] absolute top-0 left-4 md:left-8 lg:hidden"
      />
    </section>
  );
}
