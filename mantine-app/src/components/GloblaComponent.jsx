import { Global } from "@emotion/react";

function GloblaComponent() {
  return (
    <Global
      styles={(theme) => ({
        body: {
          backgroundColor: "black",
          color: "white",
        },
      })}
    />
  );
}

export default GloblaComponent;
