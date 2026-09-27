import Avatar from "./components/Avatar";
import CTA from "./components/CTA";
import SocialMedia from "./components/SocialMedia";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import TypeWritter from "./components/TypeWritter";

export default function Home() {
  return (
    <div
      className="
        container
        max-lg:mt-4
        h-full lg:min-h-screen
        flex max-lg:flex-col lg:gap-4
        lg:justify-evenly items-center 
        transition-colors 
        duration-300
      "
    >
      <section className="basis-1/3">
        <Avatar />
      </section>
      <section
        className="
          basis-2/3 grow
          flex flex-col max-lg:justify-around items-start gap-4 lg:gap-8
          animate-fade-in-up
        "
      >
        <Title />
        <TypeWritter />
        <SubTitle />
        <CTA />
        <SocialMedia />
      </section>
    </div>
  );
}
