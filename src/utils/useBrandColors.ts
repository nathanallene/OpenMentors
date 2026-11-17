"use client";
import { useColorModeValue } from "@chakra-ui/react";
import { StargateColors } from "./Colors";

export const useBrandColors = () => {
  const pageBg = useColorModeValue(
    StargateColors.pageBgLight,
    StargateColors.darkBg
  );
  const surface = useColorModeValue(StargateColors.white, StargateColors.darkSurface);
  const elevated = useColorModeValue(StargateColors.lightGrey, StargateColors.darkElevated);
  const border = useColorModeValue("rgba(9, 9, 11, 0.08)", StargateColors.darkBorder);
  const muted = useColorModeValue(StargateColors.lightMuted, StargateColors.darkMuted);
  const heading = useColorModeValue(StargateColors.black, "#f4f6fb");
  const softBg = useColorModeValue("#efeaf8", "#151821");
  const hoverBg = useColorModeValue("rgba(227, 64, 191, 0.08)", "rgba(227, 64, 191, 0.16)");
  const tabActiveBg = useColorModeValue(StargateColors.black, StargateColors.primary);
  const tabActiveColor = StargateColors.white;
  const inputBg = useColorModeValue(StargateColors.white, "#12151d");
  const shadow = useColorModeValue(
    "0 18px 40px rgba(15, 17, 23, 0.08)",
    "0 18px 40px rgba(0, 0, 0, 0.45)"
  );

  return {
    pageBg,
    surface,
    elevated,
    border,
    muted,
    heading,
    softBg,
    hoverBg,
    tabActiveBg,
    tabActiveColor,
    inputBg,
    shadow,
    primary: StargateColors.primary,
  };
};
