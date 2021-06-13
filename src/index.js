import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { Provider } from "react-redux";

import { mySaga } from "./mySaga";

function loginXReducer(
  currentState = {
    username: "diep",
    login_form: {username: 'login for phuc'},
    register_form: {username: 'register for hai'},
    
    arr1: { arr: [1, 2, 3] },
    nest: { nest: "aa" },
  },
  action
) {
  console.log(currentState, action);
  if (action.type === "V") {
    currentState.arr1.arr.push(4);
  }

  if (action.type === "USER_FETCH_SUCCEEDED") {
    console.log("success me");
    currentState.nest.nest = "tesst success";
  }

  return { ...currentState }; //shallow cline
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ loginX: loginXReducer }),
  // {loginX: {what: 'what'}},
  composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(mySaga);

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
