import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent, // <-- Import CardContent
} from "@/components/ui/card";
import Image from "next/image"; // <-- Import Image

// --- Updated Education Data ---
const educationData = [
  {
    institution: "Stony Brook University",
    degree: "M.S. in Data Science",
    date: "2025 – 2027",
    location: "New York, USA",
    logo: "/SBU.webp", // <-- Path from /public folder
  },
  {
    institution: "Pandit Deendayal Energy University",
    degree: "B.Tech in Computer Engineering",
    date: "2022 – 2025",
    location: "India",
    note: "CGPA: 8.72",
    logo: "/pdeu.jpeg", // <-- Path from /public folder
  },
];

export const Education = () => {
  return (
    <div className="container max-w-5xl">
      {/* --- ADDED: Centering wrapper --- */}
      <div className="flex flex-col space-y-8 items-center">
        
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center">
          Education
        </h2>

        {/* --- ADDED: Centered column for cards --- */}
        <div className="flex flex-col space-y-6 w-full max-w-3xl">
          {educationData.map((edu) => (
            <Card key={edu.institution}>
              {/* --- UPDATED: New layout with CardContent --- */}
              <CardContent className="flex items-center gap-6 p-6">
                {/* Logo */}
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    fill
                    className="object-contain" // 'object-contain' keeps aspect ratio
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <CardTitle>{edu.institution}</CardTitle>
                  <CardDescription className="pt-1">
                    {edu.degree}
                  </CardDescription>
                  <CardDescription className="text-xs">
                    {edu.location} | {edu.date}
                  </CardDescription>
                  {edu.note && (
                    <p className="pt-2 text-sm font-semibold text-muted-foreground">
                      {edu.note}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};