import React from "react";

const MainNavigation = () => {
  return (
    <div className="flex justify-between fixed top-0 left-0">
      <h1>Logo</h1>
      <div className="flex justify-between">
        <ul>
          <li>Home</li>
        </ul>
        <ul>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
