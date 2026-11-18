"use client";
import {
  engineeringServices,
  selectEngineeringService,
} from "#/src/data/services";
import { useBrandColors } from "#/src/utils/useBrandColors";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  const colors = useBrandColors();

  const openService = (serviceId: string) => {
    selectEngineeringService(serviceId);
    const target = document.getElementById("engineering");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Flex
      id="services"
      direction="column"
      justify="center"
      align="center"
      my={{ base: 16, md: 24 }}
      px={{ base: 4, md: 6 }}
      maxW={1200}
      mx="auto"
    >
      <Heading
        fontSize={{ base: 32, md: 48 }}
        textAlign="center"
        color={colors.heading}
      >
        Our Core Services
      </Heading>
      <Text
        mt={4}
        color={colors.muted}
        textAlign="center"
        maxW={640}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={1.7}
      >
        Learning and mentorship, engineering work, and guidance across AI
        platforms.
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={5}
        my={10}
        w="100%"
      >
        {engineeringServices.map((service) => (
          <Flex
            key={service.id}
            as="button"
            type="button"
            direction="column"
            gap={3}
            p={6}
            bg={colors.surface}
            borderRadius={20}
            border={`1px solid ${colors.border}`}
            transition="all 0.25s ease"
            textAlign="left"
            cursor="pointer"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: colors.shadow,
              borderColor: colors.primary,
            }}
            onClick={() => openService(service.id)}
          >
            <Text
              fontSize="sm"
              fontWeight={700}
              color={colors.primary}
              letterSpacing="0.08em"
            >
              {service.step}
            </Text>
            <Heading
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={600}
              color={colors.heading}
            >
              {service.title}
            </Heading>
            <Text color={colors.muted} fontSize="sm" lineHeight={1.6}>
              {service.summary}
            </Text>
            <Text
              mt={1}
              fontSize="sm"
              fontWeight={700}
              color={colors.primary}
            >
              View details →
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Services;
