"use client";
import { useBrandColors } from "#/src/utils/useBrandColors";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const categories = [
  {
    id: "about",
    step: "01",
    title: "About ForAIMentors",
    questions: [
      {
        q: "How does ForAIMentors help people?",
        a: "We introduce people who want to learn about AI to specialists and software engineers. Through guidance, practical exercises and collaboration, we help them develop technical skills and find out where those skills can take them.",
      },
      {
        q: "What is ForAIMentors working toward?",
        a: "We’re building an international network where learners and experienced technology professionals can share what they know. Over time, we want that work to benefit individuals, businesses and the wider tech industry.",
      },
      {
        q: "How does ForAIMentors approach this work?",
        a: "We believe people get more out of learning when they can apply their technical knowledge and exchange ideas with others, including people working in different countries. Our goal is lasting professional relationships, not one-off interactions.",
      },
    ],
  },
  {
    id: "joining",
    step: "02",
    title: "Joining the Network",
    questions: [
      {
        q: "Who can join the network?",
        a: "Our network welcomes anyone interested in AI, picking up new skills or getting to know technology professionals — from learners to experienced engineers and organizations.",
      },
      {
        q: "Do I need a technical background?",
        a: "No. We work with people who are just getting started with AI as well as those who already have experience. Mentorship and learning activities are matched to where you are.",
      },
      {
        q: "Is the network international?",
        a: "Yes. We share knowledge and collaborate on technology across the United States and Taiwan, and we encourage collaboration with people in other countries.",
      },
      {
        q: "How do I get started?",
        a: "Reach out through the contact form or email. Tell us a bit about what you’re interested in and what you’d like to achieve. We’ll reply when we can and help you take the next step.",
      },
    ],
  },
  {
    id: "learning",
    step: "03",
    title: "Learning & Mentorship",
    questions: [
      {
        q: "How does mentorship work?",
        a: "Participants get technical guidance from AI specialists and software engineers, put what they learn into practice, and work with people in other countries as they develop practical skills.",
      },
      {
        q: "What will I learn?",
        a: "Depending on your path, that can include core AI concepts, generative AI, foundations of machine learning, AI tools and applications, plus exercises for practising those skills.",
      },
      {
        q: "Is the learning practical?",
        a: "Yes. We emphasize applying technical knowledge, working through exercises, and collaborating on real technology — so skills develop alongside professional relationships.",
      },
    ],
  },
  {
    id: "services",
    step: "04",
    title: "Services & Collaboration",
    questions: [
      {
        q: "What services do you offer?",
        a: "AI Education & Training, Technical Mentorship, AI Platform & Opportunity Guidance, AI & Software Development, Intelligent Automation, and Technology Consulting & Collaboration.",
      },
      {
        q: "Do you work with organizations as well as individuals?",
        a: "Yes. We hear from individuals and organizations looking for mentorship, introductions to people in tech, or a conversation about AI and software projects.",
      },
      {
        q: "Can we collaborate on a project?",
        a: "Yes. Beyond learning and mentorship, we work on software development, automation and technical consulting, and we’re open to discussing ideas for working together.",
      },
    ],
  },
  {
    id: "contact",
    step: "05",
    title: "Contact & Support",
    questions: [
      {
        q: "How can I reach ForAIMentors?",
        a: "The fastest way is to book a 30-minute call from the Contact section. You can also use the contact form or write to alex@foraimentors.com.",
      },
      {
        q: "Can we schedule an introductory conversation?",
        a: "Yes. Use Book a Call in the Contact section to pick a 30-minute slot on Calendly. We’ll talk through your goals before you join the network or start a project.",
      },
      {
        q: "What should I include in my message?",
        a: "Tell us a bit about what you’re interested in and what you’d like to achieve — for example learning AI, mentorship, exploring platforms, development, automation, or collaborating on a project.",
      },
      {
        q: "How quickly will you reply?",
        a: "We’ll reply when we can. Send a quick message with your goals and we’ll get back to you as soon as we’re able.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const colors = useBrandColors();
  const current =
    categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <Flex
      id="faq"
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
        Frequently Asked Questions
      </Heading>
      <Text
        mt={4}
        color={colors.muted}
        textAlign="center"
        maxW={640}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={1.7}
      >
        Find out about the network, how mentorship works and how to reach us
        about learning or working together.
      </Text>

      <Flex
        gap={4}
        mt={10}
        w="100%"
        direction={{ base: "column", lg: "row" }}
        align="stretch"
      >
        <Flex
          direction="column"
          gap={3}
          minW={{ lg: 280 }}
          w={{ base: "100%", lg: "auto" }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <Flex
                key={category.id}
                as="button"
                type="button"
                cursor="pointer"
                onClick={() => setActiveCategory(category.id)}
                p={4}
                borderRadius={16}
                border={`1px solid ${isActive ? "transparent" : colors.border}`}
                bg={isActive ? colors.tabActiveBg : colors.surface}
                transition="all 0.25s ease"
                justify="space-between"
                align="center"
                textAlign="left"
                _hover={{
                  borderColor: isActive ? "transparent" : colors.primary,
                }}
              >
                <Flex direction="column" gap={1}>
                  <Text
                    fontSize="xs"
                    fontWeight={700}
                    color={isActive ? colors.tabActiveColor : colors.primary}
                    opacity={isActive ? 0.75 : 1}
                  >
                    {category.step}
                  </Text>
                  <Text
                    fontWeight={600}
                    fontSize="sm"
                    color={isActive ? colors.tabActiveColor : colors.heading}
                  >
                    {category.title}
                  </Text>
                </Flex>
                <Text
                  fontSize="sm"
                  fontWeight={700}
                  color={isActive ? colors.tabActiveColor : colors.muted}
                >
                  {category.questions.length}
                </Text>
              </Flex>
            );
          })}
        </Flex>

        <Flex
          flex={1}
          direction="column"
          border={`1px solid ${colors.border}`}
          borderRadius={20}
          p={{ base: 4, md: 6 }}
          bg={colors.surface}
        >
          <Heading fontSize="xl" mb={4} color={colors.heading}>
            {current.title}
          </Heading>
          <Accordion allowToggle key={current.id} defaultIndex={[0]}>
            {current.questions.map((item) => (
              <AccordionItem key={item.q} border="none" mb={2}>
                <AccordionButton
                  px={4}
                  py={4}
                  borderRadius={12}
                  _hover={{ bg: colors.elevated }}
                >
                  <Text
                    flex="1"
                    textAlign="left"
                    fontWeight={600}
                    color={colors.heading}
                  >
                    {item.q}
                  </Text>
                  <AccordionIcon color={colors.muted} />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  px={4}
                  color={colors.muted}
                  lineHeight={1.7}
                >
                  {item.a}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FAQ;
