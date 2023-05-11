import { FullPost } from '~/components/posts/FullPost';
import { getpost } from '~/db/posts';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getpost(params.slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return <FullPost post={post} />;
}
