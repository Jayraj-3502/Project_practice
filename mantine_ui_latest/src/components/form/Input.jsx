import { Autocomplete, Button, Center, Container } from "@mantine/core";
import React from "react";
import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  function printValue() {
    console.log(value);
  }
  return (
    <div>
      <Container>
        <Center>
          <Autocomplete
            value={value}
            onChange={setValue}
            label="Auto Complete Label"
            placeholder="This is placeholder"
            data={[]}
            hoverOnSearchChange
          />

          <Button onClick={printValue}>Click Me</Button>
        </Center>
      </Container>
    </div>
  );
}

export default Input;
