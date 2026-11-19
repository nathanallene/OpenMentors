"use client";
import {
  Button,
  Flex,
  Heading,
  Text,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "#/src/utils/Colors";
import { LuArrowRight, LuSparkles } from "react-icons/lu";
import Link from "next/link";

const Header = () => {
  const heroGradient = useColorModeValue(
    "linear-gradient(120deg,#70A4D4 0%,#ca71ff 20%,#8469cc 30%,#48B9E6 50%,#8469cc 70%,#9F70D4 100%)",
    "linear-gradient(120deg,#18181b 0%,#52525b 20%,#27272a 30%,#71717a 50%,#27272a 70%,#3f3f46 100%)"
  );

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      id="home"
      minH="100svh"
      bg={heroGradient}
      bgSize={"200% 200%"}
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={{ base: 4, md: 6 }}
      pt={24}
      pb={32}
    >
      <Flex bg={"#ffffff50"} px={4} py={1} rounded={"full"} mb={5}>
        <Text color={StargateColors.white} fontSize={"xs"} fontWeight={600}>
          United States · Taiwan
        </Text>
      </Flex>
      <Heading
        fontSize={{
          base: 36,
          md: 56,
          lg: 72,
        }}
        color={StargateColors.white}
        lineHeight={1.1}
        textAlign={"center"}
        maxW={900}
        fontWeight={700}
      >
        Build AI Skills With People Who Work in Tech
      </Heading>
      <Text
        color={StargateColors.white}
        maxW={720}
        textAlign={"center"}
        mt={6}
        fontSize={{ base: "md", md: "lg" }}
        lineHeight={1.7}
        opacity={0.95}
      >
        ForAIMentors brings people who want to learn AI together with AI specialists
        and software engineers. Participants get technical guidance, put what
        they learn into practice and work with people in other countries. Along
        the way, they develop practical skills, learn how AI technologies work
        and discover opportunities in tech.
      </Text>
      <Text
        color={StargateColors.white}
        maxW={640}
        textAlign={"center"}
        mt={4}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={1.7}
        opacity={0.85}
      >
        We want those connections to last and help people keep growing
        professionally as they share what they know.
      </Text>
      <Flex
        mt={8}
        gap={4}
        direction={{ base: "column", sm: "row" }}
        align="center"
      >
        <Button
          leftIcon={<LuSparkles />}
          as={motion.a}
          href={"#services"}
          whileHover={{ scale: 1.05 }}
          size={"lg"}
          gap={2}
          cursor={"pointer"}
          rounded="full"
        >
          Explore Our Services
        </Button>
        <Button
          rightIcon={<LuArrowRight />}
          as={motion.a}
          href={"#contact"}
          whileHover={{ scale: 1.05 }}
          size={"lg"}
          gap={2}
          cursor={"pointer"}
          rounded="full"
          variant="outline"
          borderColor="white"
          color="white"
          _hover={{ bg: "#ffffff25" }}
        >
          Contact Us
        </Button>
      </Flex>
      <Text
        mt={4}
        as={Link}
        href={"#approach"}
        color={StargateColors.white}
        opacity={0.75}
        transition={"all .25s ease"}
        _hover={{ opacity: 1 }}
        fontSize="sm"
      >
        Learn about our approach
      </Text>
      <HeroBottomSVG />
    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%
  }

  to {
    background-position: 100% 100%
  }
`;

export default Header;
