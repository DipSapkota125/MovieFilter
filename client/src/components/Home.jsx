import React from "react";
import Movie from "./Movie";
import Search from "./Search";
// import { AppContext } from "../context/context";

const Home = () => {
  // const name = useContext(AppContext);

  return (
    <>
      <div className="container">
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
