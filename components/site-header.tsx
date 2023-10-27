"use client";

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { UserButton, useAuth, useUser } from "@clerk/nextjs"


export function SiteHeader() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  // if (!isLoaded || !userId) {
  //   return null;
  // }


  return (
    <header className="supports-backdrop-blur:bg-background/60 header sticky top-0 z-50 w-full backdrop-blur">
      <div className="container flex h-14 items-center">

        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 sm:flex md:hidden md:w-auto">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-2">

              {userId == null ? (
                  <Link href='sign-in' className='inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
                    Sign In
                  </Link>
                ) : (                  
                  <UserButton afterSignOutUrl="/sign-in" />
                )}
                    
             
              
          </nav>
        </div>
      </div>
    </header>
  )
}
