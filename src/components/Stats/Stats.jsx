import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

import "./Stats.scss";

const Stats = () => {
  const quizData = useLoaderData().data;
  console.log(quizData);

  return (
    <div className="container">
      <div className="stats-container">
        <div>
          <h2>Total Questions</h2>
          <BarChart
            width={500}
            height={500}
            data={quizData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#01d5c8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
