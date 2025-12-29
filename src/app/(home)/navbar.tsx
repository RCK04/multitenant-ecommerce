"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";
import { navigationItems } from "../constants/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

const NavbarItem = ({ href, label, isActive }: NavbarItemProps) => {
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
      {label}
    </Link>
  );
};

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
            items={navigationItems}
            open={isSidebarOpen}
            onOpenChange={setIsSidebarOpen}
          />

          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <NavbarItem
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
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
            className="size-10"
            aria-label="Open navigation menu"
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};
