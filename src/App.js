import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <Switch>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Route exact path="/">
          <MainPage />
        </Route>
      </BrowserRouter>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Route exact path="/about">
          <About />
        </Route>
      </BrowserRouter>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </Switch>
  );
}

export default App;
