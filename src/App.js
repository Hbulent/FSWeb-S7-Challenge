import React from "react";
import * as yup from "yup";
import Form from "./component/Form";
import Header from "./component/Header";
import Store from "./component/Store";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="baslık">
          {" "}
          <h1>Teknolojik Yemekler</h1>
        </div>
        <div className="links">
          <Link className="link" to="/">
            Ana Sayfa
          </Link>
          <Link className="link" to="/pizza">
            Sipariş
          </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/pizza" component={Form} />
      </Switch>
    </>
  );
};
export default App;
