import React, { useState } from "react";

import "./App.css";

const MultiLangContext = React.createContext({});

function App() {
  const [lang, set_lang] = useState("vi");
  return (
    <div>
      <MultiLangContext.Provider value={{ lang }}>
        <RegisterComponent />
        <br/>
        <button onClick={() => set_lang('en')}>TIẾNG ANH</button>
        <button onClick={() => set_lang('vi')}>TIẾNG VIỆT</button>
        
      </MultiLangContext.Provider>
    </div>
  );
}

class RegisterComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TextField en="English Name" vi="Tên Tiếng Việt" />
          <input value="Hai-Bang-Phuc"></input>
        </div>
      </div>
    );
  }
}

function TextField(props) {
  return (
    <MultiLangContext.Consumer>
      {(fptContext) => <label>{props[fptContext.lang]}</label>}
    </MultiLangContext.Consumer>
  );
}

export default App;
