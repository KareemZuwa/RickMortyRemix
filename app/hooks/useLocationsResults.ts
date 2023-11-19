import { useQuery } from "react-query";
import { request } from "graphql-request";
import { GET_LOCATIONS } from "~/queries/queries";
import type { LocationQueryResponse } from "~/types/locationTypes";

const endpoint = "https://rickandmortyapi.com/graphql";

interface UseLocationsOptions {
  page: number;
  type?: string;
  dimension?: string;
}

export const useLocationsResults = ({
  page,
  type,
  dimension,
}: UseLocationsOptions) => {
  return useQuery(["locations", page, type, dimension], async () => {
    const data: LocationQueryResponse = await request(endpoint, GET_LOCATIONS, {
      page,
      type,
      dimension,
    });
    return data.locations;
  });
};
