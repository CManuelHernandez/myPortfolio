import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/MainPage/MainPage";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <MainPage />
      {/* <About /> */}
    </Router>
  );
}

export default App;
