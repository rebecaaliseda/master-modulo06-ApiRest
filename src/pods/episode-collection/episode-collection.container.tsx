import * as React from 'react';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();

  React.useEffect(() => {
    loadEpisodeCollection();
  }, []);

  return <EpisodeCollectionComponent episodeCollection={episodeCollection} />;
};
