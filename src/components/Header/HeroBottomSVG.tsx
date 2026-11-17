"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const HeroBottomSVG = () => {
  const fill = useColorModeValue(
    StargateColors.pageBgLight,
    StargateColors.darkBg
  );

  return (
    <Icon
      viewBox="0 0 1440 104.1"
      fill={fill}
      w="100%"
      h="auto"
      position="absolute"
      bottom="-1px"
      left={0}
      overflow="hidden"
      pointerEvents="none"
      preserveAspectRatio="none"
      display="block"
    >
      <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z" />
    </Icon>
  );
};

export default HeroBottomSVG;
