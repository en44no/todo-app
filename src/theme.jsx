import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#e3e3e3", "#272d38")(props),
        color: mode("black", "white")(props),
        margin: 0,
        padding: { base: "2rem 0.5rem", md: "2rem", lg: "2rem" },
        height: ["100%", null, "100vh"],
        overflow: "hidden",
      },
    }),
  },
  colors: {
    greyHover: "#edf2f7",
    greyDarkerHover: "#2c313d",
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: "none" },
      },
    },
  },
});

export default theme;
