"use client";

import React, { useState, useEffect } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import axios from "axios";

interface Activity {
  date: string;
  count: number;
  level: number;
}

interface LeetCodeCalendarProps {
  username: string;
  blockSize?: number;
  blockMargin?: number;
  fontSize?: number;
  theme?: {
    dark: string[];
    light?: string[];
  };
}

const LeetCodeCalendar = ({
  username,
  blockSize = 8,
  blockMargin = 2,
  fontSize = 10,
  theme,
}: LeetCodeCalendarProps) => {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get<Record<string, number>>(
          `https://leetcode-sub-endpoint.vercel.app/leetcode/${username}`
        );
        
        if (res.data) {
          // The API returns { "YYYY-MM-DD": count, ... }
          const formattedData: Activity[] = Object.entries(res.data).map(([date, count]) => ({
            date,
            count,
            level: count > 0 ? Math.min(count, 4) : 0,
          }));
          
          // Sort data by date
          formattedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          
          setData(formattedData);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching LeetCode data:", err);
        setError("Failed to fetch LeetCode data");
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div className="text-gray-400 text-sm">Loading LeetCode activity...</div>;
  if (error) return <div className="text-red-500 text-sm">{error}</div>;

  return (
    <ActivityCalendar
      data={data}
      theme={theme}
      fontSize={fontSize}
      blockSize={blockSize}
      blockMargin={blockMargin}
      labels={{
        totalCount: "{{count}} submissions in the last year",
      }}
    />
  );
};

export default LeetCodeCalendar;
