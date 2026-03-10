import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../navigation-menu";
import { MdLanguage } from "react-icons/md";
import { Button } from "../button";
import Image from "next/image";
import "./layout.css";


export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/BeInnovation_3.png" alt="Be Innovate" width={56} height={48} />
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="px-4 py-2 text-base">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" passHref>
                <NavigationMenuLink className="px-4 py-2 text-base">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" passHref>
                <NavigationMenuLink className="px-4 py-2 text-base">
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/industries" passHref>
                <NavigationMenuLink className="px-4 py-2 text-base">
                  Industries
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" passHref>
                <NavigationMenuLink className="px-4 py-2 text-base">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button variant="default">
          <MdLanguage />
        </Button>
      </div>
    </header>
  )
}