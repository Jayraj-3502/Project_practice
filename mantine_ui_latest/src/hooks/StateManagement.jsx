import { useCounter } from "@mantine/hooks";
import { Button, Group, Text } from "@mantine/core";
import { useId } from "react";

export function Counter() {
  const [counter, counterHandler] = useCounter(0, { min: -5, max: 5 });

  return (
    <>
      <Text>Counter Value: {counter}</Text>
      <Group>
        <Button onClick={counterHandler.increment}>Increment</Button>
        <Button onClick={counterHandler.decrement}>Decrement</Button>
        <Button onClick={counterHandler.reset}>Reset</Button>
      </Group>
    </>
  );
}

export function RandomId() {
  const uuid = useId("this is id what you think about it");

  return (
    <div>
      <Text>Id is: {uuid}</Text>
    </div>
  );
}
