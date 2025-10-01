import React, { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const data = {
    name: "Zain",
    age: 19,
    city: "Karachi",
  };
//   const data = "Zain";
  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
};

export default UserContext;
