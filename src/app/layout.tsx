import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Advanced Video Browsing System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextThemesProvider
          attribute="class"
          value={{ light: "light", dark: "dark" }}
          defaultTheme="system"
          enableSystem
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
