import * as React from 'react';
import { getLocationCollection } from './api';
import { LocationEntityVm } from './location-collection.vm';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<
    LocationEntityVm[]
  >([]);

  const loadLocationCollection = () => {
    getLocationCollection().then((result) =>
      setLocationCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return {
    locationCollection,
    loadLocationCollection,
  };
};
