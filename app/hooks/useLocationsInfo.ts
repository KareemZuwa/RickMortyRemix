import { useQuery } from 'react-query';
import { request, gql } from 'graphql-request';
import type { LocationQueryResponse } from '~/types/locationTypes';

const endpoint = 'https://rickandmortyapi.com/graphql';

const GET_LOCATIONS_INFO = gql`
  query GetLocations($page: Int = 1) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export const useLocationsInfo = (page: number) => {
  return useQuery(['locationsInfo', page], async () => {
    const data: LocationQueryResponse = await request(endpoint, GET_LOCATIONS_INFO, {
      page,
    });
    return data.locations.info;
  });
};
