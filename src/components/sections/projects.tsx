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

const projectData = [
  {
    title: "SBU VibeCheck – Real-Time Campus Event Platform",
    date: "Jan 2025", // Updated date from CV
    description: [
      // Updated Text from your CV (Quant/Data focus)
      "Built full-stack event aggregation platform in 36 hours (Hackathon Winner), implementing WebSocket-based real-time synchronization across clients with sub-200ms latency.",
      "Architected OAuth 2.0 dual-token flow (Auth0 for .edu verification) with server-minted anonymous JWTs for privacy-preserving sessions.",
      "Integrated Gemini 1.5 Pro with parallel function calling, parsing natural language to SQL queries via custom tool schemas, reducing query formation time by 85%.",
      "Designed stateful sentiment reporting system, broadcasting delta updates via Redis Pub/Sub to maintain real-time consistency.",
      "Deployed React SPA on Cloudflare Pages and FastAPI backend on GCP Cloud Run (auto-scaling), implementing TLS and CORS policies.",
    ],
    technologies: [
      "React", "FastAPI", "PostgreSQL", "WebSockets", "Redis", "Google Gemini", "GCP Cloud Run"
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
    <section className="w-full py-12 md:py-24">
      {/* FIX: mx-auto centers the container, px-4 handles mobile padding */}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col space-y-8 items-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full"> 
            {projectData.map((project) => (
              <Card key={project.title} className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="leading-tight">{project.title}</CardTitle>
                  <CardDescription>{project.date}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {project.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex space-x-2 pt-4">
                  {project.liveDemoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
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
    </section>
  );
};