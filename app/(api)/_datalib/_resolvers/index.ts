import { mergeResolvers } from '@graphql-tools/merge';
import type { IResolvers } from '@graphql-tools/utils';

import User from './User';
import Playlist from './Playlist';
import Song from './Song';

const allResolvers: IResolvers[] = [];

const modules = [User, Playlist, Song];
modules.forEach((module) => {
  allResolvers.push(module);
});

const resolvers = mergeResolvers(allResolvers);

export default resolvers;
