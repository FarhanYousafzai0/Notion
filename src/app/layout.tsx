// app/layout.tsx or app/layout.jsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";



// Load the font
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Optional: Mono font if you're using it
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Optional: Page metadata
export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="font-sans">
          <Header/>
         <div className="flex min-h-screen">
         <Sidebar/>
          <div className="flex-1 p-4 bg-blue-600 ">
            
          {children}
          </div>
         </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
