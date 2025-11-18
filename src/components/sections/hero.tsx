import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/goffycoder", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vraj-patel-b705a5240", icon: Linkedin },
  { name: "Email", href: "mailto:vjpatel4423@gmail.com", icon: Mail },
];

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center bg-background">
      {/* FIX: mx-auto and px-4 for perfect alignment */}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* --- LEFT: Text Content --- */}
          <div className="flex flex-col space-y-6 text-center md:text-left flex-1">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Vraj Patel
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                Data Science & Quantitative Finance
              </h2>
            </div>

            {/* PITCH: Adapted from your resume to hit Quant keywords */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              M.S. Data Science student at Stony Brook University. 
              I build <strong>low-latency financial analytics engines</strong>, 
              <strong>distributed ML pipelines</strong>, and scalable data-driven applications. 
              Experienced in optimizing WebSocket streams and implementing real-time options strategies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {/* Resume Button */}
              <Button className="gap-2 min-w-[140px]" asChild>
                  {/* The path starts with a slash / which represents the public folder */}
                  <a href="/Vraj_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Download CV
                  </a>
              </Button>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <Button key={link.name} variant="outline" size="icon" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: Single Professional Image --- */}
          <div className="relative flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Decorative blurred background effect behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
            
            <Image
              src="/IMG_3677.jpg" // Make sure this is your best professional shot
              alt="Vraj Patel"
              fill
              className="rounded-2xl object-cover shadow-2xl border-2 border-muted"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};