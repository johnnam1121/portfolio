import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import SideBar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Nam Portfolio",
  description: "John Nam portfolio website",
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
