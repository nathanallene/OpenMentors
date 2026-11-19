"use client";
import { PREFILL_CONTACT_EVENT } from "#/src/utils/events";
import { useBrandColors } from "#/src/utils/useBrandColors";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { FormEvent, useEffect, useState } from "react";

const helpTopics = [
  "Learning about AI and practising new skills",
  "Getting guidance from a technical mentor",
  "Exploring AI platforms and opportunities",
  "Developing AI applications and software",
  "Automating tasks and workflows",
  "Discussing technical decisions or working on a project together",
];

const CONTACT_EMAIL = "2.r.3.141592@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const toast = useToast();
  const colors = useBrandColors();

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ message?: string; topic?: string }>;
      if (custom.detail?.topic) {
        setSelectedTopic(custom.detail.topic);
      }
      if (custom.detail?.message) {
        setMessage(custom.detail.message);
      }
    };
    window.addEventListener(PREFILL_CONTACT_EVENT, handler);
    return () => window.removeEventListener(PREFILL_CONTACT_EVENT, handler);
  }, []);

  const applyTopic = (topic: string) => {
    setSelectedTopic(topic);
    setMessage(
      `I’d like help with: ${topic}.\n\nHere’s a bit more context about what I want to achieve:\n`
    );
    document.getElementById("contact-message")?.focus();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `ForAIMentors inquiry from ${name || "website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app",
      description: `Your message is ready to send to ${CONTACT_EMAIL}.`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Flex
      id="contact"
      direction="column"
      justify="center"
      align="center"
      my={{ base: 16, md: 24 }}
      px={{ base: 4, md: 6 }}
      maxW={1100}
      mx="auto"
    >
      <Heading
        fontSize={{ base: 32, md: 48 }}
        textAlign="center"
        color={colors.heading}
      >
        Contact Us
      </Heading>
      <Text
        mt={4}
        color={colors.muted}
        textAlign="center"
        maxW={720}
        fontSize={{ base: "md", md: "lg" }}
        lineHeight={1.8}
      >
        Would you like to meet others working in AI, learn a new skill or talk
        through an idea for working together?
      </Text>
      <Text
        mt={3}
        color={colors.muted}
        textAlign="center"
        maxW={720}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={1.7}
      >
        We hear from individuals and organizations looking for mentorship,
        introductions to people in tech or a conversation about AI and software
        projects. Tell us a bit about what you’re interested in and what you’d
        like to achieve. We’ll reply when we can.
      </Text>

      <Flex
        mt={12}
        gap={8}
        direction={{ base: "column", lg: "row" }}
        w="100%"
        align="stretch"
      >
        <Flex direction="column" flex={1} gap={6}>
          <Flex direction="column" gap={3}>
            <Heading fontSize="xl" color={colors.heading}>
              What Can We Help You With?
            </Heading>
            <Text color={colors.muted} fontSize="sm">
              Select a topic to draft your message — you can edit it before
              sending.
            </Text>
            {helpTopics.map((topic) => {
              const isActive = selectedTopic === topic;
              return (
                <Flex
                  key={topic}
                  as="button"
                  type="button"
                  align="flex-start"
                  gap={3}
                  p={3}
                  borderRadius={14}
                  border={`1px solid ${isActive ? colors.primary : colors.border}`}
                  bg={isActive ? colors.hoverBg : "transparent"}
                  textAlign="left"
                  transition="all 0.2s ease"
                  _hover={{ borderColor: colors.primary, bg: colors.hoverBg }}
                  onClick={() => applyTopic(topic)}
                >
                  <Text color={colors.primary} fontWeight={700}>
                    •
                  </Text>
                  <Text color={isActive ? colors.heading : colors.muted} lineHeight={1.6}>
                    {topic}
                  </Text>
                </Flex>
              );
            })}
          </Flex>

          <Flex
            direction="column"
            gap={2}
            p={5}
            borderRadius={16}
            bg={colors.surface}
            border={`1px solid ${colors.border}`}
          >
            <Heading fontSize="md" color={colors.heading}>
              Prefer Email?
            </Heading>
            <Text color={colors.muted} fontSize="sm" lineHeight={1.7}>
              Write to{" "}
              <Text
                as="a"
                href={`mailto:${CONTACT_EMAIL}`}
                fontWeight={700}
                color={colors.primary}
                _hover={{ textDecoration: "underline" }}
              >
                {CONTACT_EMAIL}
              </Text>
              , or use the form to prepare a message in your email app.
            </Text>
          </Flex>

          <Flex
            direction="column"
            gap={2}
            p={5}
            borderRadius={16}
            bg={colors.surface}
            border={`1px solid ${colors.border}`}
          >
            <Heading fontSize="md" color={colors.heading}>
              Introductory Conversation
            </Heading>
            <Text color={colors.muted} fontSize="sm" lineHeight={1.7}>
              If you’d like to talk before joining the network or starting a
              project, we can set up an online conversation when schedules
              allow. Mention that preference in your message.
            </Text>
          </Flex>
        </Flex>

        <Flex
          as="form"
          onSubmit={handleSubmit}
          direction="column"
          flex={1}
          gap={4}
          p={{ base: 5, md: 8 }}
          borderRadius={24}
          border={`1px solid ${colors.border}`}
          bg={colors.surface}
          boxShadow={colors.shadow}
        >
          <Heading fontSize="xl" color={colors.heading}>
            Contact Form
          </Heading>

          <FormControl isRequired>
            <FormLabel fontSize="sm" color={colors.muted}>
              Name
            </FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              bg={colors.inputBg}
              borderColor={colors.border}
              borderRadius={12}
              _hover={{ borderColor: colors.primary }}
              _focusVisible={{
                borderColor: colors.primary,
                boxShadow: `0 0 0 1px ${colors.primary}`,
              }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm" color={colors.muted}>
              Email address
            </FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              bg={colors.inputBg}
              borderColor={colors.border}
              borderRadius={12}
              _hover={{ borderColor: colors.primary }}
              _focusVisible={{
                borderColor: colors.primary,
                boxShadow: `0 0 0 1px ${colors.primary}`,
              }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm" color={colors.muted}>
              Message
            </FormLabel>
            <Textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What would you like to learn about or discuss with us?"
              rows={7}
              bg={colors.inputBg}
              borderColor={colors.border}
              borderRadius={12}
              _hover={{ borderColor: colors.primary }}
              _focusVisible={{
                borderColor: colors.primary,
                boxShadow: `0 0 0 1px ${colors.primary}`,
              }}
            />
          </FormControl>

          <Button
            type="submit"
            size="lg"
            rounded="full"
            bg={colors.primary}
            color={colors.onPrimary}
            _hover={{ bg: colors.primary, opacity: 0.9 }}
            mt={2}
          >
            Send Message
          </Button>
          <Text fontSize="xs" color={colors.muted} lineHeight={1.6}>
            Selecting Send Message opens your email app with your note ready to
            send to {CONTACT_EMAIL}.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
