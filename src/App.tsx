import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          {/* above="lg" : Render on large screens and above */}
          <GridItem area="aside" bg={"gold"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"dodgerblue"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;