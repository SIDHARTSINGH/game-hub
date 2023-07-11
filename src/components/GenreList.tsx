import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageurl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, isLoading } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
