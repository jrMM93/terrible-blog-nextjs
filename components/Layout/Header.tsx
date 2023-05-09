import Link from 'next/link';

export const Header = () => {
  return (
    <header className="mb-4 flex items-start justify-between gap-2">
      <Link href="/" className="w-6/12 text-4xl font-bold text-rose-600 md:w-auto">
        TERRIBLE BLOG.
      </Link>
    </header>
  );
};
