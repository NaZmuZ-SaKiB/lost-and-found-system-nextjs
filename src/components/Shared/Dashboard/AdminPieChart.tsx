"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

type TProps = {
  chartData: any[];
  chartConfig: ChartConfig;
  dataKey: string;
  nameKey: string;
  title: string;
};

const AdminPieChart = ({
  chartData,
  chartConfig,
  dataKey,
  nameKey,
  title,
}: TProps) => {
  return (
    <div className="flex-1 basis-[300px] p-5 rounded-lg bg-white">
      <h2 className="text-center font-semibold text-slate-700">{title}</h2>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey={dataKey}
            nameKey={nameKey}
            innerRadius={60}
            strokeWidth={5}
          ></Pie>
        </PieChart>
      </ChartContainer>

      <div className="flex justify-center flex-wrap gap-3">
        {chartData.map((item) => (
          <div key={item?.fill}>
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item?.fill }}
            ></span>
            <span>{item?.[nameKey]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPieChart;
