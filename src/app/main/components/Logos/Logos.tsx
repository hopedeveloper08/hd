import { LogoLoop } from "../../../../components/ui/LogoLoop";
import { logoItems } from "./logoItems";

export default function Logos() {
  return (
    <section dir="ltr" className="mt-12 sm:mt-14 md:mt-16 lg:mt-18 xl:mt-20">
      <LogoLoop
        logos={logoItems}
        speed={40}
        logoHeight={56}
        gap={64}
        fadeOut
        scaleOnHover
        ariaLabel="Technology partners"
      />
    </section>
  );
}
