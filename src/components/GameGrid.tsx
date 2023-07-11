import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import useGameQueryStore from "../services/store";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      {/* Error */}
      {error && <Text>{error.message}</Text>}

      {/* GameGrid */}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        // undefined converted to boolean false
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {/* map each page to a react fragment */}
          {games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {/* map each game to a gameCardContainer */}
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
