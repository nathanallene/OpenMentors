"use client";
import { useBrandColors } from "#/src/utils/useBrandColors";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const points = [
  "We believe people get more out of learning when they can apply their technical knowledge and exchange ideas with others, including people working in different countries.",
  "We’re building an international network where learners and experienced technology professionals can share what they know. Over time, we want that work to benefit individuals, businesses and the wider tech industry.",
  "Our goal is to help people use technology to gain new skills, come up with solutions and form professional relationships that last.",
];

const Approach = () => {
  const colors = useBrandColors();

  return (
    <Flex
      id="approach"
      direction="column"
      justify="center"
      align="center"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 6 }}
      bg={colors.softBg}
      borderY={`1px solid ${colors.border}`}
    >
      <Flex direction="column" maxW={800} mx="auto" align="center">
        <Heading
          fontSize={{ base: 32, md: 48 }}
          textAlign="center"
          mb={8}
          color={colors.heading}
        >
          Our Approach
        </Heading>
        <Flex direction="column" gap={5}>
          {points.map((point) => (
            <Text
              key={point}
              fontSize={{ base: "md", md: "lg" }}
              color={colors.muted}
              textAlign="center"
              lineHeight={1.8}
            >
              {point}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Approach;
