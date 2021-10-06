import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
