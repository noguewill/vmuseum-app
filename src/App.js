import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NFTday from "./components/NFTday";
import NFTWeekly from "./components/NFTWeekly";
import About from "./components/About";

const App = () => {
  /*   const themes = [
    {
      name: "Ethereal",
      textColor: "text-black",
      stroke: "strokeYellow",
    },
  ]; */
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
          </Route>
          <Route path="/NFToftheday">
            <NFTday />
          </Route>
          <Route path="/NFTweekly">
            <NFTWeekly />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;