
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

const navLinksContent = {
  es: [
    { name: "¿Quiénes Somos?", href: "#quienes-somos" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
  ],
  en: [
    { name: "Who We Are", href: "#quienes-somos" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Header({ language, setLanguage }: { language: string, setLanguage: (lang: string) => void }) {
  const navLinks = navLinksContent[language as keyof typeof navLinksContent];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="#" className="flex items-center gap-2" aria-label="CorpoTT Home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant={language === 'es' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('es')}>ES</Button>
          <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="#" className="mb-4">
                    <Logo />
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
