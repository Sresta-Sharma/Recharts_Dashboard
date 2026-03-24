import { useEffect, useState } from "react";

import { RechartsDevtools } from '@recharts/devtools';
import {
  ComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { fetchChartData } from "../api/chartApi";
import type { ChartDataItem } from "../data/chartData";

export default function ComposedChartExample() {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data.length) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip />
        <Legend />

        {/* Bar for PV */}
        <Bar dataKey="pv" fill="#6366f1" radius={[6, 6, 0, 0]} />

        {/* Line for UV */}
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#f59e0b"
          strokeWidth={2}
          dot={false}
        />

        {/* Area for AMT */}
        <Area
          type="monotone"
          dataKey="amt"
          fill="#10b981"
          stroke="#10b981"
          fillOpacity={0.2}
        />
      <RechartsDevtools />
      </ComposedChart>
    </ResponsiveContainer>
  );
}