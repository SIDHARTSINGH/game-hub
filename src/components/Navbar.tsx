import { Flex, HStack, Heading, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"15px"}>
        <Flex>
          {/* <Image src={logo} boxSize={"50px"} /> */}
          <Heading
            size="md"
            fontWeight={"850"}
            alignSelf="center"
            px={5}
            letterSpacing={10}
          >
            RAWG
          </Heading>
        </Flex>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
