"use client";
import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/registry/new-york/ui/dropdown-menu";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full">
      <div className="relative flex">
        {session?.user ? (
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="avatar">
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className="rounded-full"
                    alt="profile"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className="bg1 absolute right-0 z-10 w-64 origin-top-right rounded-md shadow-lg">
                  <DropdownMenuLabel className="font-normal">
                    <div className="ml-1 flex gap-1 space-y-1 p-1">
                      <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-medium leading-none">
                          {session?.user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session?.user.email}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="py-1" role="none">
                    <a
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      <Link href="/create-prompt" className="dropdown_link">
                        Create Prompt
                      </Link>
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      <Link
                        href="/"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                      >
                        Dashboard
                      </Link>
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      <Link
                        href="/profile"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                      >
                        My Profile
                      </Link>
                    </a>
                    <a
                      className="dropdown_link block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Settings
                    </a>
                    <hr className="my-2" />
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="dropdown_link block px-4 py-2 text-sm text-gray-700"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => {
                signIn(provider.id);
              }}
              className="black_btn"
            >
              Sign in
            </button>
          ))
        )}
      </div>
    </nav>
  );
};

export default Nav;
