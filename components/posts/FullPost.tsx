import Image from 'next/image';
import Link from 'next/link';
import type { TPost } from '~/lib/scheme/post';
import { PostDate } from './PostDate';

type FullPostProps = {
  post: TPost;
};

export const FullPost = ({ post }: FullPostProps) => {
  return (
    <div className="m-4 box-border flex flex-col p-4">
      <Image
        src={post.image}
        width={700}
        height={400}
        alt="Picture of the article"
        priority={true}
      />
      <h5 className="mt-2 pb-2 text-xl font-medium uppercase">{post.title}</h5>
      <p className="pb-2 pl-2 text-gray-400">{post.content}</p>
      <Link className="pl-2 text-sm" href={`#`}>
        by{' '}
        <span className="text-rose-600 hover:text-rose-800">{post.author.name}</span>
      </Link>
      <div className="my-3 flex justify-between">
        <PostDate dateString={post.createdAt} />
      </div>
    </div>
  );
};
