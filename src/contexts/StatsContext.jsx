import { createContext, useState } from "react";

const addStatItem = (statItems, name, bool) => {

  const existingItem = statItems.find((item) => item.name === name);

  // if found, increment quantity
  if (existingItem) {
    return statItems.map((statItem) =>
    statItem.name === name
        ? { ...statItem, [bool]: (statItem[bool] || 0) + 1 }
        : statItem
    );
  }

  return [...statItems, { name, [bool]: 1 }];
};

export const StatsContext = createContext({
  stats: [],
  addToQuizStat: () => {},
});

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState([]);

  const addToQuizStat = (name, bool) => {
    setStats(addStatItem(stats, name, bool));
  }

  const value = {
    stats,
    addToQuizStat
  }

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
}