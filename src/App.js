import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      // .get("http://68.183.176.100:8001/api/v1/history")
      .get("http://localhost:8001/api/v1/history")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="">
      <div className="absolute z-50 top-10 left-10">
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#2C73D2" }}
          ></div>
          <p className="font-medium text-white">AUD</p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#ffffff" }}
          ></div>
          <p className="font-medium text-white">CAD</p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#16a34a" }}
          ></div>
          <p className="font-medium text-white">CHF</p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#C25E5E" }}
          ></div>
          <p className="font-medium text-white">JPY</p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#F9F871" }}
          ></div>
          <p className="font-medium text-white">EUR</p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#00C9A7" }}
          ></div>
          <p className="font-medium text-white">GBP</p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#845EC2" }}
          ></div>
          <p className="font-medium text-white">USD</p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#AD5E00" }}
          ></div>
          <p className="font-medium text-white">NZD</p>
        </div>
        <div>
          <div></div>
          <p></p>
        </div>
        <div>
          <div></div>
          <p></p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default App;
