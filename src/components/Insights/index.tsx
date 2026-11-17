"use client";
import { articles, topics, type Article } from "#/src/data/articles";
import { prefillContact } from "#/src/utils/events";
import { useBrandColors } from "#/src/utils/useBrandColors";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

const Insights = () => {
  const colors = useBrandColors();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTopic, setActiveTopic] = useState<(typeof topics)[number]>(
    "All topics"
  );
  const [selected, setSelected] = useState<Article | null>(null);

  const filtered = useMemo(() => {
    if (activeTopic === "All topics") return articles;
    return articles.filter((article) => article.topic === activeTopic);
  }, [activeTopic]);

  const openArticle = (article: Article) => {
    setSelected(article);
    onOpen();
  };

  return (
    <Flex
      id="insights"
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
        Engineering Insights & Technical Knowledge
      </Heading>
      <Text
        mt={4}
        color={colors.muted}
        textAlign="center"
        maxW={720}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={1.7}
      >
        Articles on building AI systems, developing software, automating
        workflows and working with embedded hardware.
      </Text>

      <Flex gap={2} flexWrap="wrap" justify="center" mt={8} mb={10}>
        {topics.map((topic) => {
          const isActive = activeTopic === topic;
          return (
            <Button
              key={topic}
              size="sm"
              rounded="full"
              onClick={() => setActiveTopic(topic)}
              bg={isActive ? colors.tabActiveBg : colors.elevated}
              color={isActive ? colors.tabActiveColor : colors.muted}
              border={`1px solid ${isActive ? "transparent" : colors.border}`}
              _hover={{
                bg: isActive ? colors.tabActiveBg : colors.hoverBg,
              }}
              fontWeight={600}
            >
              {topic}
            </Button>
          );
        })}
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
        w="100%"
      >
        {filtered.map((article) => (
          <Flex
            key={article.id}
            as="article"
            direction="column"
            p={6}
            bg={colors.surface}
            border={`1px solid ${colors.border}`}
            borderRadius={20}
            transition="all 0.25s ease"
            boxShadow="none"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: colors.shadow,
              borderColor: colors.primary,
            }}
            h="100%"
            role="group"
          >
            <Text
              fontSize="xs"
              fontWeight={700}
              color={colors.primary}
              letterSpacing="0.06em"
              mb={3}
              textTransform="uppercase"
            >
              {article.topic}
            </Text>
            <Heading
              fontSize="lg"
              mb={3}
              lineHeight={1.4}
              color={colors.heading}
            >
              {article.title}
            </Heading>
            <Text
              color={colors.muted}
              fontSize="sm"
              lineHeight={1.7}
              flex="1"
              mb={5}
            >
              {article.excerpt}
            </Text>
            <Button
              alignSelf="flex-start"
              variant="link"
              color={colors.primary}
              fontWeight={700}
              fontSize="sm"
              onClick={() => openArticle(article)}
              _groupHover={{ textDecoration: "underline" }}
            >
              Read article →
            </Button>
          </Flex>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Text color={colors.muted} mt={4}>
          No articles in this topic yet. Try another filter.
        </Text>
      )}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" />
        <ModalContent
          mx={4}
          borderRadius={24}
          bg={colors.surface}
          border={`1px solid ${colors.border}`}
        >
          {selected && (
            <>
              <ModalHeader pr={12} pt={8}>
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  color={colors.primary}
                  letterSpacing="0.06em"
                  mb={2}
                  textTransform="uppercase"
                >
                  {selected.topic}
                </Text>
                <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} color={colors.heading}>
                  {selected.title}
                </Heading>
              </ModalHeader>
              <ModalCloseButton top={5} right={5} />
              <ModalBody>
                <Flex direction="column" gap={4}>
                  {selected.body.map((paragraph) => (
                    <Text
                      key={paragraph}
                      color={colors.muted}
                      lineHeight={1.8}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {paragraph}
                    </Text>
                  ))}
                  <Box
                    mt={2}
                    p={4}
                    borderRadius={16}
                    bg={colors.elevated}
                    border={`1px solid ${colors.border}`}
                  >
                    <Text
                      fontSize="xs"
                      fontWeight={700}
                      color={colors.primary}
                      mb={2}
                      letterSpacing="0.06em"
                    >
                      KEY TAKEAWAY
                    </Text>
                    <Text color={colors.heading} fontWeight={600} lineHeight={1.6}>
                      {selected.takeaway}
                    </Text>
                  </Box>
                </Flex>
              </ModalBody>
              <ModalFooter gap={3} pb={8}>
                <Button variant="ghost" onClick={onClose} rounded="full">
                  Close
                </Button>
                <Button
                  rounded="full"
                  bg={colors.primary}
                  color="white"
                  _hover={{ bg: colors.primary, opacity: 0.9 }}
                  onClick={() => {
                    prefillContact({
                      message: `I’d like to discuss the article “${selected.title}”.\n\nHere’s what I’m curious about:\n`,
                    });
                    onClose();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Discuss this topic
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Insights;
