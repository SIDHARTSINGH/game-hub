import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageurl from "../services/image-url";

const GenreList = () => {
  // using a generic data fetching hook
  //    rename destructred property using alias {data : ganres}
  const { data: genres, isLoading } = useGenres();

  return (
    <List>
      {isLoading && <Spinner />}
      {genres.map((genre) => (
        <ListItem key={genre.id} py={"6px"}>
          <HStack>
            <Image
              src={getCroppedImageurl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={"full"}
            />
            <Text fontSize={"16px"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
