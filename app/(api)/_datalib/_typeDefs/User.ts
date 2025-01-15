import gql from 'graphql-tag';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    playlists: [Playlist]
  }

  input UserInput {
    name: String!
  }

  type Query {
    user(id: ID!): User
    users(ids: [ID]!): [User]
  }

  type Mutation {
    createUser(input: UserInput!, revalidatePath: String!): User
    updateUser(id: ID!, input: UserInput!, revalidatePath: String!): User
    deleteUser(id: ID!, revalidatePath: String!): Boolean
  }
`;
export default typeDefs;
