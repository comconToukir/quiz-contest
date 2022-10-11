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
import { useContext } from "react";
import { StatsContext } from "./../../contexts/StatsContext";

const Stats = () => {
  const quizData = useLoaderData().data;
  const { stats } = useContext(StatsContext);
  console.log(stats);

  return (
    <div className="container">
      <div className="stats-container">
        <div>
          <h2>Total Questions</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
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
              <Bar dataKey="total" fill="#ffb511" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h2>Quiz Statistics</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={stats}
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
              <Bar dataKey="correct" fill="#02d6c8" />
              <Bar dataKey="incorrect" fill="#f76800" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
