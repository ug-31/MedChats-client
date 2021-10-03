import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />;
        <Switch>
          {/* <Route path="/nav" component={Navbar} /> */}
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
