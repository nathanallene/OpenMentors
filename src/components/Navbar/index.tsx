"use client";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import {
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import { StargateColors } from "#/src/utils/Colors";

const NavItems = [
  { name: "Home", href: "/#home", sectionId: "home" },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "Insights", href: "/#insights", sectionId: "insights" },
  { name: "FAQ", href: "/#faq", sectionId: "faq" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const scrolledBg = useColorModeValue(
    "rgba(255,255,255,0.92)",
    "rgba(15,17,23,0.92)"
  );
  const scrolledColor = useColorModeValue("black", "white");
  const hoverBgScrolled = useColorModeValue("#00000010", "#ffffff18");
  const scrolledBorder = useColorModeValue(
    "rgba(9,9,11,0.08)",
    "rgba(255,255,255,0.08)"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const sectionIDs = NavItems.map((item) => item.sectionId);
      let current = "home";
      for (const sectionID of sectionIDs) {
        const sectionElement = document.getElementById(sectionID);
        if (sectionElement) {
          const { top } = sectionElement.getBoundingClientRect();
          if (top <= 120) current = sectionID;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = isScrolled ? scrolledColor : "white";

  return (
    <Flex
      position={isScrolled ? "fixed" : "absolute"}
      top={isScrolled ? 0 : "auto"}
      zIndex={100}
      bg={isScrolled ? scrolledBg : "#ffffff18"}
      w="100%"
      justify="center"
      align="center"
      backdropFilter="blur(20px)"
      minH={75}
      transition="all .25s ease"
      borderBottom={`1px solid ${isScrolled ? scrolledBorder : "#ffffff40"}`}
      direction="column"
    >
      <Flex
        maxW={1440}
        w="100%"
        py={5}
        px={{ base: 5, md: 10, xl: 5 }}
        align="center"
        justify="space-between"
      >
        <Text
          as={Link}
          href="/#home"
          fontSize={{ base: "2xl", md: "3xl" }}
          userSelect="none"
          color={linkColor}
          fontWeight={700}
        >
          ForAIMentors
        </Text>

        <Flex gap={2} display={{ base: "none", lg: "flex" }} color={linkColor}>
          {NavItems.map((item) => (
            <Flex
              as={Link}
              href={item.href}
              key={item.sectionId}
              px={4}
              py={2}
              borderRadius={12}
              transition="all .25s ease"
              _hover={{ bg: isScrolled ? hoverBgScrolled : "#ffffff25" }}
              bg={
                activeSection === item.sectionId
                  ? isScrolled
                    ? hoverBgScrolled
                    : "#ffffff25"
                  : "transparent"
              }
            >
              <Text fontWeight={500}>{item.name}</Text>
            </Flex>
          ))}
        </Flex>

        <Flex gap={3} display={{ base: "none", lg: "flex" }} align="center">
          <IconButton
            aria-label="Toggle theme"
            icon={<Icon as={colorMode === "light" ? LuMoon : LuSun} />}
            variant="ghost"
            color={linkColor}
            onClick={toggleColorMode}
            rounded="full"
            _hover={{ bg: isScrolled ? hoverBgScrolled : "#ffffff25" }}
          />
          <Button
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            href="#contact"
            rounded="full"
            background={isScrolled ? StargateColors.primary : "white"}
            color={isScrolled ? "white" : "black"}
            _hover={{ bg: isScrolled ? StargateColors.primary : "white" }}
          >
            Contact Us
          </Button>
        </Flex>

        <Flex display={{ base: "flex", lg: "none" }} gap={1} align="center">
          <IconButton
            aria-label="Toggle theme"
            icon={<Icon as={colorMode === "light" ? LuMoon : LuSun} />}
            variant="ghost"
            color={linkColor}
            onClick={toggleColorMode}
            rounded="full"
          />
          <IconButton
            icon={isOpen ? <Icon as={LuX} /> : <Icon as={LuMenu} />}
            aria-label="Open menu"
            variant="ghost"
            onClick={onToggle}
            color={linkColor}
            fontSize="lg"
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Flex
          w="100%"
          justify="center"
          align="center"
          display={{ base: "flex", lg: "none" }}
          direction="column"
          mb={5}
          gap={4}
        >
          {NavItems.map((item) => (
            <Flex
              as={Link}
              href={item.href}
              key={item.sectionId}
              color={linkColor}
              onClick={onClose}
            >
              <Text fontWeight={500}>{item.name}</Text>
            </Flex>
          ))}
          <Button
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            href="#contact"
            rounded="full"
            background={isScrolled ? StargateColors.primary : "white"}
            color={isScrolled ? "white" : "black"}
            onClick={onClose}
          >
            Contact Us
          </Button>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default Navbar;
