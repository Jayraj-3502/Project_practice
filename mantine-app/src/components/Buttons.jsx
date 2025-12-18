import {
  ActionIcon,
  Button,
  CopyButton,
  FileButton,
  Group,
  Input,
  Slider,
  Text,
} from "@mantine/core";
import { useStyles } from "../Constant";
import React, { useState } from "react";

function Buttons() {
  const [active, setActive] = useState(0);
  const [copyValue, setCopyValue] = useState("");
  const [fileValue, setFileValue] = useState(null);
  const { classes, cx } = useStyles();
  return (
    <>
      {/* <Button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
      >
        This is button
      </Button>
      <Button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
      >
        This is button
      </Button>
      <Text className={classes.text}>This is a text</Text>
      <Slider /> */}
      {/* <Input
        onChange={(event) => {
          setCopyValue(event.target.value);
        }}
      />
      <CopyButton value={copyValue}>
        {({ copied, copy }) => (
          <Button color={copied ? "blue" : "green"} onClick={copy}>
            {copied ? "Trying to copy" : "Copied"}
          </Button>
        )}
      </CopyButton> */}

      <Group position="center">
        <FileButton onChange={setFileValue} accept="image/png, image/jpg">
          {(props) => <Button {...props}>Upload File</Button>}
        </FileButton>
        {fileValue && <Text>File Name: {fileValue.name}</Text>}
      </Group>
    </>
  );
}

export default Buttons;
