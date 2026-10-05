import { Link } from 'react-router';
import { BASE_URL } from '../../lib/constants';

export default function Brand() {
  return (
    <Link to="/" className="flex items-center">
      <img src={`${BASE_URL}logo.png`} alt="logo" className="size-9" />
      <span className="font-semibold text-xl text-left">Hope Developer</span>
    </Link>
  );
}
