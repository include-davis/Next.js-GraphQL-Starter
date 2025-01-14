import Playlists from '../_services/Playlists';
import Users from '../_services/Users';
import { Playlist, PlaylistInput } from '@datatypes/Playlist';

const resolvers = {
  Playlist: {
    user: (parent: Playlist) => Users.find(parent.userId),
    songs: (parent: Playlist) => Playlists.getSongs(parent.id),
  },
  Query: {
    playlist: (_: never, args: { id: string }) => Playlists.find(args.id),
    playlists: () => Playlists.findAll(),
  },
  Mutation: {
    createPlaylist: (
      _: never,
      args: { userId: string; input: PlaylistInput }
    ) => Playlists.create(args.userId, args.input),
    addSong: (_: never, args: { playlistId: string; songId: string }) =>
      Playlists.addSong(args.playlistId, args.songId),
  },
};
export default resolvers;
