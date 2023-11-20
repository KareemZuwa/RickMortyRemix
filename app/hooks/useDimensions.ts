import { useQuery } from "react-query";
import { request } from "graphql-request";
import { GET_ALL_FILTERS } from "~/queries/queries"; // Replace with the actual path to your new GraphQL query
import type { LocationQueryResponse } from "~/types/locationTypes";

const endpoint = "https://rickandmortyapi.com/graphql";

const useDimensions = () => {
  return useQuery("dimensions", async () => {
    try {
      // Initialize an array to store dimensions from all pages
      let allDimensions: string[] = [];

      // Start with the first page
      let currentPage = 1;
      let hasNextPage = true;

      // Iterate over pages until there are no more pages
      while (hasNextPage) {
        const response: LocationQueryResponse = await request(endpoint, GET_ALL_FILTERS, {
          page: currentPage,
        });

        // Extract dimensions from the current page
        const dimensionsFromPage = response.locations.results.flatMap((location) => location.dimension);

        // Add dimensions to the array
        allDimensions = [...allDimensions, ...dimensionsFromPage];

        // Check if there's a next page
        hasNextPage = response.locations.info.next !== null;

        // Move to the next page
        currentPage += 1;
      }

      // Extract unique dimensions from the aggregated array
      const uniqueDimensions = Array.from(new Set(allDimensions));

      return { uniqueDimensions };
    } catch (error) {
      console.error('Error fetching dimensions:', error);
      throw error;
    }
  });
};

export default useDimensions;