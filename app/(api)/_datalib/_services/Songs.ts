import prisma from '../_prisma/client';
import { SongInput } from '@datatypes/Song';

export default class Songs {
  // CREATE
  static async create(input: SongInput) {
    const { name } = input;
    const song = await prisma.song.create({
      data: {
        name,
      },
    });
    return song;
  }

  // READ
  static async find(id: string) {
    return prisma.song.findUnique({ where: { id } });
  }

  static async findAll() {
    return prisma.song.findMany();
  }
}
