import { SOCIAL_DATA } from "../../data/social";

export default function SocialMedia() {
  return (
    <div
      className="
        w-full
        flex gap-12
      "
    >
      {SOCIAL_DATA.map((item) => (
        <a
          key={item.title}
          href={item.link}
          className="
            size-12 md:size-14 lg:size-16
            mx-auto
            transition-all
            hover:scale-120 
            hover:-translate-y-2
            duration-700
            flex flex-col items-center
            group 
            "
        >
          <img src={item.image} alt={item.title} />
          <span className="hidden transition-all group-hover:inline text-secondary">{item.title}</span>
        </a>
      ))}
    </div>
  );
}
