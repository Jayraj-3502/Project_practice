import { Anchor, Breadcrumbs, Burger } from "@mantine/core";
import { useState } from "react";

function Navigation() {
  // const items = [
  //   { title: "Mantine", href: "#" },
  //   { title: "Mantine hooks", href: "#" },
  //   { title: "use-id", href: "#" },
  // ].map((item, index) => (
  //   <Anchor href={item.href} key={index}>
  //     {item.title}
  //   </Anchor>
  // ));

  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <Burger
        title="Click to opne and close menu"
        opened={opened}
        onClick={() => setOpened((prev) => !prev)}
        color="white"
      />
      {/* <Breadcrumbs
        className="text-4xl"
        separator="->"
        styles={() => ({
          separator: {
            color: "red",
          },
          root: {
            color: "white",
          },
          breadcrumb: {
            color: "white",
          },
        })}
      >
        {items}
      </Breadcrumbs> */}
      {/* <Anchor className="text-4xl" href="https://mantine.dev/" target="_blank">
        <div className="text-4xl">This is the end</div>
      </Anchor>

      <Anchor component="button" type="button">
        Anchor as button
      </Anchor> */}
    </>
  );
}

export default Navigation;
