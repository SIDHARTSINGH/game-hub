import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

// Customize Dark Mode Switch

// 1. define styles
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
const transparent = defineStyle({
  // Light Color Mode
  background: "transparent",
  color: "gray.400",

  // Dark Color Mode
  _dark: {
    color: "gray.400",
    background: "transparent",
  },

  // on hover
  _hover: {
    background: "blackAlpha.100",
  },
});
// 2. export the styleconfig
export const buttonTheme = defineStyleConfig({
  variants: { transparent },
});
// 3. import styleConfig in 'theme.ts' file
//      add to extendTheme({...}) as,
//    ... extendTheme({ config, ... components: { Button: buttonTheme } });

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack justifyContent={"space-between"} paddingX={10}>
        <IconButton
          aria-label="Color Mode Switch"
          size={"lg"}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          variant="transparent"
          onClick={toggleColorMode}
        />
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
