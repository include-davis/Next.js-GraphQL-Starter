import Songs from '../_services/Songs';
import { SongInput } from '@datatypes/Song';

const resolvers = {
  Song: {
    playlists: () => null,
  },
  Query: {
    song: (_: never, args: { id: string }) => Songs.find(args.id),
    songs: () => Songs.findAll(),
  },
  Mutation: {
    createSong: (_: never, args: { input: SongInput }) =>
      Songs.create(args.input),
  },
};
export default resolvers;
