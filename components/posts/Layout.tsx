import type { PropsWithChildren } from 'react';

export const PostsLayout = ({ children }: PropsWithChildren) => {
  return <div className="flex h-screen w-full flex-wrap">{children}</div>;
};
