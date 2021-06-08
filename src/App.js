import React from "react";

import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import * as A from './actions'

import { v4 } from "uuid";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello out scope
      <LoginWithHOC />
    </div>
  );
}


class LoginComponent extends React.Component {
  componentDidMount() {
    //this.props.callLogicMaKPhaiCuaUIAsync();

  }
  render() {
    console.log(this.props);

    return (
      <div>
        <p>USERNAME = {this.props.loginX.username}</p>
        {this.props.loginX.arr1.arr.map((x) => (
          <p key={`${v4()}`}>{x}</p>
        ))}
        <button onClick={() => this.props.actionX("V", "B")}>CLICK ME</button>
        <button onClick={() => this.props.actionT.incrementAsync()}>CLICK 2</button>
      </div>
    );
  }
}

function LoginComponent2(props) {
  return (
    <div>
      <p>USERNAME = {props.loginX.username}</p>
      {props.loginX.arr1.arr.map((x) => (
        <p key={`${v4()}`}>{x}</p>
      ))}
      <button onClick={() => props.actionX("V", "B")}>CLICK ME</button>
    </div>
  );
}

const HOC = connect(
  (currentStore) => ({ loginX: currentStore.loginX }),
  (dispatch) => ({
    actionT: bindActionCreators(A, dispatch),
    actionX: (typeN, valueN) => dispatch({ type: typeN, valueN }),
  })
);

const LoginWithHOC = HOC(LoginComponent);

export default App;
