import { useQuery } from "react-query";
import { request } from "graphql-request";
import { GET_ALL_FILTERS } from "~/queries/queries";
import type { LocationQueryResponse } from "~/types/locationTypes";

const endpoint = "https://rickandmortyapi.com/graphql";

const useTypes = () => {
  return useQuery("types", async () => {
    try {
      let allTypes: string[] = [];

      let currentPage = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const response: LocationQueryResponse = await request(
          endpoint,
          GET_ALL_FILTERS,
          {
            page: currentPage,
          }
        );

        const typesFromPage = response.locations.results.flatMap(
          (location) => location.type
        );

        allTypes = [...allTypes, ...typesFromPage];

        hasNextPage = response.locations.info.next !== null;

        currentPage += 1;
      }

      const uniqueTypes = Array.from(new Set(allTypes));

      return { uniqueTypes };
    } catch (error) {
      console.error("Error fetching types:", error);
      throw error;
    }
  });
};

export default useTypes;
