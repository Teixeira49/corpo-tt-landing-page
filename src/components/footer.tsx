
import { Logo } from "@/components/logo";
import { Mail } from "lucide-react";
import Link from "next/link";

const content = {
  es: {
    rights: "Todos los derechos reservados.",
  },
  en: {
    rights: "All rights reserved.",
  }
}

export function Footer({ language }: { language: string }) {
  const c = content[language as keyof typeof content];
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="#" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} CorpoTT Services. {c.rights}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2 text-sm">
            <a href="mailto:corpottservices@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>corpottservices@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
