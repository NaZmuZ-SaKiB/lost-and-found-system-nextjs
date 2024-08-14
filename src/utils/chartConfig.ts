import { ChartConfig } from "@/components/ui/chart";

export const getLostVsFoundChartConfig = (data: any) => {
  return {
    count: {
      label: "Count",
    },
    "Lost Items": {
      label: "Lost Items",
      color: "hsl(var(--chart-1))",
    },
    "Found Items": {
      label: "Found Items",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
};

export const getClaimChartConfig = (data: any) => {
  return {
    count: {
      label: "Count",
    },
    Pending: {
      label: "Pending",
      color: "hsl(var(--chart-1))",
    },
    Approved: {
      label: "Approved",
      color: "hsl(var(--chart-2))",
    },
    Rejected: {
      label: "Rejected",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;
};

export const getFoundVsReturnedChartConfig = (data: any) => {
  return {
    count: {
      label: "Count",
    },
    "Found Items": {
      label: "Found Items",
      color: "hsl(var(--chart-1))",
    },
    "Returned Items": {
      label: "Returned Items",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
};
