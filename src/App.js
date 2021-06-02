import React from 'react';
import { createStore, combineReducers } from 'redux';

import { connect, Provider } from 'react-redux';
import {v4} from 'uuid';
import './App.css';

function loginXReducer(currentState = { username: 'diep', arr1: {arr: [1,2,3]} }, action) {
  console.log(currentState, action);
  if (action.type === "V") {
    currentState.arr1.arr.push(4);
  }
  return {...currentState}; //shallow cline
}

const store = createStore(combineReducers({
  loginX : loginXReducer
}));

function App() {
  return (
    <div className="App">
      Hello out scope
      <Provider store={store}>
          <LoginWithHOC />
      </Provider>
    </div>
  );
}

class LoginComponent extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <p>USERNAME = {this.props.loginX.username}</p>
        {this.props.loginX.arr1.arr.map(x => <p key={`${v4()}`}>{x}</p>)}
        <button onClick={() => this.props.actionX("V", "B")}>CLICK ME</button>
      </div>
    );
  }
}

function LoginComponent2(props) {
    return (
      <div>
        <p>USERNAME = {props.loginX.username}</p>
        {props.loginX.arr1.arr.map(x => <p key={`${v4()}`}>{x}</p>)}
        <button onClick={() => props.actionX("V", "B")}>CLICK ME</button>
      </div>
    );
  }

const HOC = connect((currentStore) => ({loginX: currentStore.loginX}), 
(dispatch) => ({
  actionX : (typeN, valueN) => dispatch({type: typeN, valueN})
}));

const LoginWithHOC = HOC(LoginComponent2);

export default App;
