import { revalidatePath } from 'next/cache';

import prisma from '../_prisma/client';
import { PlaylistInput } from '@datatypes/Playlist';

export default class Playlists {
  // CREATE
  static async create(
    userId: string,
    input: PlaylistInput,
    revalidateCachePath: string
  ) {
    const { name } = input;
    const playlist = await prisma.playlist.create({
      data: {
        userId,
        name,
      },
    });
    revalidatePath(revalidateCachePath);
    return playlist;
  }

  // READ
  static async find(id: string) {
    return prisma.playlist.findUnique({ where: { id } });
  }

  static async findAll() {
    return prisma.playlist.findMany();
  }

  // OTHER
  static async addSong(
    playlistId: string,
    songId: string,
    revalidateCachePath: string
  ) {
    try {
      await prisma.playlistToSong.create({
        data: {
          playlistId,
          songId,
        },
      });
      revalidatePath(revalidateCachePath);
      return true;
    } catch (e) {
      return false;
    }
  }

  static async getSongs(id: string) {
    const songIds = await prisma.playlistToSong.findMany({
      where: {
        playlistId: id,
      },
      select: {
        songId: true,
      },
    });
    const songs = await prisma.song.findMany({
      where: {
        id: {
          in: songIds.map((obj) => obj.songId),
        },
      },
    });

    return songs;
  }
}
