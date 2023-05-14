import Link from "next/link";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({});

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserrat.className}>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/todos">Todos</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
