import { useEffect, useState } from "react";

import BarChartExample from "./components/BarChartExample";
import LineChartExample from "./components/LineChartExample";
import PieChartExample from "./components/PieChartExample";
import AreaChartExample from "./components/AreaChartExample";
import ComposedChartExample from "./components/ComposedChartExample";
import ScatterChartExample from "./components/ScatterChartExample";

import { fetchChartData } from "./api/chartApi";
import type { ChartDataItem } from "./data/chartData";

function App() {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  type ChartCardProps = {
  title: string;
  children: React.ReactNode;
  };

  const ChartCard = ({ title, children }: ChartCardProps) => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          {title}
        </h2>

        <div className="w-full aspect-[1.6] overflow-hidden">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Recharts Dashboard
        </h1>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Raw Data
          </h2>

          {!data.length ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-sm font-semibold text-gray-600">Name</th>
                    <th className="p-3 text-sm font-semibold text-gray-600">UV</th>
                    <th className="p-3 text-sm font-semibold text-gray-600">PV</th>
                    <th className="p-3 text-sm font-semibold text-gray-600">AMT</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-3 text-gray-700">{item.name}</td>
                      <td className="p-3">{item.uv}</td>
                      <td className="p-3">{item.pv}</td>
                      <td className="p-3">{item.amt}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ChartCard title="Line Chart">
            <LineChartExample />
          </ChartCard>

          <ChartCard title="Bar Chart">
            <BarChartExample />
          </ChartCard>
          
          <ChartCard title="Pie Chart">
            <PieChartExample />
          </ChartCard>

          <ChartCard title="Area Chart">
            <AreaChartExample />
          </ChartCard>

          <ChartCard title="Composed Chart">
            <ComposedChartExample />
          </ChartCard>

          <ChartCard title="Scatter Chart">
            <ScatterChartExample />
          </ChartCard>

        </div>
      </div>
    </div>
  );
}

export default App;