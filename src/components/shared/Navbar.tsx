"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hospital, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Find Doctor", href: "#ai-doctor" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#3F3693] text-white">
            <Hospital size={18} />
          </div>
          <span className="text-lg font-semibold text-gray-900">CareNest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-[#3F3693] ${
                pathname === link.href ? "text-[#3F3693] font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="border-2 border-[#3F3693] text-[#3F3693] hover:bg-[#3F3693]/10 font-semibold"
            asChild
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button
            asChild
            className="bg-[#3F3693] hover:bg-[#352e7a] text-white font-semibold"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-[#3F3693]"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95 backdrop-blur-md">
              <div className="flex flex-col gap-6 mt-10 text-gray-800">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium hover:text-[#3F3693] transition-colors ${
                      pathname === link.href ? "text-[#3F3693]" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="border-2 border-[#3F3693] text-[#3F3693] hover:bg-[#3F3693]/10 font-semibold w-full"
                    asChild
                  >
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#3F3693] hover:bg-[#352e7a] text-white font-semibold w-full"
                  >
                    <Link href="/get-started">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
