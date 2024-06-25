// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/profile" component={Profile} />
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <Counter name="Your Name" handleEvent={handleEvent} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
