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

        <div className="flex items-center gap-5">
        <Button asChild className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmZB3NxMa3Xabtg1K3Pq0wDAkfEh0-4QB1hGVjCFZc8Wdi6w/viewform?usp=sharing">Enroll Now</a>
  </Button>

          {/* Services Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-500 hover:to-yellow-600">
                  Courses
                </NavigationMenuTrigger>
                
                
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Us */}
          <Button asChild className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-yellow-500  text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ">
            <Link href="#contactus">Contact Us</Link>
          </Button>
         
         
        </div>
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
