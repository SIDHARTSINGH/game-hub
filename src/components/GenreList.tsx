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
}

const GenreList = ({ onSelectGenre }: Props) => {
  // using a generic data fetching hook
  //    rename destructred property using alias {data : ganres}
  const { data: genres, isLoading } = useGenres();

  return (
    <List py={"2"}>
      {isLoading && <Spinner />}
      <Heading size={"lg"} py={"5"}>
        Genres
      </Heading>
      {genres.map((genre) => (
        <ListItem key={genre.id} py={"6px"}>
          <HStack>
            <Image
              src={getCroppedImageurl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={"full"}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize={"16px"}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
