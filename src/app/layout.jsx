import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Xhoraa → Xtreme Horizon Operations Research & AI Applications",
  description:
    "Nexora Technologies is a leading software development company based in Bangladesh. We specialize in providing high-quality software development services to businesses of all sizes.",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning অবশ্যই যোগ করবেন
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <ThemeProvider>
          {/* পুরো স্ক্রিন জুরে ব্যাকগ্রাউন্ড নিশ্চিত করতে flex layout */}
          <div className='flex flex-col min-h-screen bg-base-100 text-base-content'>
            <Navbar />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
