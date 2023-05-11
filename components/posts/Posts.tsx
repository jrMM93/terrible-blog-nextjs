'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import type { TPostsPage } from '~/lib/scheme/post';
import { Post } from './Post';
import { PostsNextButton } from './PostsNextPageButton';
import { client } from '~/lib/client/client';
import { postKeys } from '~/lib/query/postQuery';
import { PostsScheme } from '~/lib/scheme/post';

const getPosts = async (signal?: AbortSignal, page = 0) =>
  client(`/posts?page=${page}`, { signal, zodSchema: PostsScheme });

const useInfinitePosts = (defaultPosts: TPostsPage) =>
  useInfiniteQuery({
    queryKey: postKeys.all,
    queryFn: async ({ signal, pageParam }) => getPosts(signal, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialData: {
      pages: [defaultPosts],
      pageParams: [0],
    },
  });

type PostsProps = {
  defaultPosts: TPostsPage;
};

export const Posts = ({ defaultPosts }: PostsProps) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfinitePosts(defaultPosts);

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <PostsNextButton
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};
