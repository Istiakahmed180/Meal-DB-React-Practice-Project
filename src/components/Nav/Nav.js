import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img src="https://images.apilist.fun/the_meal_db_api.png" alt="" />
      <div>
        <a href="#">Home</a>
        <a href="#">API</a>
        <a href="#">Forum</a>
        <a href="#">About</a>
      </div>
    </div>
  );
};

export default Nav;
