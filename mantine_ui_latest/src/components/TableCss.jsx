import { Button } from "@mantine/core";
import React from "react";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

function TableCss() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {elements.map((element) => (
        <Button key={element.position}>{element.name}</Button>
      ))}
      <div className="col-span-3 grid grid-cols-subgrid">
        <Button key="45" className="col-start-3">
          Titanium
        </Button>
      </div>
    </div>
  );
}

export default TableCss;
