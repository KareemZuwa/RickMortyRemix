import React from "react";
import type { LocationResult } from "~/types/locationTypes";
interface LocationAboutSectionProps {
  location: LocationResult | undefined;
}

export const LocationAboutSection = ({
  location,
}: LocationAboutSectionProps) => {
  console.log(location);
  const numberOfDeadCharacters =
    location?.residents?.filter(
      (character) => character.status.toLowerCase() === "dead"
    )?.length ?? 0;

  const numberOfAliveCharacters =
    location?.residents?.filter(
      (character) => character.status.toLowerCase() === "alive"
    )?.length ?? 0;

  const robots =
    location?.residents?.filter(
      (character) => character.species.toLowerCase() === "robot"
    )?.length ?? 0;
  const humans =
    location?.residents?.filter(
      (character) => character.species.toLowerCase() === "human"
    )?.length ?? 0;
  const aliens =
    location?.residents?.filter(
      (character) => character.species.toLowerCase() === "alien"
    )?.length ?? 0;
  const numberOfGuest =
    location?.residents?.filter(
      (character) => character.origin.id !== location.id
    )?.length ?? 0;

  return (
    <div className="space-y-4 border-2 border-gray-900 p-8 rounded-md mb-8">
      <div>
        <h3>
          <b>Dimension:</b> {location?.dimension}
        </h3>
      </div>
      <div>
        <h3>
          <b>Type:</b> {location?.type}
        </h3>
      </div>
      <div>
        <h3>
          <b>Stats:</b>
        </h3>
        <ul className="list-disc list-inside">
          <li>{" Alive Characters: " + numberOfAliveCharacters}</li>
          <li>{" Dead Characters: " + numberOfDeadCharacters}</li>
          <li>
            {robots +
              " Robots vs " +
              humans +
              " Humans vs " +
              aliens +
              " Aliens"}
          </li>
          <li>{"Guests: " + numberOfGuest}</li>
        </ul>
      </div>
    </div>
  );
};
