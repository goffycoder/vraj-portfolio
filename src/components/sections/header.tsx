import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"; // <-- IMPORT TOGGLE

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-5xl mx-auto px-4 items-center justify-between">
        
        {/* Left: Name */}
        <a href="#hero" className="flex items-center text-lg font-bold tracking-tight">
          Vraj Patel
        </a>

        {/* Right: Nav + Toggle */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="sm" asChild>
                <a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary">
                  {link.name}
                </a>
              </Button>
            ))}
          </nav>
          
          {/* The Dark Mode Toggle Button */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};