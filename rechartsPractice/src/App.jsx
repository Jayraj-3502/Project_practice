import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";
import { SimpleAreaChart } from "./charts/Areachart/AreChartPractice";
import {
  SimpleLineChart,
  TinyLineChart,
} from "./charts/Linechart/LineChartPractice";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      name: "Page A",
      uv: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 4567,
      amt: 2400,
    },
    {
      name: "Page C",
      uv: 320,
      pv: 1398,
      amt: 2400,
    },
    {
      name: "Page D",
      uv: 200,
      pv: 9800,
      amt: 2400,
    },
    {
      name: "Page E",
      uv: 278,
      pv: 3908,
      amt: 2400,
    },
    {
      name: "Page F",
      uv: 189,
      pv: 4800,
      amt: 2400,
    },
  ];
  return (
    <>
      <h1>This is chart</h1>
      <SimpleLineChart />
      <TinyLineChart />
      {/* <SimpleAreaChart /> */}
    </>
  );
}

export default App;
