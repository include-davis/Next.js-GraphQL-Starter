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
      args: { userId: string; input: PlaylistInput; revalidatePath: string }
    ) => Playlists.create(args.userId, args.input, args.revalidatePath),
    addSong: (
      _: never,
      args: { playlistId: string; songId: string; revalidatePath: string }
    ) => Playlists.addSong(args.playlistId, args.songId, args.revalidatePath),
  },
};
export default resolvers;
