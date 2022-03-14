import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import { Routes, Route, Link } from "react-router-dom";
const ChartContainer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://68.183.176.100:8001/api/v1/history").then((res) => {
      const data = res.data.data;
      const listObj = {
        aud: data.audArr[data.audArr.length - 1].value,
        cad: data.cadArr[data.cadArr.length - 1].value,
        usd: data.usdArr[data.usdArr.length - 1].value,
        nzd: data.nzdArr[data.nzdArr.length - 1].value,
        chf: data.chfArr[data.chfArr.length - 1].value,
        eur: data.eurArr[data.eurArr.length - 1].value,
        gbp: data.gbpArr[data.gbpArr.length - 1].value,
        jpy: data.jpyArr[data.jpyArr.length - 1].value,
      };

      setList(listObj);
    });
  }, []);

  let entries = Object.entries(list);
  const sorted = entries.sort((a, b) => b[1] - a[1]);

  return (
    <div className="">
      <div className="absolute z-50 top-10 right-14">
        <div className="flex flex-col space-y-4">
          {sorted.map((e) => {
            return (
              <div
                className="flex px-2 py-1"
                key={e}
                style={{
                  backgroundColor: `
                    ${
                      e[0] === "aud"
                        ? "#2C73D2"
                        : "" || e[0] === "cad"
                        ? "#FFFFFF"
                        : "" || e[0] === "chf"
                        ? "#16a34a"
                        : "" || e[0] === "jpy"
                        ? "#C25E5E"
                        : "" || e[0] === "eur"
                        ? "#F9F871"
                        : "" || e[0] === "gbp"
                        ? "#00C9A7"
                        : "" || e[0] === "usd"
                        ? "#845EC2"
                        : "" || e[0] === "nzd"
                        ? "#AD5E00"
                        : ""
                    }`,
                }}
              >
                <h1 className={`mr-4 font-medium`}>{e[0] + ": "}</h1>
                <p className="font-medium">{e[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default ChartContainer;
