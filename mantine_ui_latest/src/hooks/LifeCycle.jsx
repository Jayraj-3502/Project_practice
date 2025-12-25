// import { Button, Text, Group } from "@mantine/core";
// import {
//   useCounter,
//   useDidUpdate,
//   useForceUpdate,
//   randomId,
//   useIsomorphicEffect,
//   useLogger,
//   useMounted,
// } from "@mantine/hooks";
// import { useState } from "react";

// export function DidUpdate() {
//   const [value, valueHandler] = useCounter(0, { min: -10, max: 10 });
//   useDidUpdate(() => {
//     console.log("This is done!");
//   }, [value]);

//   return (
//     <div className="w-fit h-fit bg-gray-700 p-5 rounded-2xl text-white">
//       <div>The value is : {value}</div>
//       <div className="flex flex-row gap-3">
//         <Button
//           onClick={valueHandler.increment}
//           className="bg-blue-500 px-3 py-1 text-white rounded-full font-bold"
//         >
//           Increase
//         </Button>
//         <Button
//           onClick={valueHandler.decrement}
//           className="bg-blue-500 px-3 py-1 text-white rounded-full font-bold"
//         >
//           Decrease
//         </Button>
//         <Button
//           onClick={valueHandler.reset}
//           className="bg-blue-500 px-3 py-1 text-white rounded-full font-bold"
//         >
//           Reset
//         </Button>
//       </div>
//     </div>
//   );
// }

// export function ForceUpdate() {
//   const forceUpdate = useForceUpdate();

//   return (
//     <Group justify="center">
//       <Text>{randomId()}</Text>
//       <Button onClick={forceUpdate}>Force update</Button>
//     </Group>
//   );
// }

// export function IsomorphicEffect() {
//   useIsomorphicEffect(() => {
//     console.log("This is running!");
//   });

//   return null;
// }

// export function Logger() {
//   const [count, setCount] = useState(0);
//   useLogger("Demo", [{ count, hello: "world" }]);
//   return (
//     <Button onClick={() => setCount((c) => c + 1)}>
//       Update state ({count})
//     </Button>
//   );
// }

// export function Mounted() {
//   // const mounted = useMounted();
//   return (
//     <div>{mounted ? "Component is mounted" : "Component is not mounted"}</div>
//   );
// }
