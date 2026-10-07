import GradientWaves from "../../components/ui/GradientWaves";
import Hero from "./components/Hero/Hero";
import Logos from "./components/Logos/Logos";

export default function Main() {
  return (
    <>
      <div className="absolute w-full h-screen">
        <GradientWaves
          waveColor="#1DB954"
          crestColor="#14B8A6"
          horizonColor="#064E3B"
          amplitude={2.5}
          waveScale={0.6}
          swell={30}
          fogDepth={12}
          opacity={0.7}
          tilt={1}
          waveRatio={1.1}
        />
      </div>
      <main>
        <Hero />
        <Logos />
      </main>
    </>
  );
}
