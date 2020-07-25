import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(async (res) => {
      if (res.status !== 200) {
        setData("uh oh error!");
      }
      const data = await res.json();
      setData(data);
    });
  }, [setData, url]);

  return [data];
};

function App() {
  const [users] = useFetch("/api/users");

  console.log("users: ", users);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
