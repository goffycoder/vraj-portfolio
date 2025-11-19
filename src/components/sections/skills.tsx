"use client";
import React from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiFastapi, SiNodedotjs,
  SiStreamlit, SiAmazon, SiGooglecloud, SiDocker, SiGit, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiTensorflow, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiTableau, SiApachespark, SiApachekafka,
  SiApacheairflow, SiHtml5, SiCss3, SiScala, SiKubernetes, SiLinux,
  SiR, SiPlotly, SiGraphql, SiNextdotjs, SiTailwindcss
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Skill = {
  name: string;
  icon: React.ReactElement;
  color?: string; 
};

type MarqueeRowProps = {
  items: Skill[]; 
  reverse?: boolean;
};

const skillsData: Skill[] = [
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  
  // No Color = Automatically adapts to Black (Light Mode) / White (Dark Mode)
  { name: "Next.js", icon: <SiNextdotjs /> }, 
  
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
  { name: "GCP", icon: <SiGooglecloud />, color: "#4285F4" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  
  // Linux is usually black/white. Auto-adapt.
  { name: "Linux", icon: <SiLinux /> }, 
  
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
  { name: "scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
  
  // Pandas is dark blue. On dark mode it's hard to see. 
  // Removing color lets it be White on Dark Mode (Cleanest look).
  { name: "Pandas", icon: <SiPandas /> }, 
  
  { name: "NumPy", icon: <SiNumpy />, color: "#013243" }, 
  { name: "R", icon: <SiR />, color: "#276DC3" },
  { name: "Spark", icon: <SiApachespark />, color: "#E25A1C" },
  
  // Kafka is Black. Auto-adapt.
  { name: "Kafka", icon: <SiApachekafka /> }, 
  
  { name: "Airflow", icon: <SiApacheairflow />, color: "#017CEE" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "Scala", icon: <SiScala />, color: "#DC322F" },
  { name: "Streamlit", icon: <SiStreamlit />, color: "#FF4B4B" },
  { name: "Plotly", icon: <SiPlotly />, color: "#3F4F75" },
  { name: "Tableau", icon: <SiTableau />, color: "#E97627" },
  { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
];

// 4x Data for seamless loop on huge monitors
const doubled: Skill[] = [...skillsData, ...skillsData, ...skillsData, ...skillsData];

export const Skills = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Technical Skills
        </h2>
      </div>

      <MarqueeRow items={doubled} />
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false }: MarqueeRowProps) => {
  return (
    <div className="relative overflow-hidden w-full group select-none">
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className={`
          flex gap-12 whitespace-nowrap 
          animate-marquee 
          group-hover:[animation-play-state:paused]
          ${reverse ? "animate-marquee-reverse" : ""}
          
          /* --- THE SPEED FIX --- */
          /* 1. Define variable for Mobile (40s) */
          [--marquee-duration:130s]
          
          /* 2. Override variable for Desktop (90s) */
          md:[--marquee-duration:120s]
        `}
        style={{
          // We use the variable here. This works 100% of the time.
          animationDuration: "var(--marquee-duration)",
        } as React.CSSProperties}
      >
        {items.map((skill: Skill, i: number) => (
          <div key={i} className="flex flex-col items-center min-w-[80px] lg:min-w-[110px]">
            {/* 
               LOGIC: If color exists, use it. 
               If not, use 'text-foreground' (Black/White adaptive)
            */}
            <div 
              className={`text-4xl lg:text-5xl transition-transform duration-300 hover:scale-110 ${!skill.color ? "text-foreground" : ""}`}
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="mt-2 text-sm font-medium text-muted-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};