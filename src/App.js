import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
