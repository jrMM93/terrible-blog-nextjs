import { Layout } from '~/components/Layout/layout';
import './globals.css';
import { Providers } from './providers';
import type { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Terrible Blog',
  description: 'Very bad blog app created by Jeremy Antoni',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
