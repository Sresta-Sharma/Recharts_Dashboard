import { useEffect, useState } from "react";
import {
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

import { fetchChartData } from "../api/chartApi";
import type { ChartDataItem } from "../data/chartData";

const COLORS = [
  "#60A5FA",
  "#34D399",
  "#FBBF24",
  "#F87171",
  "#A78BFA",
  "#22D3EE",
];

export default function PieChartExample() {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  // Total
  const total = data.reduce((sum, item) => sum + item.uv, 0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="uv"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="70%"
          labelLine={false}
          label={({ percent = 0 }) =>
            `${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        {/* Center Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-800 text-lg font-bold"
        >
          {total}
        </text>

        {/* Subtitle */}
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          className="fill-gray-500 text-sm"
        >
          Total UV
        </text>

        <Tooltip />
        <RechartsDevtools />
      </PieChart>
    </ResponsiveContainer>
  );
}