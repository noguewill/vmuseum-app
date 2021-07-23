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
    var dayOfMonth = today.getUTCDate() + 1;
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
        setHours(hours);
        setMinutes(minutes);
        setseconds(seconds);
      }
    }, 1000);
  }

  useEffect(() => {
    countdownTimeStart();
    const loader = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <>
      <div
        className={`absolute w-screen h-screen flex flex-col justify-center items-center 
        ${loading ? "block" : "hidden"} bg-white z-50`}
      >
        <img
          className="w-24 h-20 mb-5"
          src="../assets/etherealAssets/nftxpoLogo.png"
          alt=""
        />
        <BarLoader color={"#946a00"} loading={loading} css={""} size={150} />
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              xpoThemes={xpoThemes}
              theme={theme}
              setTheme={setTheme}
              loading={loading}
            />

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
    </>
  );
};

export default App;
