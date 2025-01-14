import { Playlist } from '@datatypes/Playlist';

export type Song = {
  id: string;
  name: string;
  playlists: Playlist[];
};

export type SongInput = {
  name: string;
};
