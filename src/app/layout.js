import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexora Technologies",
  icons: {
    icon: "/Nexora(1).png", 
  },
};

export default function RootLayout({ children }) {
  return (
  
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
        
          <div className="flex flex-col min-h-screen bg-base-100 text-base-content">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}