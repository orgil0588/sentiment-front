import React, { useEffect, useState } from "react";
import axios from "axios";
function Table(props) {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("http://68.183.176.100:8001/api/v1/history").then((res) => {
      let datas = res.data;
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {data === "" ? (
        <div>Loading</div>
      ) : (
        data.audArr.map((e, i) => {
          console.log(e);
        })
      )}
    </div>
  );
}

export default Table;
