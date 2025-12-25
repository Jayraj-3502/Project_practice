import { Select } from "@mantine/core";
import React, { useState } from "react";

function DropDown() {
  const menuItems = [
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "next", label: "Next" },
  ];

  const [menuFirst, setMenuFirst] = useState(menuItems);
  const [menuSecond, setMenuSecond] = useState(menuItems);

  //   function onChangeSelect(selector, value) {
  //     console.log(selector, value);
  //     if (selector === 1) {
  //       setMenuSecond(
  //         menuItems.filter((item) => {
  //           return item.value !== value;
  //         })
  //       );
  //     } else {
  //       setMenuFirst(
  //         menuItems.filter((item) => {
  //           return item.value !== value;
  //         })
  //       );
  //     }
  //   }

  const firstSelector = (value) => {
    setMenuSecond(
      menuItems.filter((item) => {
        return item.value !== value;
      })
    );
  };

  const secondSelector = (value) => {
    setMenuFirst(
      menuItems.filter((item) => {
        return item.value !== value;
      })
    );
  };

  return (
    <div className="flex flex-row gap-5">
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={menuFirst}
        onChange={firstSelector}
      />

      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={menuSecond}
        onChange={secondSelector}
      />
    </div>
  );
}

export default DropDown;
