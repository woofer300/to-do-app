import Link from "next/link";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | woo-dos",
    default: "woo-dos",
  },
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
