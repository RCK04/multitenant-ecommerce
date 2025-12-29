"use client";

import { useState, type ReactNode } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-1.5 text-sm font-medium transition-all rounded-md",
        isActive
          ? "bg-secondary text-secondary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      )}
    >
      {children}
    </Link>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            {/* Logo no futuro para adicionar*/}
            {/* <div className="size-8 bg-primary rounded-lg shadow-sm flex items-center justify-center">
              <div className="size-3 bg-primary-foreground rounded-full" />
            </div> */}
            <span
              className={cn(
                "text-xl font-bold tracking-tight",
                poppins.className
              )}
            >
              sellix
            </span>
          </Link>

          <NavbarSidebar 
            items={navbarItems}
            open={isSidebarOpen}
            onOpenChange={setIsSidebarOpen}
          />

          <nav className="hidden md:flex items-center gap-1">
            {navbarItems.map((item) => (
              <NavbarItem
                key={item.href}
                href={item.href}
                isActive={pathname === item.href}
              >
                {item.children}
              </NavbarItem>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
          <Button size="sm" className="px-5 shadow-sm" asChild>
            <Link href="/sign-up">Start selling</Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center justify-center">
          <Button 
            variant="ghost"
            className="size-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};
