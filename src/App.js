// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
   	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://spotmusic-backend-prod-5apdteifea-ue.a.run.app")
		 .then((res) => res.json())
      		 .then((result) => setData(result))
      		 .catch((err) => console.log("error"));
	}, []);
  return (
    <div id= "divTable" className="divTable">
      <h1>SpotMusic</h1>
      {data &&
        data.map((element, index) => (
        <div className="headRow">
          <div className="divCell" align="center">{element.song_id}</div>
          <div className="divCell divCellName">{element.title}</div>
          <div className="divCell divCellName">{element.artist}</div>
          <div className="divCell" align="center">{element.genre}</div>
          </div>
        ))}
    </div>
  );

}

export default App;

