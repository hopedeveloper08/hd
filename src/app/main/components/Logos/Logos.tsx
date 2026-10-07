import { LogoLoop } from "../../../../components/ui/LogoLoop";
import { logoItems } from "./logoItems";

export default function Logos() {
  return (
    <section dir="ltr" className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16">
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
