"use client";

import { useEffect, useState } from "react";

const BIRTH_DATE = new Date("2005-08-29T00:00:00");
const LIFE_EXPECTANCY = 80;

export default function AgeCounter() {
  const [age, setAge] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();
      const diff = now.getTime() - BIRTH_DATE.getTime();
      // Using a precise tropical year in milliseconds
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.242199);
      setAge(ageInYears);
    };

    updateAge(); // Initial call
    const interval = setInterval(updateAge, 50);

    return () => clearInterval(interval);
  }, []);

  if (age === 0) return null;

  return (
    <div 
      className="mt-10 mb-6 cursor-default select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-gray-400 tabular-nums leading-none h-5">
        {isHovered ? (
          <span className="text-white">
            {(LIFE_EXPECTANCY - age).toFixed(20)} <span className="text-gray-500 ml-2">ETD</span>
          </span>
        ) : (
          <span>{age.toFixed(20)}</span>
        )}
      </p>
    </div>
  );
}
