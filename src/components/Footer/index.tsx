"use client";
import { selectEngineeringService } from "#/src/data/services";
import { StargateColors } from "#/src/utils/Colors";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Engineering Insights", href: "/#insights" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

const services = [
  { name: "AI Education & Training", id: "education" },
  { name: "Technical Mentorship", id: "mentorship" },
  { name: "AI Platform & Opportunity Guidance", id: "platforms" },
  { name: "AI & Software Development", id: "development" },
  { name: "Intelligent Automation", id: "automation" },
  { name: "Technology Consulting & Collaboration", id: "consulting" },
];

const legalDocs: Record<
  string,
  { title: string; paragraphs: string[] }
> = {
  "Privacy Policy": {
    title: "Privacy Policy",
    paragraphs: [
      "ForAIMentors collects only the information you choose to share when you contact us — typically your name, email address and message content.",
      "We use that information to respond to inquiries about learning, mentorship, collaboration and engineering services. We do not sell personal information.",
      "If you have questions about how your information is handled, email 2.r.3.141592@gmail.com.",
    ],
  },
  "Terms of Service": {
    title: "Terms of Service",
    paragraphs: [
      "ForAIMentors provides educational, mentorship and technology collaboration services. Engagement details are confirmed in writing for each conversation or project.",
      "Content on this website is for general information. It does not create a professional engagement until both sides agree to work together.",
      "Please contact us if you need clarification before joining the network or starting a project.",
    ],
  },
  "Cookie Policy": {
    title: "Cookie Policy",
    paragraphs: [
      "This site may store a small preference in your browser so we remember cookie consent and theme choices.",
      "These preferences help the site work as expected and are not used for advertising profiles.",
      "You can clear site data in your browser settings at any time.",
    ],
  },
};

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLegal, setActiveLegal] = useState("Privacy Policy");

  const openLegal = (name: string) => {
    setActiveLegal(name);
    onOpen();
  };

  const openService = (serviceId: string) => {
    selectEngineeringService(serviceId);
    document
      .getElementById("engineering")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const doc = legalDocs[activeLegal];

  return (
    <Flex
      py={32}
      position="relative"
      justify="center"
      align="center"
      direction="column"
      id="footer"
    >
      <FooterTopSVG />
      <FooterBg />
      <Flex
        mt={16}
        direction="column"
        align="center"
        px={{ base: 4, md: 6 }}
        maxW={1100}
        w="100%"
        zIndex={1}
      >
        <Heading
          fontSize={{ base: 40, md: 56 }}
          textAlign="center"
          color="transparent"
          maxW={700}
          fontWeight={800}
          style={{
            backgroundImage: "linear-gradient(315deg, #ffffff 60%, #000000)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          ForAIMentors
        </Heading>
        <Text
          color={StargateColors.white}
          textAlign="center"
          mt={4}
          maxW={560}
          fontSize={{ base: "md", md: "lg" }}
          lineHeight={1.7}
        >
          Build AI Skills With People Who Work in Tech
        </Text>
        <Text
          color={StargateColors.white}
          textAlign="center"
          mt={3}
          maxW={640}
          fontSize="sm"
          opacity={0.85}
        >
          AI Education · Technical Mentorship · Software Development ·
          Intelligent Automation
        </Text>
        <Text
          color={StargateColors.white}
          textAlign="center"
          mt={4}
          maxW={560}
          fontSize="sm"
          opacity={0.75}
          lineHeight={1.7}
        >
          We bring people in tech together across borders to develop software
          and put AI to practical use.
        </Text>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: 8, md: 10 }}
          mt={14}
          w="100%"
        >
          <Flex direction="column" gap={3}>
            <Text
              color="white"
              fontWeight={700}
              fontSize="sm"
              letterSpacing="0.08em"
              mb={1}
            >
              Navigation
            </Text>
            {navigation.map((item) => (
              <Text
                key={item.name}
                as={Link}
                href={item.href}
                color="white"
                opacity={0.8}
                fontSize="sm"
                _hover={{ opacity: 1 }}
              >
                {item.name}
              </Text>
            ))}
          </Flex>

          <Flex direction="column" gap={3}>
            <Text
              color="white"
              fontWeight={700}
              fontSize="sm"
              letterSpacing="0.08em"
              mb={1}
            >
              Services
            </Text>
            {services.map((item) => (
              <Button
                key={item.id}
                variant="link"
                justifyContent="flex-start"
                color="white"
                opacity={0.8}
                fontSize="sm"
                fontWeight={400}
                height="auto"
                whiteSpace="normal"
                textAlign="left"
                _hover={{ opacity: 1, textDecoration: "none" }}
                onClick={() => openService(item.id)}
              >
                {item.name}
              </Button>
            ))}
          </Flex>

          <Flex direction="column" gap={3}>
            <Text
              color="white"
              fontWeight={700}
              fontSize="sm"
              letterSpacing="0.08em"
              mb={1}
            >
              Legal
            </Text>
            {Object.keys(legalDocs).map((item) => (
              <Button
                key={item}
                variant="link"
                justifyContent="flex-start"
                color="white"
                opacity={0.8}
                fontSize="sm"
                fontWeight={400}
                height="auto"
                _hover={{ opacity: 1, textDecoration: "none" }}
                onClick={() => openLegal(item)}
              >
                {item}
              </Button>
            ))}
          </Flex>
        </Grid>
      </Flex>

      <Flex mt={20} px={4} zIndex={1}>
        <Text color={StargateColors.white} opacity={0.85} textAlign="center">
          © {new Date().getFullYear()} ForAIMentors. All rights reserved.
        </Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" />
        <ModalContent mx={4} borderRadius={20} bg="#171a22" color="white">
          <ModalHeader>{doc?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <Flex direction="column" gap={4}>
              {doc?.paragraphs.map((paragraph) => (
                <Text key={paragraph} color="whiteAlpha.800" lineHeight={1.7}>
                  {paragraph}
                </Text>
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Footer;
