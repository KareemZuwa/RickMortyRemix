// Represents the 'origin' field
export interface Origin {
  id: string;
}

// Represents the 'residents' field
export interface Resident {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: Origin; // Using the Origin type defined above
}

// Represents the 'results' field
export interface LocationResult {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Resident[]; // Using the Resident type defined above
  created: string;
}

// Represents the 'info' field
export interface LocationInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

// Represents the overall structure of the query response
export interface LocationQueryResponse {
  locations: {
    info: LocationInfo; // Using the LocationInfo type defined above
    results: LocationResult[]; // Using the LocationResult type defined above
  };
}
