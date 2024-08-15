import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Misato Tanno 😎",
  description: "This is Misato's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
