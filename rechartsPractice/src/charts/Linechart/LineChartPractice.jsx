import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 1200,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 4567,
    amt: 2100,
  },
  {
    name: "Page C",
    pv: 1398,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 200,
    pv: 9800,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 278,
    pv: 3908,
    amt: 200,
  },
  {
    name: "Page F",
    uv: -189,
    pv: 4800,
    amt: 500,
  },
];

export function SimpleLineChart() {
  return (
    <>
      <h1>This is Simple Line Chart</h1>
      <LineChart
        style={{
          width: "100%",
          aspectRatio: 1.618,
          minWidth: 600,
          maxHeight: "400px",
        }}
        responsive
        data={data}
      >
        <CartesianGrid strokeDasharray={"10"} />
        <Line
          connectNulls
          yAxisId="left"
          dataKey="uv"
          stroke="pink"
          label="asd"
        />
        {/* <Line yAxisId="left" dataKey="pv" stroke="green" />
        <Line yAxisId="right" dataKey="amt" stroke="yellow" /> */}
        <XAxis padding={{ left: 30, right: 30 }} allowDataOverflow />

        {/* <YAxis yAxisId="right" orientation="right" /> */}
        <YAxis interval={0} yAxisId="left" domain={[0, "dataMax + 150"]} />
        {/* <ReferenceLine x="3" stroke="red" label="Max PV PAGE" />
        <ReferenceLine y="300" stroke="red" label="max" /> */}
        <Tooltip />
        <Brush />
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
        layout="vertical"
        style={{
          width: "100%",
          maxHeight: "70vh",
          aspectRatio: 1 / 1.618,
        }}
        responsive
        data={data}
      >
        <CartesianGrid />
        <XAxis type="number" />
        <YAxis type="category" />
        <Tooltip />
        <Legend />
        <Line dataKey="pv" stroke="#8884d8" />
        <Line dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

// {/* <LineChart
//         layout="vertical"
//         data={data}
//         style={{
//           width: "100%",
//           maxWidth: "300px",
//           maxHeight: "70vh",
//           aspectRatio: 1 / 1.618,
//         }}
//         responsive
//       >
//         <XAxis type="number" />
//         <YAxis width="auto" />
//         {/* <CartesianGrid /> */}
//         <Line dataKey="uv" stroke="pink" />
//       </LineChart> */}
