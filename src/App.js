import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
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
  const xpoThemes = [
    {
      themeName: "ETHEREAL",
      themeBG: "../assets/etherealBG.jpg",
    },
  ];
  const [theme, setTheme] = useState(xpoThemes[0]);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  function countdownTimeStart() {
    var countDownDate = new Date("july 8, 2021 20:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      setHours(hours);
      setMinutes(minutes);
      setseconds(seconds);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }
  countdownTimeStart();
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home theme={theme} />

            <About />
          </Route>
          <Route path="/NFToftheday">
            <NFTday />
          </Route>
          <Route path="/NFTweekly">
            <NFTWeekly hours={hours} minutes={minutes} seconds={seconds} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
