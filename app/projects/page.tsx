"use client";

import { useState } from "react";

const projects = [
  {
    title: "BMHG AI",
    description:
      "AI chatbot answering questions about the Mahaghora Scholarship program.",
    url: "https://tanya.beasiswamahaghora.com",
    category: "ds/ai/ml",
  },
  {
    title: "Kampzy",
    description: "Building the go-to hub for student communities.",
    url: "https://www.kampzy.com",
    category: "web/app",
  },
  {
    title: "GPT From Scratch",
    description:
      "Building my own GPT based on the famous paper Attention Is All You Need.",
    url: "https://harvestwalukow.github.io/gpt/",
    category: "ds/ai/ml",
  },
  {
    title: "akreditasi-scraper",
    description:
      "Web scraper to collect accreditation data for all universities in Indonesia.",
    url: "https://github.com/harvestwalukow/akreditasi-scraper",
    category: "ds/ai/ml",
  },
  {
    title: "kai-scraper",
    description: "Web scraper for Indonesian train schedules.",
    url: "https://github.com/harvestwalukow/kai-scraper",
    category: "ds/ai/ml",
  },
  {
    title: "Personal Website",
    description:
      "Source code for my personal portfolio website to host my resume, projects, contact information, and bio.",
    url: "https://github.com/harvestwalukow/harvestwalukow.github.io",
    category: "web/app",
  },
  {
    title: "project-basdat",
    description: "Group project built with Laravel for Database course.",
    url: "https://github.com/harvestwalukow/project-basdat",
    category: "web/app",
  },
  {
    title: "fashion-mnist",
    description: "Fashion MNIST dataset analysis and machine learning models.",
    url: "https://github.com/harvestwalukow/fashion-mnist",
    category: "ds/ai/ml",
  },
  {
    title: "nlp-ngram",
    description: "Weekly group project for Natural Language Processing course.",
    url: "https://news-game.vercel.app",
    category: "ds/ai/ml",
  },
  {
    title: "sidisoda",
    description: "A web project.",
    url: "https://sidisoda.vercel.app",
    category: "web/app",
  },
  {
    title: "Life Expectancy Regression Analysis",
    description: "A group project using R and Shiny App.",
    url: "https://harvestwalukow.shinyapps.io/Kelompok5/",
    category: "ds/ai/ml",
  },
  {
    title: "search",
    description: "iTunes Search with Python.",
    url: "https://github.com/harvestwalukow/search",
    category: "ds/ai/ml",
  },
  {
    title: "mathaintmathing",
    description: "Final Project for CS50 R: an R package.",
    url: "https://github.com/harvestwalukow/mathaintmathing",
    category: "ds/ai/ml",
  },
  {
    title: "apple-music",
    description: "Final Project for CS50 SQL: a database design.",
    url: "https://github.com/harvestwalukow/apple-music",
    category: "ds/ai/ml",
  },
  {
    title: "marahinaja",
    description: "A fun Laravel project.",
    url: "https://github.com/harvestwalukow/marahinaja",
    category: "web/app",
  },
  {
    title: "cs50",
    description: "Personal solutions to all the psets for the CS50 course.",
    url: "https://github.com/harvestwalukow/cs50",
    category: "web/app",
  },
  {
    title: "founders-fund",
    description:
      "A data collecting, cleaning, analytic, and visualization from https://foundersfund.com/portfolio",
    url: "https://github.com/harvestwalukow/founders-fund",
    category: "ds/ai/ml",
  },
  {
    title: "beasiswamahaghora.com",
    description: "Main website for the Mahaghora Scholarship program.",
    url: "https://beasiswamahaghora.com",
    category: "web/app",
  },
  {
    title: "InsideBMHG",
    description: "Internal tool for the Mahaghora Scholarship organization.",
    url: "https://inside.beasiswamahaghora.com",
    category: "web/app",
  },
  {
    title: "Woka World",
    description: "My clothing brand.",
    url: "https://woka.world",
    category: "web/app",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mt-4">All Projects</h1>

        {/* Filter Toggle */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("ds/ai/ml")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === "ds/ai/ml"
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            DS/AI/ML
          </button>
          <button
            onClick={() => setSelectedCategory("web/app")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === "web/app"
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Web/App
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener"
              className="inline-block px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              {project.url.includes("github.com")
                ? "View on GitHub"
                : "Visit project"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
