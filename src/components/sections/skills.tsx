"use client";
import React from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiFastapi, SiNodedotjs,
  SiStreamlit, SiAmazon, SiGooglecloud, SiDocker, SiGit, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiTensorflow, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiTableau, SiApachespark, SiApachekafka,
  SiApacheairflow, SiHtml5, SiCss3, SiScala,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Skill = {
  name: string;
  icon: React.ReactElement; 
};

type MarqueeRowProps = {
  items: Skill[]; 
  reverse?: boolean;
  speed?: number;
};

const skillsData: Skill[] = [
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Git", icon: <SiGit /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "scikit-learn", icon: <SiScikitlearn /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Spark", icon: <SiApachespark /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Airflow", icon: <SiApacheairflow /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Scala", icon: <SiScala /> },
  { name: "Streamlit", icon: <SiStreamlit /> },
  { name: "Tableau", icon: <SiTableau /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
];

const doubled: Skill[] = [...skillsData, ...skillsData];

export const Skills = () => {
  return (
    // FIX: Removed "bg-background" and "py-16" to stop the banding issue
    <div className="w-full">
      <div className="container max-w-5xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Technical Skills
        </h2>
      </div>

      <MarqueeRow items={doubled} reverse={false} speed={40} />
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false, speed = 40 }: MarqueeRowProps) => {
  return (
    <div className="relative overflow-hidden w-full group">
      {/* These gradients fade to the 'background' variable. 
          This is why the Skills section MUST be on the default background color */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className={`
          flex gap-12 whitespace-nowrap 
          animate-marquee 
          group-hover:[animation-play-state:paused]
          ${reverse ? "animate-marquee-reverse" : ""}
        `}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((skill: Skill, i: number) => (
          <div key={i} className="flex flex-col items-center min-w-[80px] lg:min-w-[110px]">
            <div className="text-4xl lg:text-5xl text-muted-foreground hover:text-primary transition-colors duration-300">
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