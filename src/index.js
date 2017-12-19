import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import rootReducer from "./reducers";
import App from "./components/App/App";
import Stack from "./components/Stack/Stack";
import { setStack } from "./actions";
import "./index.css";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(setStack({ id: 0, title: "example", cards: [] }));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/stack" component={Stack} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
