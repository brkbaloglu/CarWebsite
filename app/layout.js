import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./header/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
