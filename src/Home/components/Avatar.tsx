import { BASE_URL } from "../../lib/constants";

export default function Avatar() {
  return (
    <div className="center animate-float">
      <img
        src={`${BASE_URL}/profile-avatar.png`}
        alt="Sai Bende"
        className="size-50 md:size-64 lg:size-75 rounded-full border-4 border-primary shadow-xl object-cover hover:scale-110 transition duration-1000"
      />
    </div>
  );
}
