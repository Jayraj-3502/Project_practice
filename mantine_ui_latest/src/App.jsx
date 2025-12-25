import { useState } from "react";
import "./App.css";
// import {
//   DidUpdate,
//   ForceUpdate,
//   IsomorphicEffect,
//   Logger,
//   Mounted,
// } from "./hooks/LifeCycle";
import { Counter, RandomId } from "./hooks/StateManagement";
import DropDown from "./components/DropDown";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="h-screen w-full p-5 flex flex-col justify-center items-center gap-5">
      {/* <Counter /> */}
      {/* <DidUpdate /> */}
      {/* <ForceUpdate />
      <IsomorphicEffect />
      <Logger />
      <Mounted /> */}
      {/* {visible ? <RandomId /> : ""}

      <button onClick={() => setVisible((prev) => !prev)}>
        Toggle Visible
      </button> */}

      <DropDown />
    </div>
  );
}

export default App;
