import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import SessionProvider from "@/components/Provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        
      <body
        className={`overflow-x-hidden overflow-y-scroll bg-[#030014] color: #fff`}
      >
        
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
                <div className="flex-1 py-10">{children}</div>
              <SiteFooter />
            </div>
           
        </body>
      </html>
      </SessionProvider>
    </>
  )
}
