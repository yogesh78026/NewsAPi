import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./news";
import Nav from "./nav";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
  <>
  <Nav />
    <Route exact path="/International"><News newsName="international" /></Route>
    <Route path="/National"><News newsName="India" /></Route>
    <Route path="/Business"><News newsName="business" /></Route>
    <Route path="/Health"><News newsName="Health" /></Route>
    <Route path="/Sports"><News newsName="Indian Sports" /></Route>
  </>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
