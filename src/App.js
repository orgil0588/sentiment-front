import React, { useEffect, useState } from "react";
import axios from "axios";

const useMountEffect = () =>
  useEffect(() => {
    axios("https://fx-sentimen.herokuapp.com/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

function App() {
  const [data, setData] = useState("");
  useMountEffect();
  useEffect(() => {
    const interval = setInterval(() => {
      axios("https://fx-sentimen.herokuapp.com/")
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
}

export default App;
