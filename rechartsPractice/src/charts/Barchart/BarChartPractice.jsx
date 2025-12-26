import {
  Bar,
  BarChart,
  Brush,
  Cell,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useState } from "react";

export function SimpleBarChart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: -1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: -4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [active, setActive] = useState(0);

  const onClickHandler = (index) => {
    setActive(index);
  };

  return (
    <>
      <h1>This is Simple Line Chart</h1>
      <BarChart
        style={{
          width: "100%",
          minWidth: "600px",
          maxHeight: "400px",
          aspectRatio: 1.618,
        }}
        stackOffset="sign"
        responsive
        data={data}
      >
        <XAxis />
        <YAxis yAxisId={"pv-data"} orientation="left" />
        <YAxis yAxisId={"amt-data"} orientation="right" />
        <Tooltip />
        <Legend />
        <Brush height={30} />
        <ReferenceLine stroke="black" y={0} />
        <Bar dataKey="uv" fill="green" background>
          {data.map((item, index) => (
            <Cell
              onClick={() => onClickHandler(index)}
              cursor={"pointer"}
              key={index}
              fill={active === index ? "orange" : "green"}
            />
          ))}
        </Bar>
        <Bar yAxisId={"pv-data"} dataKey="pv" fill="yellow" minPointSize={5} />
        <Bar yAxisId={"amt-data"} dataKey="amt" fill="pink" />
      </BarChart>
    </>
  );
}

// #region Sample data
const data = [
  {
    date: "2000-01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2000-06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: "2000-07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: "2000-08",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-09",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-10",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-11",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-12",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

// #endregion
function monthTickFormatter(tickData) {
  const date = new Date(tickData);
  return String(date.getMonth() + 1);
}

function renderQuarterTick(tickData) {
  const {
    x,
    y,
    payload: { value, offset },
    width,
    visibleTicksCount,
  } = tickData;

  const date = new Date(value);
  const month = date.getMonth();
  const quarterNumber = Math.floor(month % 3) + 1;

  if (month % 3 === 1) {
    return (
      <text
        x={x + width / visibleTicksCount / 2 - offset}
        y={y}
        textAnchor="middle"
      >{`Q${quarterNumber}`}</text>
    );
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX =
      Math.floor(isLast ? x - offset + width / visibleTicksCount : x - offset) +
      0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
}

// const renderQuarterTick = (tickProps) => {
//   const { x, y, payload, width, visibleTicksCount } = tickProps;
//   const { value, offset } = payload;
//   const date = new Date(value);
//   const month = date.getMonth();
//   const quarterNo = Math.floor(month / 3) + 1;

//   if (month % 3 === 1) {
//     return (
//       <text
//         x={x + width / visibleTicksCount / 2 - offset}
//         y={y - 4}
//         textAnchor="middle"
//       >{`Q${quarterNo}`}</text>
//     );
//   }

// const isLast = month === 11;

// if (month % 3 === 0 || isLast) {
//   const pathX =
//     Math.floor(isLast ? x - offset + width / visibleTicksCount : x - offset) +
//     0.5;

//   return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
// }
// return null;
// };

export const BarChartWithMultiXAxis = () => {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
      <XAxis
        dataKey="date"
        axisLine={false}
        tickLine={false}
        interval={0}
        tick={renderQuarterTick}
        height={1}
        scale="band"
        xAxisId="quarter"
      />
      <YAxis width="auto" />
      <Tooltip />
      <Legend wrapperStyle={{ paddingTop: "1em" }} />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};
