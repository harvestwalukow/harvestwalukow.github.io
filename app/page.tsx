"use client";

import Link from "next/link";
import { Mail, Linkedin, Github, Youtube, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-5 py-16">
      <section className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          HARVEST WALUKOW
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
        <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          About
        </h2>
        <p className="mt-4 text-gray-300">
          I am a student majoring in Data Science Technology at Airlangga
          University. Learning and building AI/ML stuffs.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Graphic Design Portfolio
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-4 text-white hover:text-gray-400 underline underline-offset-4 transition-colors cursor-pointer">
              View portfolio
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Open portfolio on Figma</DialogTitle>
              <DialogDescription>
                You’ll be redirected to a Figma prototype in a new tab.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" className="w-full sm:w-auto">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <a
                  href="https://www.figma.com/proto/DbsZa4L2rH02Y2Zcdur7lI/Graphic-Design-Portfolio?node-id=2-2&p=f&t=cpcjzbVdWXX57Grs-1&scaling=contain&content-scaling=fixed&page-id=0%3A1"
                  target="_blank"
                  rel="noopener"
                >
                  <Button className="w-full sm:w-auto">Continue</Button>
                </a>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Blog
        </h2>
        <Link
          href="/blog"
          className="inline-block mt-4 text-white hover:text-gray-400 underline underline-offset-4 transition-colors"
        >
          Read posts
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Featured Work
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-lg font-semibold text-white">BMHG AI</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              AI chatbot answering questions about the Mahaghora Scholarship
              program.
            </p>
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
            <h3 className="text-lg font-semibold text-white">Kampzy</h3>
            <p className="text-gray-400 text-sm mt-2 flex-grow">
              Building the go-to hub for student communities.
            </p>
            <a
              href="https://www.kampzy.com"
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
            <a
              href="https://github.com/harvestwalukow/apple-music"
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
            className="text-white hover:text-gray-400 underline underline-offset-4 transition-colors"
          >
            See all projects
          </Link>
        </div>
      </section>
    </div>
  );
}
