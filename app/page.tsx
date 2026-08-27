"use client";
import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github, Youtube, Calendar, ChevronDown } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiPytorch,
} from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";

import AgeCounter from "@/components/AgeCounter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LeetCodeCalendar from "@/components/LeetCodeCalendar";



const largeRoman = localFont({
  src: "../components/Large-Roman.otf",
});

const books = [
  { title: "The Subtle Art of Not Giving a F*ck", cover: "/bookshelf/subtle-art.jpg", width: 527, height: 800 },
  { title: "Outliers", cover: "/bookshelf/outliers.png", width: 265, height: 380 },
  { title: "On Writing", cover: "/bookshelf/on-writing.png", width: 265, height: 380 },
  { title: "Atomic Habits", cover: "/bookshelf/atomic-habits-flat.jpg", width: 1200, height: 1800 },
  { title: "Srimenanti", cover: "/bookshelf/srimenanti.jpg", width: 1588, height: 2362 },
  { title: "Perjamuan Khong Guan", cover: "/bookshelf/perjamuan-khong-guan-user.png", width: 500, height: 695 },
  { title: "Surat Kopi", cover: "/bookshelf/surat-kopi.jpg", width: 1184, height: 1754 },
  { title: "Nanti Kita Sambat Tentang Hari Ini", cover: "/bookshelf/nanti-kita-sambat.jpg", width: 600, height: 890 },
  { title: "Nanti Kita Cerita Tentang Hari Ini", cover: "/bookshelf/nanti-kita-cerita-flat.jpg", width: 400, height: 516 },
  { title: "Geez & Ann", cover: "/bookshelf/geez-ann.jpg", width: 650, height: 921 },
  { title: "Timun Jelita", cover: "/bookshelf/timun-jelita-flat.jpg", width: 1221, height: 1787 },
  { title: "Mantappu Jiwa", cover: "/bookshelf/mantappu-jiwa.jpg", width: 1598, height: 2357 },
  { title: "Mimpi Sejuta Dolar", cover: "/bookshelf/mimpi-sejuta-dolar-flat.jpg", width: 700, height: 955 },
  { title: "Seperti Dendam, Rindu Harus Dibayar Tuntas", cover: "/bookshelf/seperti-dendam.jpg", width: 760, height: 1139 },
] as const;

const films = [
  ["The Social Network", "/films/the-social-network.png"],
  ["Knives Out", "/films/knives-out.png"],
  ["La La Land", "/films/la-la-land.png"],
  ["Hustle", "/films/hustle.png"],
] as const;

