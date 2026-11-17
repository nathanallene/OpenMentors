"use client";
import {
  SELECT_SERVICE_EVENT,
  engineeringServices,
} from "#/src/data/services";
import { useBrandColors } from "#/src/utils/useBrandColors";
import {
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const EngineeringServices = () => {
  const [current, setCurrent] = useState(engineeringServices[0].id);
  const colors = useBrandColors();
  const panelBg = useColorModeValue("rgba(247, 245, 251, 0.8)", "rgba(23, 26, 34, 0.9)");
  const active = engineeringServices.find((s) => s.id === current) ?? engineeringServices[0];

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ serviceId: string }>;
      const serviceId = custom.detail?.serviceId;
      if (serviceId && engineeringServices.some((s) => s.id === serviceId)) {
        setCurrent(serviceId);
      }
    };

    window.addEventListener(SELECT_SERVICE_EVENT, handler);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, handler);
  }, []);

  return (
    <Flex
      id="engineering"
      direction="column"
      justify="center"
      align="center"
      my={{ base: 16, md: 24 }}
      pt={8}
      pb={{ base: 8, md: 12 }}
      px={{ base: 4, md: 10 }}
      maxW={1200}
      mx={{ base: 2, xl: "auto" }}
      border={`1px solid ${colors.border}`}
      borderRadius={28}
      bg={colors.surface}
      boxShadow={colors.shadow}
    >
      <Heading
        textAlign="center"
        px={2}
        fontSize={{ base: 28, md: 36 }}
        color={colors.heading}
      >
        Our Engineering Services
      </Heading>
      <Text
        mt={4}
        maxW={760}
        textAlign="center"
        color={colors.muted}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={1.7}
        px={2}
      >
        Our services cover learning and mentorship as well as engineering work.
        We help people explore AI platforms and opportunities, and we work on
        software development, automation and technical consulting.
      </Text>
      <Text
        mt={3}
        maxW={760}
        textAlign="center"
        color={colors.muted}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={1.7}
        px={2}
      >
        We share knowledge and collaborate on technology across the United
        States and Taiwan.
      </Text>

      <Flex
        gap={3}
        py={{ base: 5, md: 4 }}
        px={2}
        mt={6}
        justify={{ base: "flex-start", md: "center" }}
        overflowX="auto"
        w="100%"
        className="hide-scrollbar"
        flexWrap={{ base: "nowrap", md: "wrap" }}
      >
        {engineeringServices.map((service) => {
          const isActive = current === service.id;
          return (
            <Flex
              key={service.id}
              as="button"
              type="button"
              cursor="pointer"
              onClick={() => setCurrent(service.id)}
              px={4}
              py={2}
              w="fit-content"
              borderRadius={12}
              transition="all 0.25s ease"
              bg={isActive ? colors.tabActiveBg : colors.elevated}
              border={`1px solid ${isActive ? "transparent" : colors.border}`}
              _hover={{
                bg: isActive ? colors.tabActiveBg : colors.hoverBg,
              }}
            >
              <Text
                fontWeight="bold"
                fontSize="sm"
                whiteSpace="nowrap"
                color={isActive ? colors.tabActiveColor : colors.muted}
              >
                {service.step} · {service.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0.15, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.15, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ width: "100%" }}
        >
          <Flex
            direction="column"
            px={{ base: 4, md: 8 }}
            py={{ base: 6, md: 8 }}
            gap={4}
            align="center"
            textAlign="center"
            mt={2}
            borderRadius={20}
            bg={panelBg}
            border={`1px solid ${colors.border}`}
          >
            <Text
              fontSize="sm"
              fontWeight={700}
              color={colors.primary}
              letterSpacing="0.08em"
            >
              {active.step} · {active.title}
            </Text>
            <Heading fontSize={{ base: "xl", md: "2xl" }} color={colors.heading}>
              {active.title}
            </Heading>
            <Text color={colors.muted} lineHeight={1.8} maxW={800} textAlign="center">
              {active.description}
            </Text>
            <List spacing={3} mt={2} maxW={700} w="100%">
              {active.bullets.map((bullet) => (
                <ListItem
                  key={bullet}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="center"
                  gap={3}
                  textAlign="center"
                >
                  <Text color={colors.primary} fontWeight={700} mt="2px">
                    •
                  </Text>
                  <Text color={colors.muted}>{bullet}</Text>
                </ListItem>
              ))}
            </List>
          </Flex>
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};

export default EngineeringServices;
