// 1. Implementing Dark Mode

// 1.1 add file theme.ts

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { buttonTheme } from "./components/ColorModeSwitch";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config, components: { Button: buttonTheme } });

export default theme;

// 1.2 import 'theme' in main.tsx
// 1.3 <ChakraProvider theme={theme}>
//      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//          <App />
//     </ChakraProvider>
