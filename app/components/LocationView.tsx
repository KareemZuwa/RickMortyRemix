import React from "react";
import type {
  GetLocationResponse,
  LocationResult,
} from "~/types/locationTypes";
import ResidentCard from "~/components/ResidentCard";
import GoBackButton from "./GoBackButton";
import { LocationAboutSection } from "./LocationAboutSection";

interface LocationViewProps {
  locationResponse: GetLocationResponse | undefined;
}

export const LocationView = ({ locationResponse }: LocationViewProps) => {
  const location = locationResponse?.location;

  return (
    <div>
      <div className="sm:flex justify-between py-8">
        <h2 className="text-center sm:text-left text-gray-900 text-3xl font-racing tracking-wide antialiased underline decoration-galaxyOrange-900">
          {location?.name}
        </h2>
        <div className="flex justify-center text-center pt-4 sm:pt-0">
          <GoBackButton />
        </div>
      </div>

      <div className="flex-1">
        <div className="pb-4">About:</div>
        <LocationAboutSection location={location as LocationResult} />
        <div className="py-6 border-t-2 border-gray-900">
          <div className="pb-4">Residents:</div>
          <ResidentCard locationContent={location as LocationResult} />
        </div>
      </div>
    </div>
  );
};
