'use client';

import { signIn, signOut } from 'next-auth/react';

export const LoginButton = () => {
  return (
    <button
      onClick={async () => signIn()}
      className="text-rose-600 hover:text-rose-800"
    >
      Login
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={async () => signOut()}
      className="text-rose-600 hover:text-rose-800"
    >
      Logout
    </button>
  );
};
