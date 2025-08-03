"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-r  from-blue-400 to-blue-600 text-white py-2 sticky top-0 left-0 z-50 shadow-md">
      <div className="w-full relative sm:w-[85%] mx-auto flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0 px-4">
        {/* Logo/Name */}
        <Link href="/">
          {/* <h1 className="text-2xl font-bold">SAAN Coaching<span className="hidden sm:inline"> & Training Center</span></h1> */}
          <Image src="/logo.png" width={140} height={100} alt="SAAN Coaching & Training Center" />
        </Link>

        
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & LinkProps
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {/* Wrap the Link component with proper ref forwarding */}
        <Link {...props} legacyBehavior passHref>
          <a
            ref={ref}
            className={
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-yellow-500 hover:text-white " +
              className
            }
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
