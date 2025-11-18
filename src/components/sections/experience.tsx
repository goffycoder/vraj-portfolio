import React from "react";

const experienceData = [
  {
    title: "FinTech Data Scientist Intern",
    company: "Flits (India)",
    date: "Feb 2025 – May 2025",
    description: [
      "Built real-time options analytics engine processing NSE/BSE tick data, implementing asyncio WebSocket client with 40% reduction in monitoring overhead.",
      "Engineered ETL pipeline parsing 170K-row instrument master file, applying SIC code mapping and outputting normalized PostgreSQL schema.",
      "Developed sector rotation tracker correlating NIFTY movements, implementing z-score normalization to identify top decile outperformers.",
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
    ],
  },
  {
    title: "International Research Intern",
    company: "AIT Brain Lab (Thailand)",
    date: "Jul 2023",
    description: [
      "Fine-tuned T5-base and FactorSum (BART-based) transformers on ParaSCI dataset, achieving 0.42 ROUGE-L score for abstractive summarization.",
      "Built Flask REST API with Celery task queue for async inference, implementing request batching to reduce P95 latency from 4.2s to 1.8s.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="w-full py-12 md:py-24" id="experience">
      {/* FIX: mx-auto centers the container, px-4 protects mobile edges */}
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col space-y-12 items-center">
          
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary text-center">
            Work Experience
          </h2>

          <div className="relative w-full">
            {/* Vertical Line */}
            <div className="absolute left-0 top-1 h-full w-0.5 bg-border ml-2"></div>

            <div className="relative flex flex-col gap-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-8 sm:pl-12">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-sm z-10"></div>
                  
                  {/* Content */}
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium text-muted-foreground mb-1 block">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-primary leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-base font-medium text-foreground mt-1">
                      {exp.company}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-muted-foreground/90">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
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