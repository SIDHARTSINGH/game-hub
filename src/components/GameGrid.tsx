import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Box padding={2}>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
          {isLoading &&
            skeletons.map((s) => (
              <GameCardContainer>
                <GameCardSkeleton key={s} />
              </GameCardContainer>
            ))}
          {games.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GameGrid;