import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageurl from "../services/image-url";
import useGameQueryStore from "../services/store";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <>
      {isLoading && <Spinner />}
      <Heading size={"lg"} mt={"5"} mb={"2"}>
        Genres
      </Heading>
      <List py={"2"}>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} py={"6px"}>
            <HStack>
              <Image
                src={getCroppedImageurl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"full"}
                objectFit={"cover"}
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                fontSize={"16px"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
