import { mergeTypeDefs } from '@graphql-tools/merge';
import type { DocumentNode } from 'graphql';

import User from './User';
import Playlist from './Playlist';
import Song from './Song';

const allTypeDefs: DocumentNode[] = [];

const modules = [User, Playlist, Song];
modules.forEach((module) => {
  allTypeDefs.push(module);
});

const typeDefs = mergeTypeDefs(allTypeDefs);

export default typeDefs;
