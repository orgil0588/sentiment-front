import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import { Routes, Route, Link } from "react-router-dom";
import Table from "./Table.js";
import ChartContainer from "./ChartContainer";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<ChartContainer />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
};

export default App;
