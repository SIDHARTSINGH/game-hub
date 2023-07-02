import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

// Using QueryObject pattern to minimize the number of state variables
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // useState<GameQuery>([] as GameQuery) : ERROR
  // :  Type 'never[]' is missing the following properties from type 'GameQuery': genre, platform
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

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
          lg: "200px 1fr", // 1st column - 200px | 2nd column - all of the rest
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
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => handleSelectGenre(genre)}
            />
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
          <HStack spacing={3} pb={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => handleSelectPlatform(platform)}
            />
            <SortSelector />
          </HStack>

          {/* GameGrid */}
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
