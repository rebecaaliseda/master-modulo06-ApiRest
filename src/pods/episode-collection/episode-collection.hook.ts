import * as React from 'react';
import { getEpisodeCollection } from './api';
import { EpisodeEntityVm } from './episode-collection.vm';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);

  const loadEpisodeCollection = () => {
    getEpisodeCollection().then((result) =>
      setEpisodeCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return {
    episodeCollection,
    loadEpisodeCollection,
  };
};
