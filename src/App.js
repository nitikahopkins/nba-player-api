import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
//import { Card } from "@material-ui/core";
import SimpleCard from "./Components/SimpleCard";
import NavBar from "./Components/NavBar";

function App() {
  const [player, setPlayer] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("ANTETOKOUNMPO");
  console.log(query);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://www.balldontlie.io/api/v1/players?search=${query}`
      );
      console.log(response);
      setPlayer(response.data.data);
      // console.log(player);
      // console.log(response.data.id);
    }
    getData();
  }, [toggle]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <input onChange={(event) => setQuery(event.target.value)} />
        <button onClick={() => setToggle(!toggle)}>Search</button> */}
        <NavBar
          setQuery={setQuery}
          setToggle={setToggle}
          toggle={toggle}
        ></NavBar>
        <p>{query}</p>
        <div>
          {player.map((player) => {
            return (
              <SimpleCard key={player.id} player={player}>
                {/* <h1>{player.first_name}</h1>
                <h3>{player.position}</h3>
                <h3>{player.team.abbreviation}</h3>
                <h3>{player.team.division}</h3>
                <h3>{player.team.city}</h3>
                 */}
              </SimpleCard>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
