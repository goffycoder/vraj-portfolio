import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const experienceData = [
  {
    title: "FinTech Data Scientist Intern",
    company: "Flits (India)",
    date: "Feb 2025 – May 2025",
    // UPDATED: .jpeg extensions
    logo: "/flits-logo.jpeg", 
    projectImage: "/flits-architecture.png",
    imageCaption: "Real-time Options Analytics Engine Architecture",
    description: [
      "Built real-time options analytics engine processing NSE/BSE tick data, implementing asyncio WebSocket client with 40% reduction in monitoring overhead.",
      "Engineered ETL pipeline parsing 170K-row instrument master file, applying SIC code mapping and outputting normalized PostgreSQL schema.",
      "Developed sector rotation tracker correlating NIFTY movements, implementing z-score normalization to identify top decile outperformers.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "YHONK – Noise Pollution Mitigation",
    date: "May 2024 – Jun 2024",
    // UPDATED: .jpeg extensions
    logo: "/yhonk-logo.jpeg",
    projectImage: "/yhonk-heatmap.jpeg",
    imageCaption: "Geospatial Analysis of 2.6M Honking Events",
    description: [
      "Built distributed web scraping pipeline (Selenium Grid) with rotating proxies, extracting 50K+ school records with exponential backoff retry logic.",
      "Executed geospatial analysis on 2.6M GPS-tagged honking events, implementing PostGIS queries and R-tree indexing to compute violation hotspots.",
      "Applied ARIMA time-series decomposition on hourly violation counts, detecting 171% weekday anomaly and 130% seasonality.",
    ],
  },
  {
    title: "International Research Intern",
    company: "AIT Brain Lab (Thailand)",
    date: "Jul 2023",
    // UPDATED: .jpeg extension (Assuming this is also jpeg based on your request)
    logo: "/ait-logo.jpeg",
    projectImage: null,
    description: [
      "Fine-tuned T5-base and FactorSum (BART-based) transformers on ParaSCI dataset, achieving 0.42 ROUGE-L score for abstractive summarization.",
      "Built Flask REST API with Celery task queue for async inference, implementing request batching to reduce P95 latency from 4.2s to 1.8s.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="w-full py-12 md:py-24" id="experience">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col space-y-12 items-center">
          
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary text-center">
            Work Experience
          </h2>

          <div className="relative w-full">
            {/* Vertical Line (Adjusted for Mobile: left-4) */}
            <div className="absolute left-4 sm:left-8 top-2 h-full w-0.5 bg-border"></div>

            <div className="relative flex flex-col gap-12">
              {experienceData.map((exp, index) => (
                // Padding Left (Adjusted for Mobile: pl-12 vs pl-20)
                <div key={index} className="relative pl-12 sm:pl-20">
                  
                  {/* Timeline Dot (Adjusted for Mobile: left-2) */}
                  <div className="absolute left-2 sm:left-6 top-2 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-sm z-10"></div>
                  
                  {/* Content */}
                  <div className="flex flex-col text-left">
                    
                    {/* Header: Stacked on mobile (flex-col), Row on desktop (sm:flex-row) */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      {exp.logo && (
                        <div className="relative h-12 w-12 flex-shrink-0 rounded-md border bg-white overflow-hidden p-1">
                           <Image 
                             src={exp.logo} 
                             alt={`${exp.company} logo`}
                             fill
                             className="object-contain"
                           />
                        </div>
                      )}
                      
                      <div>
                        <h3 className="text-xl font-bold text-primary leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-base font-medium text-foreground">
                          {exp.company}
                        </p>
                        <span className="text-sm font-medium text-muted-foreground block mt-1">
                          {exp.date}
                        </span>
                      </div>
                    </div>

                    {/* Description Bullets */}
                    <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-muted-foreground/90">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* PROJECT VISUAL EVIDENCE */}
                    {exp.projectImage && (
                      <div className="mt-6 w-full max-w-md">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="group relative cursor-pointer overflow-hidden rounded-lg border bg-muted/30 transition-all hover:shadow-md">
                              
                              {/* 
                                 MOBILE OPTIMIZED PREVIEW:
                                 aspect-video: Forces a perfect rectangle on all screens
                                 object-cover: Fills the rectangle neatly
                              */}
                              <div className="relative aspect-video w-full">
                                <Image
                                  src={exp.projectImage}
                                  alt={exp.imageCaption || "Project evidence"}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                
                                {/* Overlay hint on hover */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                                   <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/60 text-white px-3 py-1 rounded-full flex items-center gap-2 text-xs font-medium backdrop-blur-sm">
                                     <ZoomIn className="h-3 w-3" />
                                     View Full Diagram
                                   </div>
                                </div>
                              </div>

                              {/* Caption Bar */}
                              {exp.imageCaption && (
                                <div className="border-t bg-card/50 px-3 py-2">
                                  <p className="text-xs font-medium text-muted-foreground truncate">
                                    📷 {exp.imageCaption}
                                  </p>
                                </div>
                              )}
                            </div>
                          </DialogTrigger>
                          
                          {/* 
                              FULL VIEW POPUP 
                              - max-w-[95vw]: Ensures it doesn't touch screen edges on mobile
                          */}
                          <DialogContent className="max-w-[95vw] md:max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                            <div className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center pointer-events-none">
                               {/* Accessibility Title */}
                               <DialogTitle className="sr-only">{exp.imageCaption}</DialogTitle>
                               
                               <div className="relative w-full h-full pointer-events-auto">
                                <Image
                                  src={exp.projectImage}
                                  alt="Full view"
                                  fill
                                  className="object-contain" // Shows the WHOLE image without cropping
                                  priority
                                />
                               </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};