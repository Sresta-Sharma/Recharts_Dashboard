import { chartData } from "../data/chartData";
import type { ChartDataItem } from "../data/chartData";

export const fetchChartData = (): Promise<ChartDataItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chartData);
    }, 1000); 
  });
};