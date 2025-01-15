import gql from 'graphql-tag';

const typeDefs = gql`
  type Playlist {
    id: ID!
    name: String!
    user: User
    userId: ID
    songs: [Song]
  }

  input PlaylistInput {
    name: String!
  }

  type Query {
    playlist(id: ID!): Playlist
    playlists: [Playlist]
  }

  type Mutation {
    createPlaylist(
      userId: ID!
      input: PlaylistInput!
      revalidatePath: String!
    ): Playlist
    addSong(playlistId: ID!, songId: ID!, revalidatePath: String!): Boolean
  }
`;
export default typeDefs;
