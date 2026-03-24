import { useEffect, useState } from "react";

import { RechartsDevtools } from '@recharts/devtools';
import { 
  Area, 
  AreaChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
 } from 'recharts';

import { fetchChartData } from "../api/chartApi";
import type { ChartDataItem } from "../data/chartData";

const AreaChartExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="url(#colorUv)"
          isAnimationActive={isAnimationActive}
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fill="url(#colorPv)"
          isAnimationActive={isAnimationActive}
        />

        <RechartsDevtools />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartExample;