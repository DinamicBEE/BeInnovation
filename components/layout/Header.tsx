"use client"

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { US, MX } from 'country-flag-icons/react/3x2';
import { MdLanguage, MdHome, MdInfo, MdWork, MdBusiness, MdContactMail, MdMenu, MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";
import "./layout.css";

const navItems = [
  { href: "/home", label: "Home", icon: MdHome },
  { href: "/about", label: "About", icon: MdInfo },
  { href: "/services", label: "Services", icon: MdWork },
  { href: "/industries", label: "Industries", icon: MdBusiness },
  { href: "/contact", label: "Contact", icon: MdContactMail },
];

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">

          <Link href="/home" className="hidden sm:block text-2xl font-bold">
            <Image src="/BeInnovation_3.png" alt="Be Innovate" width={56} height={48} priority />
          </Link>

          <Link href="/home" className="block sm:hidden">
            <Image src="/BeInnovation_3.png" alt="Be Innovate" width={40} height={34} priority />
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex space-x-2 lg:space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} passHref>
                      <NavigationMenuLink
                        className={cn(
                          "px-3 py-2 text-sm lg:text-base transition-colors hover:text-[#7cb44c]",
                          isActive
                            ? "text-[#7cb44c] font-semibold border-b-2 border-[#7cb44c]"
                            : "text-gray-600"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <MdLanguage className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-lg">
                <DropdownMenuItem>
                  <US title="United States" className="mr-2 h-4 w-4" />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MX title="México" className="mr-2 h-4 w-4" />
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-[#7cb44c]/10 text-[#7cb44c] font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            <div className="border-t border-gray-200 pt-3 mt-2">
              <div className="flex gap-2 px-4 py-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <US className="h-4 w-4" />
                  English
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <MX className="h-4 w-4" />
                  Español
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}