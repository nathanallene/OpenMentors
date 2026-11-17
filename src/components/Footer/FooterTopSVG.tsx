"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const FooterTopSVG = () => {
  const fill = useColorModeValue(
    StargateColors.pageBgLight,
    StargateColors.darkBg
  );

  return (
    <Icon
      viewBox="0 0 1440 52"
      fill={fill}
      w="100%"
      h="auto"
      position="absolute"
      top="-1px"
      left={0}
      overflow="hidden"
      transform="rotate(180deg)"
      zIndex={1}
      pointerEvents="none"
      preserveAspectRatio="none"
      display="block"
    >
      <path d="M0,0c240,34.3,480,51.5,720,51.5S1200,34.3,1440,0v52H0V0z" />
    </Icon>
  );
};

export default FooterTopSVG;
