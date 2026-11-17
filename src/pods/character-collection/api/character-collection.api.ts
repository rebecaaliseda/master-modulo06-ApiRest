import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch('http://localhost:3000/api/character');

  const data = await response.json();

  return data.results;
};
