import { getSession } from '~/lib/auth/nextAuth';
import { LoginButton, LogoutButton } from './AuthButtons';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <div className="flex h-full w-sidebar flex-col bg-slate-100 p-4">
      {/* @ts-expect-error Server Component */}
      <User />
      <Link className="p-4 text-xl text-rose-600 hover:text-rose-800" href={'#'}>
        Categories
      </Link>
      <Link className="p-4 text-xl text-rose-600 hover:text-rose-800" href={'#'}>
        New Article
      </Link>
    </div>
  );
};

const User = async () => {
  const session = await getSession();

  const user = session?.user;

  if (!user) {
    return (
      <div className="p-4">
        <LoginButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      <div>
        <span className="text-xs text-gray-500">Welcome </span>
        <Link href={`#`} className=" text-xs text-gray-500 hover:text-black">
          {user.name}
        </Link>
      </div>
      <LogoutButton />
    </div>
  );
};
