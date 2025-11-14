import React from "react";
import { Button } from "@/components/ui/button";

// Define your navigation links here
// The 'href' must match the 'id' of your <section> tags in page.tsx
const navLinks = [
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Education", 
    href: "#education",
  },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* This container div matches the layout of your page.tsx.
        - 'max-w-3xl': Ensures content is centered and matches your page's max-width.
        - 'h-14': Gives the header a standard height.
        - 'flex items-center justify-between': A flexbox container to push 
          your name to the left and links to the right.
      */}
      <div className="container flex h-14 max-w-5xl items-center justify-between">
        
        {/* Left Side: Your Name (links to the top) */}
        <a
          href="#hero"
          className="flex items-center text-lg font-semibold"
        >
          Vraj Patel
        </a>

        {/* Right Side: Navigation Links */}
        <nav className="flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button key={link.name} variant="ghost" asChild>
              {/* The 'asChild' prop tells the Button to pass its styles 
                down to its child, which is our <a> tag.
                This is the correct way to make a link look like a shadcn button.
              */}
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};