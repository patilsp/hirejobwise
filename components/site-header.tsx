"use client";

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/registry/new-york/ui/button"
import Nav from "@/components/nav"


export function SiteHeader() {
  return (
    <header>
      <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] px-10 shadow-lg  backdrop-blur-md">
        <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
          <div className="container flex h-14 items-center ">
            <MainNav />
            <MobileNav />
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 sm:flex md:hidden md:w-auto">
                <CommandMenu />
              </div>
              <nav className="flex items-center gap-2">
                <Nav />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
