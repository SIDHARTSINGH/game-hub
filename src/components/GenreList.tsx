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
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  // using a generic data fetching hook
  //    rename destructred property using alias {data : ganres}
  const { data: genres, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinner />}
      <Heading size={"lg"} mt={"5"} mb={"2"}>
        Genres
      </Heading>
      <List py={"2"}>
        {genres.map((genre) => (
          <ListItem key={genre.id} py={"6px"}>
            <HStack>
              <Image
                src={getCroppedImageurl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"full"}
                // images will be scaled to fit the container while preserving the aspect ratio
                objectFit={"cover"}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
