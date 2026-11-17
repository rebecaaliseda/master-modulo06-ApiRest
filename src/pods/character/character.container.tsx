import React from 'react';
import { useParams } from 'react-router-dom';

import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );

  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  const handleSave = async (bestSentence: string) => {
    await api.saveCharacter({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      image: character.image,
      origin: {
        name: character.origin,
      },
      location: {
        name: character.location,
      },
      bestSentence,
    });

    setCharacter({
      ...character,
      bestSentence,
    });
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  return <CharacterComponent character={character} onSave={handleSave} />;
};
