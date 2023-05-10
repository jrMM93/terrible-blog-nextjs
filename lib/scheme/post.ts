import { z } from 'zod';

const PostScheme = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  image: z.string(),
  slug: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  author: z.object({
    id: z.string(),
    name: z.string().nullable(),
    image: z.string().nullable(),
    email: z.string().email().nullable(),
  }),
  category: z.object({
    id: z.string(),
    label: z.string(),
  }),
});

export const PostsScheme = z.object({
  posts: z.array(PostScheme),
  nextPage: z.number().optional().nullable(),
});

export type TPostsPage = z.infer<typeof PostsScheme>;
export type TPosts = z.infer<typeof PostsScheme>['posts'];
export type TPost = TPosts[number];
