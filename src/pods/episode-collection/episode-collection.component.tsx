import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { EpisodeEntityVm } from './episode-collection.vm';

interface Props {
  episodeCollection: EpisodeEntityVm[];
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = ({
  episodeCollection,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {episodeCollection.map((episode) => (
        <Card key={episode.id}>
          <CardContent>
            <Typography variant="h6">{episode.name}</Typography>

            <Typography>
              <strong>Episode:</strong> {episode.episode}
            </Typography>

            <Typography>
              <strong>Air date:</strong> {episode.airDate}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
