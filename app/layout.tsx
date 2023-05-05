import "./globals.css";
import Providers from "./providers";
import { Header } from "~/components/Layout/Header";

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
          {/* @ts-expect-error Server Component */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
