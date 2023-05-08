import { getSession } from "~/lib/auth/nextAuth";
import { LoginButton, LogoutButton } from "./AuthButtons";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-start justify-between gap-2">
      <Link href="/" className="text-4xl font-bold text-rose-600">
        TERRIBLE BLOG.
      </Link>
      {/* @ts-expect-error Server Component */}
      <User />
    </header>
  );
};

const User = async () => {
  const session = await getSession();

  const user = session?.user;

  if (!user) {
    return <LoginButton />;
  }

  return (
    <div className="flex items-center gap-2">
      <Link href={`#`} className="text-xs text-gray-500 hover:text-black">
        {user.name}
      </Link>
      <LogoutButton />
    </div>
  );
};
