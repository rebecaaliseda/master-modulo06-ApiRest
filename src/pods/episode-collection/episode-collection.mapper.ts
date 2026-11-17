import * as apiModel from './api/episode-collection.api-model';
import * as viewModel from './episode-collection.vm';

export const mapFromApiToVm = (
  episode: apiModel.EpisodeEntityApi
): viewModel.EpisodeEntityVm => ({
  id: episode.id,
  name: episode.name,
  episode: episode.episode,
  airDate: episode.air_date,
});
