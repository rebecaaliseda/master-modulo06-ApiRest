import { CharacterEntityApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await fetch(`http://localhost:3000/api/character/${id}`);

  return response.json();
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<void> => {
  await fetch(`http://localhost:3000/api/character/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
};
