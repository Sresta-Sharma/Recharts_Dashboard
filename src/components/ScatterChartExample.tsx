import { useEffect, useState } from "react";

import { RechartsDevtools } from '@recharts/devtools';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { fetchChartData } from "../api/chartApi";
import type { ChartDataItem } from "../data/chartData";

export default function ScatterChartExample() {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data.length) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ bottom: 30, left: 20 }}>
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

        {/* X = UV */}
        <XAxis
          type="number"
          dataKey="uv"
          name="UV"
          label={{ value: "UV (X-axis)", position: "insideBottom", offset: -5 }}
        />

        {/* Y = PV */}
        <YAxis
          type="number"
          dataKey="pv"
          name="PV"
          label={{ value: "PV (Y-axis)", angle: -90, position: "insideLeft" }}
        />

        {/* Bubble size = AMT */}
        {/* <ZAxis
          type="number"
          dataKey="amt"
          range={[50, 400]}
          name="AMT"
        /> */}

        <Tooltip cursor={{ stroke: "gray" }} />

        <Scatter
          name="UV vs PV"
          data={data}
          fill="#6366f1"
        />
      <RechartsDevtools />
      </ScatterChart>
    </ResponsiveContainer>
  );
}