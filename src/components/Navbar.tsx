import { Flex, HStack, Heading } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

const Navbar = () => {
  return (
    <>
      <HStack py={"15px"} px={"20px"}>
        <Heading
          size="md"
          fontWeight={"850"}
          alignSelf="center"
          px={5}
          letterSpacing={10}
        >
          RAWG
        </Heading>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
