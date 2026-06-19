import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TProvider from "@/components/prividers/TProvider";
import NavBar from "@/components/shared/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Startup Forge",
  description: "StartupForge is a platform where startup founders can publish startup ideas, build teams, and recruit collaborators to bring their ideas to life. It serves as a hub for entrepreneurs to connect, share their visions, and find like-minded individuals to join their startup journey.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white-bg dark:bg-black-bg">
        <TProvider>
          <NavBar />
          <main className="mt-16 lg:mt-22">
            {children}
          </main>
        </TProvider>
      </body>
    </html>
  );
}
