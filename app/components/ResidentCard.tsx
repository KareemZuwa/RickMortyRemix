import React from "react";
import type { LocationResult } from "~/types/locationTypes";

interface ResidentCardProps {
  locationContent: LocationResult | undefined;
}

const ResidentCard = ({ locationContent }: ResidentCardProps) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {locationContent?.residents.map((person) => (
        <li
          key={person.id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border-2 border-gray-900"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={person.image}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.species}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-sm text-gray-500">{person.gender}</dd>
              <dd className="mt-3">
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${person.status === "Dead" ? " text-red-700 bg-red-50 ring-red-600/20" : " text-green-700 bg-green-50 ring-green-600/20"}`}>
                  {person.status}
                </span>
              </dd>
            </dl>
          </div>
          <div></div>
        </li>
      ))}
    </ul>
  );
};

export default ResidentCard;
