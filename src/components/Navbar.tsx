import { Flex, HStack, Heading } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} py={"15px"} px={"20px"}>
        <Flex>
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
