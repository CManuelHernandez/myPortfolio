import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );
}

export default App;
