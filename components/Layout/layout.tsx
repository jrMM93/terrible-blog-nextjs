import type { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="m-auto flex h-screen flex-col p-3">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};
