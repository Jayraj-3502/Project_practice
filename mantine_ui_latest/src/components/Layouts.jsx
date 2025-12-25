import { Grid } from "@mantine/core";
import React from "react";

function Layouts() {
  return (
    <Grid gutter="xs" align="flex-end" columns={20}>
      <Grid.Col span={4} bg={"red"} order={3} style={{ minHeight: 80 }}>
        1
      </Grid.Col>
      <Grid.Col span={4} bg={"blue"} order={4}>
        2
      </Grid.Col>
      <Grid.Col span={4} bg={"green"} order={1} style={{ minHeight: 180 }}>
        3
      </Grid.Col>
      <Grid.Col span={4} bg={"yellow"} order={2}>
        4
      </Grid.Col>
      <Grid.Col span={4} bg={"pink"} order={3}>
        5
      </Grid.Col>
    </Grid>
  );
}

export default Layouts;
