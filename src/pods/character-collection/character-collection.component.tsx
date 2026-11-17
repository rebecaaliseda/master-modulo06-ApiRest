import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import TextField from '@mui/material/TextField';

interface Props {
  characterCollection: CharacterEntityVm[];
  filter: string;
  onFilterChange: (value: string) => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, filter, onFilterChange, onEdit } = props;

  const filteredCharacters = characterCollection.filter((character) =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        label="Search character"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        sx={{ mb: 3 }}
      />

      <ul className={classes.list}>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
