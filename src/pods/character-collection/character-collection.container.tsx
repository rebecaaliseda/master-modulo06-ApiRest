import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();

  const [filter, setFilter] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleSelectCharacter = (id: string) => {
    navigate(linkRoutes.character(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      filter={filter}
      onFilterChange={setFilter}
      onEdit={handleSelectCharacter}
    />
  );
};
