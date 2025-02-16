import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./SingleMovie";
// lesson 210/211/212/213/214/215

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<Movie/>}/>
    </Switch>
  );
}

export default App;
