// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
