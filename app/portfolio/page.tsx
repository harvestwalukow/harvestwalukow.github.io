"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { MessageCircle, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const largeRoman = localFont({
  src: "../../components/Large-Roman.otf",
});

const portfolioItems = [
  {
    title: "Payment Gateway Dashboard",
    description: "2026",
    image: "/portfolio/payment.webp",
    color: "bg-[#818CF8]",
  },
  {
    title: "Shopee Login Page Redesign",
    description: "2026",
    image: "/portfolio/shopee.webp",
  },
  {
    title: "Astro",
    description: "2026",
    image: "/portfolio/astro.webp",
    link: "https://contra.com/vesko_design_84f3r73z/work",
    color: "bg-[#f5f5f5]",
  },
  {
    title: "Login Page",
    description: "2026",
    image: "/portfolio/j.webp",
    color: "bg-[#FCFFCC]",
  },
  {
    title: "10 Product Designs in 10 Days",
    description: "2025",
    image: "/portfolio/10.webp",
    link: "https://harvestwalukow.vercel.app/blog/10-product-designs-10-days",
  },
  {
    title: "Brawn GP Redesign",
    description: "2021",
    image: "/portfolio/brawn-gp.webp",
    link: "https://www.behance.net/gallery/125780041/Brawn-GP-Logo-Livery-Redesign",
  },
  {
    title: "Brainly Redesign",
    description: "2021",
    image: "/portfolio/brainly.webp",
    link: "https://www.behance.net/gallery/126265483/Brainly-New-Look-Logo-UI",
    imagePadding: "p-48", // Very small to ensure crispness
  },
  {
    title: "Social Media @ngobrolmatematika",
    description: "2025",
    image: "/portfolio/ngotik.webp",
    link: "https://www.instagram.com/ngobrolmatematika",
  },
  {
    title: "Social Media @beasiswamahaghora Scholarship Opening",
    description: "2023",
    image: "/portfolio/bmhg.png",
    link: "https://www.instagram.com/beasiswamahaghora",
  },
  {
    title: "Social Media @beasiswamahaghora",
    description: "2024",
    image: "/portfolio/bmhg1.png",
    link: "https://www.instagram.com/beasiswamahaghora",
  },
  {
    title: "Woka T-shirt Collection",
    description: "2025",
    image: "/portfolio/woka.png",
    link: "https://www.instagram.com/woka.wrld/",
  },
  {
    title: "Founders Fund Data Visualization",
    description: "2024",
    image: "/portfolio/ff.png",
    link: "https://github.com/harvestwalukow/founders-fund",
  },
  {
    title: "3D Custom Ice Cream Cup",
    description: "2025",
    image: "/portfolio/3d.png",
  },
];

function PortfolioItem({ item, index }: { item: any; index: number }) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers when the card is in the focused area (center) of the viewport
        setIsFocused(entry.isIntersecting);
      },
      {
        // Focus on the center 40% of the screen
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) transform ${isFocused ? "scale-[1.05]" : "scale-100 opacity-70"
        }`}
    >
      {/* Image Preview */}
      <div
        className={`relative aspect-[4816/3368] w-full overflow-hidden rounded-[2.5rem] ${item.color || "bg-white"} shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(249,247,243,0.25)]`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-contain ${item.imagePadding || "p-8"}`}
          priority={index === 0}
        />
      </div>

      <div className="mt-4 flex items-start justify-between px-2 text-black">
        <div>
          <h2 className="text-xl font-semibold tracking-tight leading-tight">
            {item.title}
          </h2>
          <p className="text-gray-500 text-sm mt-0.5">
            {item.description}
          </p>
        </div>

        {item.link && (
          <div className="flex items-center gap-3">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white hover:bg-gray-50 transition-colors rounded-full text-gray-500 shadow-sm"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [typedText, setTypedText] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "my designs";

  useEffect(() => {
    // Initial blinking sequence
    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
      blinkCount++;
      if (blinkCount >= 6) { // 3 full blinks
        clearInterval(blinkInterval);
        startTyping();
      }
    }, 400);

    const startTyping = () => {
      let charIndex = 0;
      setShowCursor(true);
      const typeInterval = setInterval(() => {
        setTypedText(fullText.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex >= fullText.length) {
          clearInterval(typeInterval);
          // Pause for 800ms before revealing cards
          setTimeout(() => setIsDoneTyping(true), 800);
          // Keep cursor for a moment then fade out?
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 100);
    };

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="bg-[#F5F5F7] min-h-screen font-sans selection:bg-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col items-center">
        <header className="mb-16 text-center min-h-[4rem] flex items-center justify-center">
          <h1 className={`${largeRoman.className} text-6xl lowercase tracking-tight text-black flex items-center`}>
            {typedText}
            {showCursor && (
              <span className="inline-block w-[2px] h-[2.8rem] bg-black ml-1 animate-pulse" />
            )}
          </h1>
        </header>

        <section 
          className={`w-full space-y-12 transition-all duration-1000 ${
            isDoneTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {isDoneTyping && portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </section>

        <footer className="mt-32 pb-20 text-center">
        </footer>
      </div>
    </div>
  );
}
