import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import xpoThemes from "./components/themeData";
import Home from "./components/Home";
import NFTday from "./components/NFTday";
import NFTWeekly from "./components/NFTWeekly";
import About from "./components/About";
import BarLoader from "react-spinners/BarLoader";
const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(0);

  function countdownTimeStart() {
    var today = new Date();
    var dayOfMonth = today.getUTCDate();
    const countDownDate = new Date(
      `july ${dayOfMonth}, 2021 15:00:00`
    ).getTime();

    // Update the count down every 1 second
    setInterval(function () {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      /* const distance = countDownDate - now; */
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      setHours(hours);
      setMinutes(minutes);
      setseconds(seconds);

      // If the count down is over, write some text
      if (distance <= 0) {
        dayOfMonth++;
      }
    }, 1000);
  }

  useEffect(() => {
    countdownTimeStart();
    const loader = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => {
      clearTimeout(loader);
    };
  }, []);

  /*  const dYeah = [...theme]; */
  console.log(theme + 1);

  return (
    <>
      {loading ? (
        <div className="absolute w-screen h-screen flex flex-col justify-center items-center">
          <img
            className="w-40 h-40"
            src="../assets/etherealAssets/etherealLogoAbout.png"
            alt=""
          />
          <BarLoader color={"#946a00"} loading={loading} css={""} size={150} />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home xpoThemes={xpoThemes} theme={theme} setTheme={setTheme} />

              <About xpoThemes={xpoThemes} theme={theme} />
            </Route>
            <Route path="/NFToftheday">
              <NFTday xpoThemes={xpoThemes} theme={theme} />
            </Route>
            <Route path="/NFTweekly">
              <NFTWeekly
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                xpoThemes={xpoThemes}
                theme={theme}
              />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
