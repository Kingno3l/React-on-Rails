import React from "react";
import { Routes, Route } from "react-router-dom";
import RandomMessage from "./src/components/Greeting.js";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<RandomMessage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
