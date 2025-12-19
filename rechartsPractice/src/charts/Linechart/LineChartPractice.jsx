import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

export function SimpleLineChart() {
  return (
    <>
      <h1>This is Simple Line Chart</h1>
      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, minWidth: 600 }}
        responsive
        data={data}
      >
        <CartesianGrid strokeDasharray={"10"} />
        <Line dataKey="uv" stroke="pink" />
        <Line type={""} dataKey="pv" stroke="green" />
        <Line dataKey="amt" stroke="yellow" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  );
}

export function TinyLineChart() {
  return (
    <>
      <h1>This is Tiny Line Chart</h1>
      <LineChart
        data={data}
        style={{ width: "100%", aspectRatio: 1.6, minWidth: 600 }}
        responsive
      >
        <XAxis />
        <YAxis />
        <CartesianGrid strokeDasharray={"3"} />
        <Line dataKey={"uv"} />
      </LineChart>
    </>
  );
}
