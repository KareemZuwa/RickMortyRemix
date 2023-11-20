import { useQuery } from "react-query";
import { request } from "graphql-request";
import { GET_ALL_FILTERS } from "~/queries/queries"; // Replace with the actual path to your new GraphQL query
import type { LocationQueryResponse } from "~/types/locationTypes";

const endpoint = "https://rickandmortyapi.com/graphql";

const useTypes = () => {
  return useQuery("types", async () => {
    try {
      // Initialize an array to store types from all pages
      let allTypes:string[] = [];

      // Start with the first page
      let currentPage = 1;
      let hasNextPage = true;

      // Iterate over pages until there are no more pages
      while (hasNextPage) {
        const response: LocationQueryResponse = await request(endpoint, GET_ALL_FILTERS, {
          page: currentPage,
        });

        // Extract types from the current page
        const typesFromPage = response.locations.results.flatMap((location) => location.type);

        // Add types to the array
        allTypes = [...allTypes, ...typesFromPage];

        // Check if there's a next page
        hasNextPage = response.locations.info.next !== null;

        // Move to the next page
        currentPage += 1;
      }

      // Extract unique types from the aggregated array
      const uniqueTypes = Array.from(new Set(allTypes));

      return { uniqueTypes };
    } catch (error) {
      console.error('Error fetching types:', error);
      throw error;
    }
  });
};

export default useTypes;
