import { Layout } from "~/components/Layout/layout";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Terrible Blog",
  description: "Very bad blog app created by Jeremy Antoni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
