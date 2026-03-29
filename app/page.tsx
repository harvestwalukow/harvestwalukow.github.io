"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { Mail, Linkedin, Github, Youtube, Calendar } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiPytorch,
  SiSqlite,
} from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";

const largeRoman = localFont({
  src: "../components/Large-Roman.otf",
});

export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-5 py-16">
      <section className="text-center">
        <h1 className={`${largeRoman.className} text-3xl lowercase tracking-tight text-white`}>
          harvest walukow
        </h1>
        <p className="text-gray-400 mt-1">
          Data Science at Airlangga University
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center mt-6">
          <a
            href="mailto:harvest0805@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/harvestwalukow/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/harvestwalukow"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.youtube.com/@harvestwalukow"
            target="_blank"
            rel="noopener"
            aria-label="YouTube"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="https://zeeg.me/harvest/30"
            target="_blank"
            rel="noopener"
            aria-label="Schedule a call"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Calendar className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mt-10">
        <h2 className={`${largeRoman.className} text-lg lowercase text-white`}>
          about
        </h2>
        <p className="mt-1 text-gray-400">
          I am a student majoring in Data Science Technology at Airlangga
          University. Learning and building data/AI/ML stuffs.
        </p>
      </section>
      <section className="mt-10">
        <h2 className={`${largeRoman.className} text-lg lowercase text-white`}>
          graphic design portfolio
        </h2>
        <Link
          href="/portfolio"
          className="inline-block mt-1 text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
        >
          View portfolio
        </Link>
      </section>

      <section className="mt-10">
        <h2 className={`${largeRoman.className} text-lg lowercase text-white`}>
          blog
        </h2>
        <Link
          href="/blog"
          className="inline-block mt-1 text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
        >
          Read posts
        </Link>
      </section>

      <section className="mt-10">
        <h2 className={`${largeRoman.className} text-lg lowercase text-white`}>
          featured work
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Check out my{" "}
          <a
            href="https://github.com/harvestwalukow"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
          >
            GitHub
          </a>{" "}
          for the most updated list of my projects.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-lg font-semibold text-white">BMHG AI</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              AI chatbot answering questions about the Mahaghora Scholarship
              program.
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <div className="tooltip-wrapper">
                <SiPython className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <span className="tooltip">Python</span>
              </div>
              <div className="tooltip-wrapper">
                <SiReact className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <span className="tooltip">React</span>
              </div>
            </div>
            <a
              href="https://tanya.beasiswamahaghora.com"
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              Visit project
            </a>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-lg font-semibold text-white">
              GPT From Scratch
            </h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              Building my own GPT based on the famous paper Attention Is All You
              Need.
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <div className="tooltip-wrapper">
                <SiPython className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <span className="tooltip">Python</span>
              </div>
              <div className="tooltip-wrapper">
                <SiPytorch className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <span className="tooltip">PyTorch</span>
              </div>
            </div>
            <a
              href="https://harvestwalukow.github.io/gpt/"
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              View project
            </a>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-lg font-semibold text-white">Apple Music DB</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              Relational database modeling.
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <div className="tooltip-wrapper">
                <SiSqlite className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <span className="tooltip">SQL</span>
              </div>
            </div>
            <a
              href="https://github.com/harvestwalukow/apple-music"
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              View on GitHub
            </a>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-lg font-semibold text-white">Woka World</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              My clothing brand.
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <div className="tooltip-wrapper">
                <SiReact className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <span className="tooltip">React</span>
              </div>
            </div>
            <a
              href="https://woka.world"
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              Visit project
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/projects"
            className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
          >
            See all projects
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className={`${largeRoman.className} text-lg lowercase text-white`}>
          github activity
        </h2>
        <div className="mt-1 overflow-hidden">
          <GitHubCalendar
            username="harvestwalukow"
            colorScheme="dark"
            fontSize={10}
            blockSize={8}
            blockMargin={2}
            theme={{
              dark: ['#1a1a1a', '#3a3a3a', '#6b6b6b', '#a3a3a3', '#ffffff']
            }}
          />
        </div>
      </section>
    </div>
  );
}
