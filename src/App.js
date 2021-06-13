import React, { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [hoverProps, isHover] = useHover();
  const active = useActive(1);

  console.log('App render...');
  const T = ({show}) => {
    console.log('render T');
    return <div><br/>HOVER STATUS =  {show ? "YES" : 'NO'}</div>;
  }
  const M = useMemo(() => T, [isHover]);

  return (
    <div style={{backgroundColor: '#ddeeff'}} {...hoverProps}>
      <M show={isHover}/>
      <div>{`toggle active each 2s= ${active}`}</div>
    </div>
  );
}

function useActive(param1) {
  console.log("useActive");
  const [active, setActive] = useState(null);

  setTimeout(() => setActive(!active), 2000);

  return active;
}

function useHover() {
  console.log("useHover");
  const [isHover, setIsHover] = useState(false);

  const onMouseLeave = () => setIsHover(false);
  const onMouseEnter = () => setIsHover(true);

  return [{ onMouseLeave, onMouseEnter }, isHover];
}

export default App;
