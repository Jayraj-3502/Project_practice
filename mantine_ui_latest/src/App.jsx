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
import { MantineProvider } from "@mantine/core";
import TableData from "./components/TableData";
import TableCss from "./components/TableCss";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [visible, setVisible] = useState(true);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const client_id =
    "690673299456-u03ea8hp5h9jd3e4m87dd408p7j5e2la.apps.googleusercontent.com";

  function toggleTheme() {
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  }

  // useGoogleOneTapLogin({
  //   onError: (error) => console.log(error),
  //   onSuccess: (response) => console.log(response),
  //   googleAccountConfigs: {
  //     client_id,
  //   },
  // });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: currentTheme,
      }}
    >
      {/* // this is global component for adding global styles */}
      {/* <GloblaComponent /> */}
      {/* <div className="h-screen w-full p-5 flex flex-col justify-center items-center gap-5"> */}
      {/* <Counter /> */}
      {/* <DidUpdate /> */}
      {/* <ForceUpdate /> */}
      {/* <IsomorphicEffect /> */}
      {/* <Logger /> */}
      {/* <Mounted /> */}
      {/* {visible ? <RandomId /> : ""}*/}

      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}

      {/* <DropDown /> */}
      {/* <TableData /> */}
      {/* <TableCss /> */}
      {/* </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
