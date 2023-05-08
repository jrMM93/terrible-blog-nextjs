'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export default function Providers({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
