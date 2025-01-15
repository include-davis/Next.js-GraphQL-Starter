import { revalidatePath } from 'next/cache';

import { UserInput } from '@datatypes/User';
import prisma from '../_prisma/client';

export default class Users {
  // CREATE
  static async create(input: UserInput, revalidateCachePath: string) {
    const { name } = input;
    const user = await prisma.user.create({
      data: {
        name,
      },
    });
    revalidatePath(revalidateCachePath);
    return user;
  }

  // READ
  static async find(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  static async findMany(ids: string[]) {
    if (ids.length === 0) return prisma.user.findMany();
    return prisma.user.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  // UDPATE
  static async update(
    id: string,
    input: UserInput,
    revalidateCachePath: string
  ) {
    try {
      const user = await prisma.user.update({
        where: {
          id,
        },
        data: input,
      });
      revalidatePath(revalidateCachePath);
      return user;
    } catch (e) {
      return null;
    }
  }

  // DELETE
  static async delete(id: string, revalidateCachePath: string) {
    try {
      await prisma.user.delete({
        where: {
          id,
        },
      });
      revalidatePath(revalidateCachePath);
      return true;
    } catch (e) {
      return false;
    }
  }

  // OTHER
  static async getPlaylists(userId: string) {
    return prisma.playlist.findMany({
      where: {
        userId,
      },
    });
  }
}
