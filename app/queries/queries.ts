import { gql } from "graphql-request";

export const GET_LOCATIONS = gql `
query GetLocations($page: Int!, $dimension: String!, $type: String) {
    locations(page: $page, filter: {dimension: $dimension, type: $type}) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          status
          species
          gender
          image
          origin {
            id
          }
        }
        created
      }
    }
  }
`

export const GET_LOCATION = gql `
query GetLocation($id: ID!) {
  location(id :$id) { 
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        gender
        image
        origin {
          id
        }
      }
      created
    }
  }
`

