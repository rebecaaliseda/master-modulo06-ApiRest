import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
  locations: string;
  episodes: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  character: '/character/:id',
  locations: '/locations',
  episodes: '/episodes',
};
type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'character'> {
  character: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  character: (id) =>
    generatePath(switchRoutes.character, {
      id,
    }),
};
