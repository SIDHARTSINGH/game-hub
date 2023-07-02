import { HStack, Heading } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
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
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
