import { Inter } from "next/font/google";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { StargateColors } from "../utils/Colors";

const inter = Inter({
  subsets: ["latin"],
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const customTheme = extendTheme({
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? StargateColors.darkBg
            : StargateColors.pageBgLight,
        color: props.colorMode === "dark" ? "#f4f6fb" : StargateColors.black,
        transitionProperty: "background-color, color",
        transitionDuration: "0.2s",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
      },
    },
    Modal: {
      baseStyle: (props: { colorMode: string }) => ({
        dialog: {
          bg:
            props.colorMode === "dark"
              ? StargateColors.darkSurface
              : StargateColors.white,
        },
      }),
    },
  },
});
