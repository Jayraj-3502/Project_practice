import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Grid, MantineProvider } from "@mantine/core";
import GloblaComponent from "./components/GloblaComponent.jsx";
// import { Notifications } from "@mantine/notifications";
// import "@mantine/core/styles.css";
// import "@mantine/notifications/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        globalStyles: () => ({
          body: {
            color: "white",
          },
          [Grid.Col]: {
            border: "1px solid white",
            backgroundColor: "blue",
          },
        }),
      }}
    >
      {/* // this is global component for adding global styles */}
      {/* <GloblaComponent /> */}
      <App />
    </MantineProvider>
  </StrictMode>
);
