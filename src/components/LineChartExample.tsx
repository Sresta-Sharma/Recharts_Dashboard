import { useEffect, useState } from "react";

import { RechartsDevtools } from '@recharts/devtools';
import { 
  Line, 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
 } from 'recharts';

import { fetchChartData } from "../api/chartApi";
import type { ChartDataItem } from "../data/chartData";


export default function LineChartExample() {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid stroke="pink" />
        <Line dataKey="uv" type="monotone" dot={false} />
        <XAxis dataKey="name" />
        <YAxis
          width="auto"
          label={{ value: "UV", position: "insideLeft", angle: -90 }}
        />
        <Tooltip />
        <RechartsDevtools />
      </LineChart>
    </ResponsiveContainer>
  );
}