import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/goffycoder",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vraj-patel-b705a5240",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:vjpatel4423@gmail.com",
    icon: Mail,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-background border-t mt-auto">
      {/* FIX: mx-auto centers the footer content */}
      <div className="container max-w-5xl mx-auto px-4 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Vraj Patel. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:bg-primary/10"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};