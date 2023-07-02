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

function App() {
  // state variable can either hold a 'Genre' oject or 'null : useState<Genre | null>()
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  // state variable to keeping track of the selected platform
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const handleSelectPlatform = (platform: Platform) => {
    console.log(platform);
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
          <Navbar />
        </GridItem>
        <Show above="lg">
          {/* above="lg" : Render on large screens and above */}
          <GridItem area="aside" pl={10}>
            <GenreList
              onSelectGenre={(genre) => handleSelectGenre(genre)}
              selectedGenre={selectedGenre}
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

          <HStack pb={3}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
          </HStack>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
