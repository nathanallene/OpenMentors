import { SELECT_SERVICE_EVENT } from "#/src/utils/events";

export { SELECT_SERVICE_EVENT };

export type EngineeringService = {
  id: string;
  step: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
};

export const engineeringServices: EngineeringService[] = [
  {
    id: "education",
    step: "01",
    title: "AI Education & Training",
    summary: "Structured learning that turns AI concepts into practised skills.",
    description:
      "We offer learning materials and structured activities that help people understand AI concepts and apply them in practice.",
    bullets: [
      "Core concepts in artificial intelligence",
      "Generative AI and how it’s used",
      "Foundations of machine learning",
      "AI tools and their applications",
      "Exercises for practising AI skills",
    ],
  },
  {
    id: "mentorship",
    step: "02",
    title: "Technical Mentorship",
    summary: "Guidance from specialists as you build and apply technical skills.",
    description:
      "Get guidance from AI specialists and software engineers as you build skills and work through real technical challenges.",
    bullets: [
      "One-to-one and small-group mentoring",
      "Feedback on projects and learning paths",
      "Support applying concepts in practice",
      "Connection with professionals across borders",
    ],
  },
  {
    id: "platforms",
    step: "03",
    title: "AI Platform & Opportunity Guidance",
    summary: "Practical orientation to AI platforms and where skills can lead.",
    description:
      "Explore AI platforms and opportunities with people who work with these technologies day to day.",
    bullets: [
      "Overview of common AI platforms and tools",
      "Guidance on where skills can lead",
      "Introductions within the tech network",
      "Advice for individuals and organizations",
    ],
  },
  {
    id: "development",
    step: "04",
    title: "AI & Software Development",
    summary: "Collaborative engineering for AI applications and software.",
    description:
      "Collaborate on AI applications and software with engineers who build and ship production systems.",
    bullets: [
      "AI-powered application development",
      "Software engineering collaboration",
      "Architecture and implementation support",
      "Cross-border project work",
    ],
  },
  {
    id: "automation",
    step: "05",
    title: "Intelligent Automation",
    summary: "Automate workflows so teams can focus on higher-value work.",
    description:
      "Automate tasks and workflows with AI so teams can focus on higher-value work.",
    bullets: [
      "Workflow and process automation",
      "Agentic AI and assisted processes",
      "Practical evaluation of automation opportunities",
      "Integration with existing systems",
    ],
  },
  {
    id: "consulting",
    step: "06",
    title: "Technology Consulting & Collaboration",
    summary: "Technical decisions and project collaboration across borders.",
    description:
      "Talk through technical decisions or work together on projects across learning, mentorship, and engineering.",
    bullets: [
      "Technical decision support",
      "Project collaboration",
      "Knowledge sharing across the United States and Taiwan",
      "Long-term professional relationships",
    ],
  },
];

export const selectEngineeringService = (serviceId: string) => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(SELECT_SERVICE_EVENT, { detail: { serviceId } })
  );
};
