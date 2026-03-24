import { useEffect, useState } from "react";

import { RechartsDevtools } from '@recharts/devtools';
import { Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';

import { fetchChartData } from "../api/chartApi";
import type { ChartDataItem } from "../data/chartData";

export default function PieChartExample() {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="uv"     
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <RechartsDevtools />
      </PieChart>
    </ResponsiveContainer>
  );
}