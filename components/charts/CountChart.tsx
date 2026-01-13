"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Image from "next/image";

export default function CountChart() {
  const data = [
    {
      name: "Total Students",
      count: 100,
      fill: "white",
    },
    {
      name: "Girls",
      count: 40,
      fill: "#fae27c",
    },
    {
      name: "Boys",
      count: 60,
      fill: "#c3ebfa",
    },
  ];

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            data={data}
            barSize={32}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/maleFemale.png"
          alt="students"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 bg-brand-sky rounded-full" />
          <h2 className="font-bold">1,234</h2>
          <h3 className="text-xs text-gray-500">Boys (60%)</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-5 h-5 bg-brand-yellow rounded-full" />
          <h2 className="font-bold">1,234</h2>
          <h3 className="text-xs text-gray-500">Girls (40%)</h3>
        </div>
      </div>
    </div>
  );
}
