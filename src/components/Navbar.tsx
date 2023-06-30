import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding="5px">
        <Flex>
          <Image src={logo} boxSize="45px" />
          <Heading size="md" alignSelf="center">
            rawg
          </Heading>
        </Flex>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
