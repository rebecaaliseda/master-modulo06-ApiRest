import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  const data = await response.json();

  return data.results;
};

export const deleteCharacter = async (): Promise<boolean> => {
  return true;
};
