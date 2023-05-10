import type { Prisma } from '@prisma/client';
import { prisma } from './prisma';

const selectPostQuery = () =>
  ({
    id: true,
    title: true,
    content: true,
    image: true,
    slug: true,
    createdAt: true,
    updatedAt: true,
    author: {
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
      },
    },
    category: {
      select: {
        id: true,
        label: true,
      },
    },
  } satisfies Prisma.PostSelect);

export const getPosts = async (page = 0) => {
  const posts = await prisma.post.findMany({
    take: 4,
    skip: page * 4,
    // orderBy: {
    //   createdAt: 'desc',
    // },
    select: selectPostQuery(),
  });

  const fixedPosts = posts.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  }));
  // console.log(fixedPosts);
  return fixedPosts;
};
