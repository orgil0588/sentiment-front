import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  Legend,
} from "recharts";

function App() {
  const [calcData, setCalcData] = useState("");
  const [rawData, setRawData] = useState("");
  const [data, setData] = useState("");
  let left = [];
  let right = [];
  useEffect(() => {
    axios("http://68.183.176.100:8001/api/v1/last-data")
      .then((res) => {
        setCalcData(res.data.data);
        setRawData(res.data.rawData);
      })
      .catch((err) => {
        console.log(err);
      });
    axios("http://68.183.176.100:8001/api/v1/last-data/chart")
      .then((res) => {
        let resData = [];

        res.data.data.map((e) => {
          let obj = {
            name: e.date,
            aud: e.value.aud !== undefined ? e.value.aud * 2 : undefined,
            cad: e.value.cad !== undefined ? e.value.cad * 2 : undefined,
            chf: e.value.chf !== undefined ? e.value.chf * 2 : undefined,
            eur: e.value.eur !== undefined ? e.value.eur * 2 : undefined,
            gbp: e.value.gbp !== undefined ? e.value.gbp * 2 : undefined,
            jpy: e.value.jpy !== undefined ? e.value.jpy * 2 : undefined,
            nzd: e.value.nzd !== undefined ? e.value.nzd * 2 : undefined,
            usd: e.value.usd !== undefined ? e.value.usd * 2 : undefined,
          };
          resData.push(obj);
        });

        setData(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div className="mt-10 ">
      <div className="mx-auto">
        <LineChart
          width={1600}
          height={580}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis dataKey={data.value} />

          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="aud" stroke="#2176AE" />
          <Line type="monotone" dataKey="cad" stroke="#57B8FF" />
          <Line type="monotone" dataKey="chf" stroke="#B66D0D" />
          <Line type="monotone" dataKey="eur" stroke="#FBB13C" />
          <Line type="monotone" dataKey="gbp" stroke="#FE6847" />
          <Line type="monotone" dataKey="jpy" stroke="#B3001B" />
          <Line type="monotone" dataKey="nzd" stroke="#262626" />
          <Line type="monotone" dataKey="usd" stroke="#BC9CB0" />
        </LineChart>
      </div>

      <pre className="mt-10">{JSON.stringify(calcData, undefined, 2)}</pre>
      <div>
        {rawData &&
          rawData.map((e) => {
            return (
              <div className="flex" key={e.pair}>
                <h1>{e.pair} : </h1>
                <p> {e.long}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