export default function Home() {
  const [activityType, setActivityType] = useState<"github" | "leetcode">("github");
  const [mounted, setMounted] = useState(false);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const bookshelfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        bookshelfRef.current &&
        !bookshelfRef.current.contains(event.target as Node)
      ) {
        setSelectedBook(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

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

      <AgeCounter />

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
            <h3 className="text-lg font-semibold text-white">Ayam AI</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              An AI project focused on building ayam.lat.
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
              href="https://ayam.lat"
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              Visit project
            </a>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-lg font-semibold text-white">DoggoGAN</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              From-scratch Generative Adversarial Networks for dog image synthesis.
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
              href="https://github.com/harvestwalukow/DoggoGAN"
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              View on GitHub
            </a>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-lg font-semibold text-white">BMHG AI</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              An AI-powered chatbot built with Retrieval Augmented Generation.
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
              Diffusion Maze Solver
            </h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              Conditional Denoising Diffusion Probabilistic Models for maze
              solving.
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
              href="https://github.com/harvestwalukow/maze"
              target="_blank"
              rel="noopener"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium text-center"
            >
              View on GitHub
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 group cursor-pointer outline-none">
              <h2 className={`${largeRoman.className} text-lg lowercase text-white`}>
                {activityType} activity
              </h2>
              <ChevronDown 
                className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors"
                style={{ marginTop: '-1px' }}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-[#0a0a0a] border-[#1a1a1a]">
            <DropdownMenuItem 
              onClick={() => setActivityType("github")}
              className={`cursor-pointer ${activityType === "github" ? "bg-[#1a1a1a] text-white" : "text-gray-400 focus:bg-[#1a1a1a] focus:text-white"}`}
            >
              github activity
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setActivityType("leetcode")}
              className={`cursor-pointer ${activityType === "leetcode" ? "bg-[#1a1a1a] text-white" : "text-gray-400 focus:bg-[#1a1a1a] focus:text-white"}`}
            >
              leetcode activity
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="mt-1 overflow-hidden">
          {mounted && (
            activityType === "github" ? (
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
            ) : (
              <LeetCodeCalendar
                username="harvestwalukow"
                blockSize={8}
                blockMargin={2}
                fontSize={10}
                theme={{
                  dark: ['#1a1a1a', '#3a3a3a', '#6b6b6b', '#a3a3a3', '#ffffff']
                }}
              />
            )
          )}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="bookshelf-heading">
        <h2
          id="bookshelf-heading"
          className={`${largeRoman.className} text-lg lowercase text-white`}
        >
          bookshelf
        </h2>

        <div
          ref={bookshelfRef}
          className="relative mt-0 flex h-[clamp(5.5rem,20vw,7rem)] items-end justify-between overflow-visible px-0"
        >
          {books.map(({ title, cover, width, height }, index) => {
            const isSelected = selectedBook === title;
            return (
              <button
                key={title}
                type="button"
                aria-label={title}
                onClick={() => setSelectedBook((prev) => (prev === title ? null : title))}
                className={`group relative -ml-[clamp(1.5rem,4vw,2rem)] h-full w-[clamp(2.25rem,9vw,4rem)] shrink-0 cursor-pointer rounded-sm border border-white/10 bg-[#111111] p-0.5 shadow-[0_10px_24px_rgba(0,0,0,0.4)] outline-none transition-[z-index] duration-300 first:ml-0 hover:z-50 focus-visible:z-50 ${
                  isSelected ? "z-50" : "z-[var(--book-layer)]"
                }`}
                style={{ "--book-layer": index + 1 } as CSSProperties}
              >
                <Image
                  src={cover}
                  alt=""
                  width={width}
                  height={height}
                  className="h-full w-full rounded-[1px] object-cover"
                />
                <span
                  className={`pointer-events-none absolute bottom-0 left-1/2 z-10 w-32 -translate-x-1/2 transition-[opacity,transform] duration-200 group-hover:-translate-y-2 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:-translate-y-2 group-focus-visible:scale-100 group-focus-visible:opacity-100 ${
                    isSelected
                      ? "-translate-y-2 scale-100 opacity-100"
                      : "translate-y-2 scale-90 opacity-0"
                  }`}
                >
                  <Image
                    src={cover}
                    alt=""
                    width={width}
                    height={height}
                    className="h-auto w-full rounded-sm border border-white/20 object-contain shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
                  />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="films-heading">
        <h2
          id="films-heading"
          className={`${largeRoman.className} text-lg lowercase text-white`}
        >
          films
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Check out my{" "}
          <a
            href="https://boxd.it/iHDeP"
            target="_blank"
            rel="noopener"
            className="underline underline-offset-4 transition-colors hover:text-white"
          >
            Letterboxd
          </a>
          {" "}for more of my favorite films.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {films.map(([title, poster]) => (
            <figure key={title} className="overflow-hidden rounded-md border border-gray-800">
              <Image
                src={poster}
                alt={title}
                width={400}
                height={600}
                className="aspect-[2/3] h-auto w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className={`${largeRoman.className} text-lg lowercase text-white`}>
          tools
        </h2>
        <div className="mt-1 flex flex-col items-start gap-1">
          <a
            href="https://not-notes.vercel.app/"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
          >
            Not Apple Notes
          </a>
          <a
            href="https://seemessi.vercel.app/"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
          >
            Add Messi to my calendar
          </a>
        </div>
      </section>
    </div>
  );
}
