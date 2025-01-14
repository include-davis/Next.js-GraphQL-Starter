import { Playlist } from '@datatypes/Playlist';

export type User = {
  id: string;
  name: string;
  playlists: Playlist[];
};

export type UserInput = {
  name: string;
};
