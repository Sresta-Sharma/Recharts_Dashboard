import { useEffect, useState } from "react";

import { RechartsDevtools } from '@recharts/devtools';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { fetchChartData } from "../api/chartApi";
import type { ChartDataItem } from "../data/chartData";

export default function BarChartExample() {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" radius={[10, 10, 0, 0]} />
        <Bar dataKey="uv" fill="#82ca9d" radius={[10, 10, 0, 0]} />
        <RechartsDevtools />
      </BarChart>
    </ResponsiveContainer>
  );
}