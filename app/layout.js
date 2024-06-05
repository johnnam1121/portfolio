import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import SideBar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "John Nam portfolio website",
  charset: "UTF-8",
  keywords: "John Nam, portfolio, website",
  author: "John Nam",
  robots: "index,follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <SideBar />
      </body>
    </html>
  );
}
