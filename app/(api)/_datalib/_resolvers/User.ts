import Users from '../_services/Users';
import { User, UserInput } from '@datatypes/User';

const resolvers = {
  User: {
    playlists: (parent: User) => Users.getPlaylists(parent.id),
  },
  Query: {
    user: (_: never, args: { id: string }) => Users.find(args.id),
    users: (_: never, args: { ids: string[] }) => Users.findMany(args.ids),
  },
  Mutation: {
    createUser: (
      _: never,
      args: { input: UserInput; revalidatePath: string }
    ) => Users.create(args.input, args.revalidatePath),
    updateUser: (
      _: never,
      args: { id: string; input: UserInput; revalidatePath: string }
    ) => Users.update(args.id, args.input, args.revalidatePath),
    deleteUser: (_: never, args: { id: string; revalidatePath: string }) =>
      Users.delete(args.id, args.revalidatePath),
  },
};

export default resolvers;
