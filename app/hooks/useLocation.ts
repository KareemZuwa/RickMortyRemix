import { useQuery } from "react-query";
import { request } from "graphql-request";

import type { GetLocationResponse } from "~/types/locationTypes";
import { GET_LOCATION } from "~/queries/queries";

const endpoint = "https://rickandmortyapi.com/graphql";

const useLocation = (locationId: string) => {
  return useQuery(["location", locationId], async () => {
    const data: GetLocationResponse = await request(endpoint, GET_LOCATION, {
      id: locationId,
    });
    return data;
  });
};

export default useLocation;
