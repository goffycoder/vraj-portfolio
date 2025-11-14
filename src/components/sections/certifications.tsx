import React from "react";
import { Badge } from "@/components/ui/badge";

const certificationData = [
  "AWS Solutions Architect (Dec 2025)",
  "Alteryx Designer Core (2027)",
  "NLP Program, AIT (2023)",
];

export const Certifications = () => {
  return (
    <div className="container max-w-5xl">
      {/* --- UPDATED: Added 'items-center' --- */}
      <div className="flex flex-col space-y-8 items-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center">
          Certifications
        </h2>
        {/* --- UPDATED: Centered the badges --- */}
        <div className="flex flex-wrap gap-2 justify-center">
          {certificationData.map((cert) => (
            <Badge key={cert} variant="outline" className="text-sm font-medium">
              {cert}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};