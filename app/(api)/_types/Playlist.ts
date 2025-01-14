import { User } from '@datatypes/User';
import { Song } from '@datatypes/Song';

export type Playlist = {
  id: string;
  name: string;
  user: User;
  userId: string;
  songs: Song[];
};

export type PlaylistInput = {
  name: string;
  userId: string;
};
