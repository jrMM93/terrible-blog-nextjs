import Image from 'next/image';
import Link from 'next/link';
import type { TPost } from '~/lib/scheme/post';
import { createExcerpt } from '~/lib/utils/excerpt';
import { PostDate } from './PostDate';

type PostProps = {
  post: TPost;
};

export const Post = ({ post }: PostProps) => {
  const excerpt = createExcerpt(post.content, 20);

  return (
    <div className="m-4 box-border flex h-auto w-2/5 flex-col p-4">
      <Image
        src={post.image}
        width={700}
        height={350}
        alt="Picture of the article"
      />
      <h5 className="mt-2 pb-2 text-xl font-medium uppercase">{post.title}</h5>
      <p className="pb-2 pl-2 text-gray-400">{excerpt}</p>
      <Link className="pl-2 text-sm" href={`#`}>
        by{' '}
        <span className="text-rose-600 hover:text-rose-800">{post.author.name}</span>
      </Link>
      <div className="my-3 flex justify-between">
        <Link className=" pl-2" href={`#`}>
          <span className="bg-rose-600 p-2 text-white hover:bg-rose-800">
            {' '}
            Read more
          </span>
        </Link>
        <PostDate dateString={post.createdAt} />
      </div>
    </div>
  );
};
