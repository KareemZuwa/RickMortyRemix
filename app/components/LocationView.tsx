import React from "react";
import type { GetLocationResponse } from "~/types/locationTypes";

interface LocationViewProps {
  locationResponse: GetLocationResponse | undefined;
}

export const LocationView = ({locationResponse}: LocationViewProps) => {
  const location = locationResponse?.location
  console.log(location)
  return <div>Här är locationview</div>;
};
