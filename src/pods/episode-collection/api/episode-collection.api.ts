import { EpisodeEntityApi } from './episode-collection.api-model';

export const getEpisodeCollection = async (): Promise<EpisodeEntityApi[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');

  const data = await response.json();

  return data.results;
};
