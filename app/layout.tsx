import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Nicolas Murray ",
  description: "Nicolas Murray Portfolio",
  icons: {
    icon: "/favicon.png",
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body className={montserrat.className} >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="px-10 md:px-20 m-auto max-w-[1600px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}