"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", lostItems: 120, foundItems: 95 },
  { month: "February", lostItems: 150, foundItems: 110 },
  { month: "March", lostItems: 135, foundItems: 98 },
  { month: "April", lostItems: 180, foundItems: 160 },
  { month: "May", lostItems: 145, foundItems: 105 },
  { month: "June", lostItems: 165, foundItems: 130 },
  { month: "July", lostItems: 190, foundItems: 140 },
  { month: "August", lostItems: 170, foundItems: 135 },
  { month: "September", lostItems: 160, foundItems: 120 },
  { month: "October", lostItems: 200, foundItems: 150 },
  { month: "November", lostItems: 185, foundItems: 140 },
  { month: "December", lostItems: 175, foundItems: 130 },
];

const chartConfig = {
  lostItems: {
    label: "lostItems",
    color: "#3B82F6",
  },
  foundItems: {
    label: "foundItems",
    color: "#10B981",
  },
} satisfies ChartConfig;

const AdminBarChart = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h2 className="text-center font-semibold text-slate-700 mb-5">
        Found & Lost items
      </h2>
      <ChartContainer config={chartConfig} className="max-h-[400px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="foundItems" fill="var(--color-foundItems)" radius={4}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground max-md:hidden"
              fontSize={12}
            />
          </Bar>
          <Bar dataKey="lostItems" fill="var(--color-lostItems)" radius={4}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground max-md:hidden"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AdminBarChart;
