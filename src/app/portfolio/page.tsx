import { useNavigate } from "react-router";
import CircularCarousel, {
  type CircularCarouselItem,
} from "../../components/ui/CircularCarousel";
import { projectItems } from "./projectItems";

export default function Portfolio() {
  const navigate = useNavigate();

  const clickHandler = (item: CircularCarouselItem) => {
    navigate(`/portfolio/${item.slug}`);
  };

  return (
    <main className="h-screen container">
      <CircularCarousel
        items={[
          ...projectItems.map((item) => {
            return {
              title: item.title,
              slug: item.slug,
              src: item.images[0],
              alt: item.title,
              subtitle: `${item.categories.join(" | ")} / ${item.year}`,
            };
          }),
        ]}
        intro="assemble"
        aspectRatio={2}
        cardWidth={800}
        gap={64}
        curve={0.8}
        tilt={-6}
        speed={10}
        onItemClick={clickHandler}
        captions
      />
    </main>
  );
}
