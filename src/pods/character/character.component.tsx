import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (bestSentence: string) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = ({
  character,
  onSave,
}) => {
  const [bestSentence, setBestSentence] = React.useState(
    character.bestSentence
  );

  React.useEffect(() => {
    setBestSentence(character.bestSentence);
  }, [character]);

  return (
    <Card
      className={classes.root}
      sx={{
        maxWidth: 700,
        margin: '2rem auto',
      }}
    >
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        sx={{
          width: 300,
          height: 300,
          objectFit: 'cover',
          margin: '0 auto',
          marginTop: 2,
        }}
      />

      <CardContent>
        <Typography variant="h4" gutterBottom>
          {character.name}
        </Typography>

        <Typography>
          <strong>Status:</strong> {character.status}
        </Typography>

        <Typography>
          <strong>Species:</strong> {character.species}
        </Typography>

        <Typography>
          <strong>Gender:</strong> {character.gender}
        </Typography>

        <Typography>
          <strong>Origin:</strong> {character.origin}
        </Typography>

        <Typography>
          <strong>Location:</strong> {character.location}
        </Typography>

        <TextField
          fullWidth
          label="Best sentence"
          value={bestSentence}
          onChange={(e) => setBestSentence(e.target.value)}
          sx={{ mt: 3 }}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => onSave(bestSentence)}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  );
};
