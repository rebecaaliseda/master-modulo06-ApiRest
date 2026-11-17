import * as React from 'react';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer = () => {
  const { locationCollection, loadLocationCollection } =
    useLocationCollection();

  React.useEffect(() => {
    loadLocationCollection();
  }, []);

  return (
    <LocationCollectionComponent locationCollection={locationCollection} />
  );
};
