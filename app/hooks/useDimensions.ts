import { useQuery } from "react-query";
import { request } from "graphql-request";
import { GET_ALL_FILTERS } from "~/queries/queries";
import type { LocationQueryResponse } from "~/types/locationTypes";

const endpoint = "https://rickandmortyapi.com/graphql";

const useDimensions = () => {
  return useQuery("dimensions", async () => {
    try {
      let allDimensions: string[] = [];

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

        const dimensionsFromPage = response.locations.results.flatMap(
          (location) => location.dimension
        );

        allDimensions = [...allDimensions, ...dimensionsFromPage];

        hasNextPage = response.locations.info.next !== null;

        currentPage += 1;
      }

      const uniqueDimensions = Array.from(new Set(allDimensions));

      return { uniqueDimensions };
    } catch (error) {
      console.error("Error fetching dimensions:", error);
      throw error;
    }
  });
};

export default useDimensions;
