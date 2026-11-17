import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { LocationEntityVm } from './location-collection.vm';

interface Props {
  locationCollection: LocationEntityVm[];
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = ({
  locationCollection,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {locationCollection.map((location) => (
        <Card key={location.id}>
          <CardContent>
            <Typography variant="h6">{location.name}</Typography>

            <Typography>
              <strong>Type:</strong> {location.type}
            </Typography>

            <Typography>
              <strong>Dimension:</strong> {location.dimension}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
