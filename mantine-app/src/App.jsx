import { Container, Title, Button, Autocomplete } from "@mantine/core";
import Buttons from "./components/Buttons";
import SliderDemo from "./components/SliderDemo";
import Navigation from "./components/Navigation";
import Layouts from "./components/Layouts";
import DataDisplay from "./components/DataDisplay";
import { Counter } from "./hooks/StateManagement";

function App() {
  return (
    <Container>
      {/* <Buttons /> */}
      {/* <SliderDemo /> */}
      {/* <Navigation /> */}
      {/* <Layouts /> */}
      <DataDisplay />
      {/* <Counter /> */}
    </Container>
  );
}

export default App;
