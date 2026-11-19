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
      rounded="2xl"
      p={5}
      position="fixed"
      left={{ base: 4, md: 6 }}
      bottom={{ base: 4, md: 6 }}
      maxW={{ base: "calc(100% - 32px)", md: 280 }}
      zIndex={1000}
      border={`1px solid ${colors.border}`}
      direction="column"
      align="flex-start"
      gap={3}
    >
      <Text color={colors.muted} fontSize="sm" lineHeight={1.6}>
        We store a small preference to remember your cookie consent and theme
        settings.
      </Text>
      <Button
        rounded="full"
        fontSize="small"
        size="sm"
        bg={colors.primary}
        color={colors.onPrimary}
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
