import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  {
    year: "2025",
    income: 6.75,
    trees: 7,
    co2: 350,
  },
  {
    year: "2027",
    income: 71.1,
    trees: 25,
    co2: 1250,
  },
  {
    year: "2029",
    income: 287,
    trees: 50,
    co2: 250,
  },
  {
    year: "2031",
    income: 1500,
    trees: 75,
    co2: 310,
  },
];

const Diagram = () => {
  return (
    <div className="bg-gray-600 flex gap-y-10 flex-col lg:flex-row text-white p-10 relative">
      {/* Title and Legend */}
      <div className="">
        <h2 className="text-3xl font-bold mb-6">KEY INDICATORS</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#10B981] mr-3"></div>
            <span className="text-lg text-[#fff]">Annual income ($M)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#108081] mr-3"></div>
            <span className="text-lg text-[#fff]">Number of trees (M)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#109381] mr-3"></div>
            <span className="text-lg text-[#fff]">CO2 absorption (K tons)</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="90%" height={400} className="sm:mt-[150px]">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <XAxis dataKey="year" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: "#fff", border: "none", borderRadius: "5px" }} />
          {/* <Legend wrapperStyle={{ color: "#969696" }} /> */}
          <Bar dataKey="income" fill="#10B981" name="Annual income ($M)" />
          <Bar dataKey="trees" fill="#108081" name="Number of trees (M)" />
          <Bar dataKey="co2" fill="#109381" name="CO2 absorption (K tons)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Diagram;
