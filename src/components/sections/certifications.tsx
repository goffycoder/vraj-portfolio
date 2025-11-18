import React from "react";
import { Badge } from "@/components/ui/badge";

const certificationData = [
  "AWS Solutions Architect (Dec 2025)",
  "Alteryx Designer Core (2027)",
  "NLP Program, AIT (2023)",
];

export const Certifications = () => {
  return (
    <section className="w-full py-12">
      {/* FIX: mx-auto centers the container */}
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col space-y-8 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary text-center">
            Certifications
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {certificationData.map((cert) => (
              <Badge 
                key={cert} 
                variant="secondary" 
                className="text-sm font-medium px-4 py-1"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};