import { LocationEntityApi } from './location-collection.api-model';

export const getLocationCollection = async (): Promise<LocationEntityApi[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/location');

  const data = await response.json();

  return data.results;
};
