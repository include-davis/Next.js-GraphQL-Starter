export type RevalidationKey = 'users' | 'playlists' | 'songs';

const revalidationPaths = {
  users: ['/'],
  playlists: ['/'],
  songs: ['/'],
};

export default revalidationPaths;
