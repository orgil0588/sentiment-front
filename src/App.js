import React, { useEffect } from "react";
import axios from "axios";

function App() {
  setInterval(() => {
    axios(
      "https://fx-sentimen.herokuapp.com/"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 3600000);

  return <div className="App"></div>;
}

export default App;
