import { Link } from "@remix-run/react";
import React from "react";
import type { LocationResult } from "~/types/locationTypes";

interface LocationCardProps {
  results: LocationResult[];
  page: number;
}

const LocationCard = ({ results, page }: LocationCardProps) => {
  return (
    <ul
      data-testid="locations"
      className="grid grid-cols-2 gap-6 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10"
    >
      {results.map((location) => (
        <Link
          key={location.id}
          to={`/locations/${page}/${location.id}?${location.name}`}
        >
          <li
            data-testid="location-item"
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border-2 border-gray-900"
          >
            <div className="flex flex-1 flex-col p-4">
              <img
                className="mx-auto h-16 w-16 flex-shrink-0"
                src={"/planet.svg"}
                alt="planet"
              />
              <h3
                className="mt-4 text-xs font-medium text-gray-900 h-6 flex items-center justify-center mb-4
              "
              >
                {location.name}
              </h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default LocationCard;
