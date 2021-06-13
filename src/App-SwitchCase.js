import React, { useState } from "react";

import "./App.css";

function App() {
  return (<LoginComponent />);
}

class LoginComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Get>
          {(kq_tra_ve, tham_so_2, tham_so_3) => {

            if (kq_tra_ve === 1) {
              return `COMPONENT CUA PHUC`;
            }

            if (kq_tra_ve === 2) {
              return `COMPONENT CUA HAI`;
            }

          }}
        </Get>
      </div>
    );
  }
}

function Get({ children }) {
  const [a, setA] = useState(1);

  // ví dụ chạy 1 hàm async AXIOS: sau2 giây có kết quả
  setTimeout(() => {
    setA(2);
  }, 2000);
  
  const tham_so_2 = "a";
  const tham_so_3 = "b";
  
  return (
    <div>
      <br />
       {children(a, tham_so_2, tham_so_3)}
      <br />
    </div>
  );
}

export default App;
