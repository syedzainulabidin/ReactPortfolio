import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Home = () => {
  let user = useContext(DataContext);
  return (
    <div>
      <h1>HOME {user.name}</h1>
    </div>
  );
};

export default Home;
