import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter basename={"myPortfolio"}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
