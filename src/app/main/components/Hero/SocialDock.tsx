import { Link } from "react-router";
import { Dock, DockIcon } from "../../../../components/ui/dock";
import { SOCIAL_DATA } from "./social";

export default function SocialDock() {
  return (
    <Dock iconMagnification={80} iconDistance={100} iconSize={50}>
      {SOCIAL_DATA.map((item) => (
        <DockIcon key={item.title} className="tooltip [--placement:bottom]">
          <Link to={item.link}>
            <img src={item.image} alt={item.title} aria-label="Tooltip" />
            <span
              className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
              role="tooltip"
            >
              <span className="tooltip-body tooltip-accent">{item.title}</span>
            </span>
          </Link>
        </DockIcon>
      ))}
    </Dock>
  );
}
