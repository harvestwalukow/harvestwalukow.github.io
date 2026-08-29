"use client";

import { useEffect, useState } from "react";

const BIRTH_DATE = new Date(2005, 7, 29);
const LIFE_EXPECTANCY = 80;

export default function AgeCounter() {
  const [age, setAge] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();

      const birthdayThisYear = new Date(
        now.getFullYear(),
        BIRTH_DATE.getMonth(),
        BIRTH_DATE.getDate(),
      );
      const hasHadBirthday = now >= birthdayThisYear;
      const age =
        now.getFullYear() -
        BIRTH_DATE.getFullYear() -
        (hasHadBirthday ? 0 : 1);
      const lastBirthday = hasHadBirthday
        ? birthdayThisYear
        : new Date(
            now.getFullYear() - 1,
            BIRTH_DATE.getMonth(),
            BIRTH_DATE.getDate(),
          );
      const nextBirthday = new Date(
        lastBirthday.getFullYear() + 1,
        BIRTH_DATE.getMonth(),
        BIRTH_DATE.getDate(),
      );
      const yearProgress =
        (now.getTime() - lastBirthday.getTime()) /
        (nextBirthday.getTime() - lastBirthday.getTime());

      const ageInYears = age + yearProgress;
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
