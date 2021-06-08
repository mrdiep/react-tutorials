import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { Provider } from "react-redux";

function loginXReducer(
  currentState = { username: "diep", arr1: { arr: [1, 2, 3] } },
  action
) {
  console.log(currentState, action);
  if (action.type === "V") {
    currentState.arr1.arr.push(4);
  }
  return { ...currentState }; //shallow cline
}

const store = createStore(
  combineReducers({ loginX: loginXReducer }),
  // {newStateFromX: 'Hai-Bang-Phuc'},
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
