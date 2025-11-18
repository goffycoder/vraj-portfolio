import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

const educationData = [
  {
    institution: "Stony Brook University",
    degree: "M.S. in Data Science",
    date: "2025 – 2027",
    location: "New York, USA",
    logo: "/SBU.webp", 
  },
  {
    institution: "Pandit Deendayal Energy University",
    degree: "B.Tech in Computer Engineering",
    date: "2022 – 2025",
    location: "India",
    note: "CGPA: 8.72",
    logo: "/pdeu.jpeg", 
  },
];

export const Education = () => {
  return (
    <section className="w-full py-12 md:py-24">
      {/* FIX: Centered with mx-auto, narrowed width for readability */}
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col space-y-8 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary text-center">
            Education
          </h2>
          <div className="flex flex-col space-y-6 w-full">
            {educationData.map((edu) => (
              <Card key={edu.institution} className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
                  {/* Logo Wrapper */}
                  <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border bg-white">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex flex-col text-center sm:text-left">
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <CardDescription className="pt-1 text-base font-medium text-foreground/80">
                      {edu.degree}
                    </CardDescription>
                    <CardDescription className="text-sm">
                      {edu.location} • {edu.date}
                    </CardDescription>
                    {edu.note && (
                      <p className="pt-2 text-sm font-semibold text-primary">
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
    </section>
  );
};