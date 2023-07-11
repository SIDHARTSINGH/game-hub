import { Grid, GridItem, HStack, Heading, Show, Text } from "@chakra-ui/react";

import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

// Using QueryObject pattern to minimize the number of state variables
// undefined : absence of a value  : same as ?
// null : intentional absence of a value

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        // define width for columns
        templateColumns={{
          // small devices: 1 column will be rendered
          base: "1fr", // 1 fraction

          // large devices: 2 columns
          lg: "220px 1fr", // 1st column - 200px | 2nd column - all of the rest
        }}
      >
        <GridItem area="nav">
          {/* Navbar */}
          <Navbar />
        </GridItem>

        <Show above="lg">
          {/* above="lg" : Render on large screens and above */}
          <GridItem area="aside" pl={10}>
            {/* GenreList */}
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main" pr={10}>
          {/* Heading */}
          <Heading>
            <Text fontSize={"7xl"}>New and trending</Text>
            <Text fontSize={"md"} fontWeight={"normal"} pt={2} pb={10}>
              Based on player counts and release date
            </Text>
          </Heading>

          {/* PlatformSelector */}
          <HStack spacing={3} pb={6}>
            <PlatformSelector />
            <SortSelector />
          </HStack>

          {/* GameGrid */}
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
