import { getPosts } from '~/db/posts';
import { PostsLayout } from '~/components/posts/Layout';
import { Posts } from '~/components/posts/Posts';

export default async function MainPage() {
  const defaultPosts = await getPosts(0);

  return (
    <PostsLayout>
      <Posts defaultPosts={{ posts: defaultPosts, nextPage: 1 }} />
    </PostsLayout>
  );
}
