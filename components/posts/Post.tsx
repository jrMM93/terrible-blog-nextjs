import Link from 'next/link';
import type { TPost } from '~/lib/scheme/post';

type PostProps = {
  post: TPost;
};

export const Post = ({ post }: PostProps) => {
  return (
    <div className="flex h-1/2 w-1/2 flex-col p-5">
      <h5 className="pb-4 text-xl font-medium uppercase">{post.title}</h5>
      <p className="pb-2 pl-2 text-gray-400">{post.content}</p>
      <Link className="pl-2" href={`#`}>
        by{' '}
        <span className="text-rose-600 hover:text-rose-800">{post.author.name}</span>
      </Link>
      <Link className="mt-4 pl-2" href={`#`}>
        <span className="bg-rose-600 p-2 text-white hover:bg-rose-800">
          {' '}
          Read more
        </span>
      </Link>
    </div>
  );
};
