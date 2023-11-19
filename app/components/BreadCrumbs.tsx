import { Link } from "@remix-run/react";

const BreadCrumbs = () => {
  return (
    <div className="flex justify-between h-12 border-b-2 border-gray-900">
      <div className="flex items-center">
        <Link className="text-xs text-gray-900 pr-0.5" to="/">
          Home
        </Link>
        <Link className="text-xs text-gray-900 pr-0.5" to={`locations/${1}`}>
          / Locations
        </Link>
        <Link className="text-xs text-gray-900 pr-0.5" to="/">
          / OneLocation
        </Link>
        <Link className="text-xs text-gray-900 pr-0.5" to="/">
          / Residents
        </Link>
      </div>
    </div>
  );
};

export default BreadCrumbs;
