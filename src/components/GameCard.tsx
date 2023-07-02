import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageurl from "../services/image-url";
import noImagePlaceholder from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const cardImageUrl = getCroppedImageurl(game.background_image);

  return (
    <Card>
      <Image src={cardImageUrl ? cardImageUrl : noImagePlaceholder} />
      <CardBody p={4}>
        <HStack justifyContent={"space-between"} mb={"2"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"25px"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
