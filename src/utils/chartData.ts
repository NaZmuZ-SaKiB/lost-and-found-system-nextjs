export const getLostVsFoundChartData = (data: any) => {
  return [
    {
      type: "Lost Items",
      count: data?.lostItemCount,
      fill: "#EF4444",
    },
    {
      type: "Found Items",
      count: data?.foundItemCount,
      fill: "#a855f7",
    },
  ];
};

export const getClaimChartData = (data: any) => {
  return [
    {
      status: "Pending",
      count: data?.claimWithStatus[0],
      fill: "#F59E0B",
    },
    {
      status: "Approved",
      count: data?.claimWithStatus[1],
      fill: "#10B981",
    },
    {
      status: "Rejected",
      count: data?.claimWithStatus[2],
      fill: "#EF4444",
    },
  ];
};

export const getFoundVsReturnedChartData = (data: any) => {
  return [
    {
      type: "Found Items",
      count: data?.foundItemCount,
      fill: "#10B981",
    },
    {
      type: "Returned Items",
      count: data?.returnedFoundItems,
      fill: "#3B82F6",
    },
  ];
};
