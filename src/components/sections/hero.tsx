import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image"; 

const socialLinks = [
  { name: "GitHub", href: "https://github.com/goffycoder", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vraj-patel-b705a5240", icon: Linkedin },
  { name: "Email", href: "mailto:vjpatel4423@gmail.com", icon: Mail },
];

export const Hero = () => {
  return (
    <div className="container max-w-5xl">
      {/* UPDATED: Center on mobile, justify-between on desktop */}
      <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
        
        {/* UPDATED: Center text on mobile, left-align on desktop */}
        <div className="flex flex-col space-y-6 items-center sm:items-start">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center sm:text-left">
            Vraj Patel
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-center sm:text-left">
            M.S. in Data Science student at Stony Brook University.
            <br />
            Passionate about quantitative finance, machine learning, and building scalable
            data-driven applications.
          </p>
          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <Image
            src="/IMG_3677.jpg" 
            alt="Vraj Patel"
            width={160} 
            height={160}
            className="rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};