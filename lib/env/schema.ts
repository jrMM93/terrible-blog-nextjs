import { z } from 'zod';

// Backend environment variables
export const serverSchema = z.object({
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

// Frontend environment variables
export const clientSchema = z.object({});

type ClientScheme = {
  [k in keyof z.infer<typeof clientSchema>]:
    | z.infer<typeof clientSchema>[k]
    | undefined;
};

export const clientEnv: ClientScheme = {};
