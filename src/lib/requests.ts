import HttpClient from './http-client';
import { map, Observable } from 'rxjs';
import type { City, DistanceAPIResponse } from './models';

const env = import.meta.env as Record<string, string>;

export function getCities(query: string): Observable<City[]> {
  return HttpClient.get<City[]>(`https://${env.VITE_GET_CITIES_HOST}/v1/geocoding?city=${query}`, {
    headers: {
      'x-rapidapi-key': env.VITE_API_KEY,
      'x-rapidapi-host': env.VITE_GET_CITIES_HOST,
    },
  });
}

export function getDistance(city1: City, city2: City): Observable<number> {
  return HttpClient.get<DistanceAPIResponse>(
    `https://${env.VITE_GET_DISTANCE_HOST}/distance/simple`,
    {
      params: {
        lat_1: city1.latitude,
        long_1: city1.longitude,
        lat_2: city2.latitude,
        long_2: city2.longitude,
        unit: 'kilometers',
      },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': env.VITE_API_KEY,
        'x-rapidapi-host': env.VITE_GET_DISTANCE_HOST,
      },
    }
  ).pipe(map(({ distance }) => Math.floor(distance)));
}
