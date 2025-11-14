import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";

// ... projectData array ...
const projectData = [
  {
    title: "SBU VibeCheck – Real-Time Campus Event Platform",
    date: "November 2025", 
    description: [
      "Built full-stack event platform in 36 hours, implementing WebSocket-based real-time state synchronization (sub-200ms latency).",
      "Architected OAuth 2.0 dual-token flow (Auth0 for .edu verification) with server-minted anonymous JWTs for privacy-preserving sessions.",
      "Integrated Gemini 1.5 Pro with parallel function calling, parsing natural language to SQL queries, reducing query formation time by 85%.",
      "Deployed React SPA on Cloudflare Pages and FastAPI backend on GCP Cloud Run (auto-scaling), with TLS and CORS for production security.",
    ],
    technologies: [
      "React", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "WebSockets", "Google Gemini", "Auth0", "GCP",
    ],
    liveDemoUrl: "https://sbu-vibecheck.pages.dev/",
    githubUrl: "https://github.com/goffycoder/sbu-vibecheck",
  },
  {
    title: "VociTrade - Voice-Activated Stock Trading",
    date: "Sep 2024",
    description: [
      "Developed a voice-activated trading interface for a Human-Computer Interaction class project.",
      "Utilized the Dhan API for real-time stock data and order execution.",
      "Implemented a custom voice recognition module to parse commands for buying, selling, and querying market data.",
    ],
    technologies: ["Python", "FastAPI", "Dhan API", "SpeechRecognition.js"],
    liveDemoUrl: null,
    githubUrl: "https://github.com/goffycoder/vocitrade",
  },
];


export const Projects = () => {
  return (
    // ---- ADD THIS WRAPPER ----
    <div className="container max-w-5xl">
      <div className="flex flex-col space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectData.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex space-x-2">
                {project.liveDemoUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="ghost" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};