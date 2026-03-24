export interface ChartDataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export const chartData: ChartDataItem[] = [
  { name: "Page A", uv: 400, pv: 2400, amt: 4200 },
  { name: "Page B", uv: 800, pv: 4567, amt: 2000 },
  { name: "Page C", uv: 320, pv: 1398, amt: 2500 },
  { name: "Page D", uv: 100, pv: 9800, amt: 3000 },
  { name: "Page E", uv: 278, pv: 3908, amt: 4400 },
  { name: "Page F", uv: 489, pv: 4800, amt: 3400 },
  { name: "Page G", uv: 500, pv: 4800, amt: 2400 },
];