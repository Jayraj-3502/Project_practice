import { Anchor } from "@mantine/core";

function Navigation() {
  return (
    <>
      <Anchor href="https://mantine.dev/" target="_blank">
        Mantine docs
      </Anchor>

      <Anchor component="button" type="button">
        Anchor as button
      </Anchor>
    </>
  );
}

export default Navigation;
