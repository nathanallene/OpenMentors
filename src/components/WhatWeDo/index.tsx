"use client";
import { useBrandColors } from "#/src/utils/useBrandColors";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const tags = ["AI TALENT", "TECHNOLOGY", "COLLABORATION"];

const WhatWeDo = () => {
  const colors = useBrandColors();

  return (
    <Flex
      id="what-we-do"
      direction="column"
      justify="center"
      align="center"
      my={{ base: 16, md: 24 }}
      px={{ base: 4, md: 6 }}
      maxW={900}
      mx="auto"
    >
      <Text
        fontSize="sm"
        fontWeight={700}
        color={colors.primary}
        letterSpacing="0.1em"
        mb={3}
      >
        WHAT WE DO
      </Text>
      <Heading
        fontSize={{ base: 32, md: 48 }}
        textAlign="center"
        mb={6}
        color={colors.heading}
      >
        Work With Others in AI and Technology
      </Heading>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={colors.muted}
        textAlign="center"
        lineHeight={1.8}
        mb={4}
      >
        Meet people in tech, learn from their experience and see what you could
        work on together.
      </Text>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={colors.muted}
        textAlign="center"
        lineHeight={1.8}
        mb={8}
      >
        Our network welcomes anyone interested in AI, picking up new skills or
        getting to know technology professionals.
      </Text>
      <Flex gap={3} flexWrap="wrap" justify="center" mb={8}>
        {tags.map((tag) => (
          <Text
            key={tag}
            px={4}
            py={2}
            rounded="full"
            bg={colors.hoverBg}
            border={`1px solid ${colors.border}`}
            color={colors.primary}
            fontSize="sm"
            fontWeight={700}
            letterSpacing="0.06em"
          >
            {tag}
          </Text>
        ))}
      </Flex>
      <Button
        as={motion.a}
        href="#contact"
        whileHover={{ scale: 1.05 }}
        size="lg"
        rounded="full"
        bg={colors.primary}
        color={colors.onPrimary}
        _hover={{ bg: colors.primary, opacity: 0.9 }}
      >
        Contact Us
      </Button>
    </Flex>
  );
};

export default WhatWeDo;
