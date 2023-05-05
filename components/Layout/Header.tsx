import React from "react";
import { getSession } from "~/lib/auth/nextAuth";
import { LoginButton, LogoutButton } from "./AuthButtons";

export const Header = async () => {
  const session = await getSession();

  return (
    <header>
      <h4>Terrible Blog</h4>
      {session?.user ? (
        <div>
          {session.user.name}
          <LogoutButton />
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </header>
  );
};
