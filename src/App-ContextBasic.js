import React, { useState } from "react";

import "./App.css";

const ThemeContext = React.createContext({
  theme: "green",
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("green");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: setTheme }}>
      <div className="App">
        Hello out scope
        <ChildHasThemeContext />
        <ChildHasThemeContext2 />
        <button onClick={() => setTheme("blue")}> CALL CONTEXT.TOGGLE - OUTSIDE</button>
      </div>
    </ThemeContext.Provider>
  );
}

class ChildHasThemeContext extends React.Component {
  static contextType = ThemeContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    console.log(this.props);
    return (
      <div style={{ height:100, width: 500, backgroundColor: this.context.theme }}>
        <button onClick={() => this.context.toggleTheme("red")}>
          CALL CONTEXT.TOGGLE - INSIDE
        </button>
      </div>
    );
  }
}

function ChildHasThemeContext2() {
  console.log("redender");

  return (
    <ThemeContext.Consumer>
      {(context) => {
        return JSON.stringify(context)
      }}
    </ThemeContext.Consumer>
  );
}


export default App;
