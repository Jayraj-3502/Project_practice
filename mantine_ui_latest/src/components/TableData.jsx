import { Table } from "@mantine/core";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

function TableData() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((item) => (
            <tr key={item.position}>
              <td>{item.position}</td>
              <td>{item.name}</td>
              <td>{item.symbol}</td>
              <td>{item.mass}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableData;
