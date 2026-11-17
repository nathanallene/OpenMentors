"use client";
import { useBrandColors } from "#/src/utils/useBrandColors";
import useCookieVisibility from "#/src/utils/CookieVisibility";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const Cookie: FC = () => {
  const [showCookie, setShowCookie] = useCookieVisibility("foraimentors-cookie");
  const colors = useBrandColors();

  return showCookie ? (
    <Flex
      bg={colors.surface}
      shadow="lg"
      rounded={{ base: "2xl", md: "full" }}
      padding={{ base: 4, md: "8px 8px 8px 16px" }}
      position="fixed"
      left="50%"
      bottom={8}
      transform="translateX(-50%)"
      justify={{ base: "space-between", lg: "center" }}
      align="center"
      gap={4}
      w={{ base: "92%", md: "75%", lg: "auto" }}
      zIndex={1000}
      border={`1px solid ${colors.border}`}
      direction={{ base: "column", md: "row" }}
    >
      <Text color={colors.muted} fontSize="small" textAlign={{ base: "center", md: "left" }}>
        This website stores a small preference so we can remember cookie consent
        and theme settings.
      </Text>
      <Button
        rounded="full"
        fontSize="small"
        size="sm"
        bg={colors.primary}
        color="white"
        _hover={{ opacity: 0.85 }}
        px={5}
        onClick={() => {
          localStorage.setItem("foraimentors-cookie", "true");
          setShowCookie(false);
        }}
      >
        Accept
      </Button>
    </Flex>
  ) : null;
};

export default Cookie;
