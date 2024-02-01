export interface Origin {
  id: string;
}

export interface Resident {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: Origin;
}

export interface LocationResult {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
  created: string;
}

export interface LocationInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

export interface LocationQueryResponse {
  locations: {
    info: LocationInfo;
    results: LocationResult[];
  };
}

export interface GetLocationResponse {
  location: LocationResult | null;
}
