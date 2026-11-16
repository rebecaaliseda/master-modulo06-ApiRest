import { CharacterEntityApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return response.json();
};
