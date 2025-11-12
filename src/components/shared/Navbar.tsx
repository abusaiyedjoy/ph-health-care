"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
            <Stethoscope size={20} />
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
          <Button className="border-2 border-[#3F3693] px-6 cursor-pointer bg-[#3F3693] hover:bg-[#342d7a] text-white rounded-lg font-semibold group relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
            <Link href="/signin">Sign In</Link>
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
                  <Button className="border-2 border-[#3F3693] px-6 cursor-pointer bg-[#3F3693] hover:bg-[#342d7a] text-white rounded-lg font-semibold group relative overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                    <Link href="/signin">Sign In</Link>
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
