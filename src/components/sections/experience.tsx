import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const experienceData = [
  // ... (your experience data is correct) ...
    {
    title: "FinTech Data Scientist Intern",
    company: "Flits (India)",
    date: "Feb 2025 – May 2025",
    description: [
      "Built real-time options analytics engine processing NSE/BSE tick data, implementing asyncio WebSocket client with 40% reduction in monitoring overhead.",
      "Engineered ETL pipeline parsing 170K-row instrument master file, applying SIC code mapping and outputting normalized PostgreSQL schema.",
      "Developed sector rotation tracker correlating NIFTY movements, implementing z-score normalization to identify top decile outperformers.",
      "Deployed Streamlit + Plotly dashboards with 30s polling, implementing request throttling to maintain 100% uptime against API rate limits.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "YHONK – Noise Pollution Mitigation (India)",
    date: "May 2024 – Jun 2024",
    description: [
      "Built distributed web scraping pipeline (Selenium Grid) with rotating proxies, extracting 50K+ school records with exponential backoff retry logic.",
      "Executed geospatial analysis on 2.6M GPS-tagged honking events, implementing PostGIS queries and R-tree indexing to compute violation hotspots.",
      "Applied ARIMA time-series decomposition on hourly violation counts, detecting 171% weekday anomaly and 130% seasonality.",
      "Automated violation detection with Python + PostGIS pipeline, implementing spatial joins (ST_Within) to flag vehicles in restricted zones.",
    ],
  },
  {
    title: "International Research Intern",
    company: "AIT Brain Lab (Thailand)",
    date: "Jul 2023",
    description: [
      "Fine-tuned T5-base and FactorSum (BART-based) transformers on ParaSCI dataset, achieving 0.42 ROUGE-L score for abstractive summarization.",
      "Built Flask REST API with Celery task queue for async inference, implementing request batching to reduce P95 latency from 4.2s to 1.8s.",
      "Integrated SpaCy NER and NLTK preprocessing pipelines, handling LaTeX rendering (MathJax) and PDF extraction (PyPDF2/Tesseract).",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="container max-w-5xl">
      {/* --- UPDATED: Added 'items-center' --- */}
      <div className="flex flex-col space-y-8 items-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center">
          Experience
        </h2>
        {/* --- UPDATED: Centered the card column --- */}
        <div className="flex flex-col space-y-6 w-full max-w-3xl">
          {experienceData.map((exp) => (
            <Card key={exp.title + exp.company}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription className="pt-1">
                  {exp.company} | {exp.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};