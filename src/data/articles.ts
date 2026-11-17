export type Article = {
  id: string;
  title: string;
  topic: string;
  excerpt: string;
  body: string[];
  takeaway: string;
};

export const topics = [
  "All topics",
  "AI Engineering",
  "Agentic AI & Automation",
  "RAG & Knowledge Systems",
  "Embedded & Edge Computing",
  "Software Engineering",
] as const;

export const articles: Article[] = [
  {
    id: "quantization",
    title: "What Quantization Changes in an AI Model",
    topic: "AI Engineering",
    excerpt:
      "Using fewer bits for each model weight lowers memory use by an amount you can estimate. To see how accuracy changes, test the model on examples from the task it will handle before deploying it.",
    body: [
      "Quantization reduces the number of bits used to store each model weight. That usually lowers memory use and can make inference cheaper to run, but it also changes how the model behaves.",
      "Before you deploy a quantized model, estimate the memory savings for your target hardware and then measure accuracy on examples from the real task. Synthetic benchmarks alone will not tell you whether the change is acceptable.",
      "Compare the original and quantized versions on the same evaluation set. Look at the errors that matter for the product — not only average scores — and keep a record of what changed so later decisions are grounded in evidence.",
    ],
    takeaway:
      "Treat quantization as a measured trade-off: confirm memory gains and validate task accuracy before shipping.",
  },
  {
    id: "llm-deployment",
    title: "Decisions That Shape an LLM Deployment",
    topic: "AI Engineering",
    excerpt:
      "Decide where the model will run, what precision it will use and how requests will be grouped. Compare local hardware, a hosted API and a private GPU based on response times, operating costs and where the data goes.",
    body: [
      "An LLM deployment is shaped by a few early choices: where the model runs, which precision it uses, and how requests are batched or grouped under load.",
      "Local hardware keeps data closer to you but limits scale. A hosted API can be faster to adopt and easier to scale, while a private GPU offers more control at a higher operational cost. Compare response times, operating costs and data handling requirements side by side.",
      "Write those trade-offs down before you optimize. Once traffic grows, changing where inference happens is harder than adjusting a prompt or a batch size.",
    ],
    takeaway:
      "Choose runtime location, precision and request grouping with latency, cost and data flow in mind from day one.",
  },
  {
    id: "inference-slowdowns",
    title: "Where AI Inference Slows Down",
    topic: "AI Engineering",
    excerpt:
      "Check model weights, the key-value cache and batch size when investigating slow responses. Time the slowest part of a request on the hardware that will serve traffic before changing the model.",
    body: [
      "When responses feel slow, start with the parts of inference that usually dominate: loading or moving model weights, growing the key-value cache, and the batch size used under concurrent traffic.",
      "Profile on the hardware that will serve real users. Timing a laptop run and then shipping to a different GPU can hide the bottleneck you needed to fix.",
      "Only change the model after you know which stage is slowest. Otherwise you may replace a working model and still keep the same latency problem.",
    ],
    takeaway:
      "Measure the slowest stage of a request on production-like hardware before you redesign the model.",
  },
  {
    id: "accuracy-targets",
    title: "Setting an Accuracy Target for an AI Application",
    topic: "Software Engineering",
    excerpt:
      "Use the client’s data to decide what counts as an acceptable result. Agree on which errors matter, what score is good enough and who approves the results before optimizing for speed.",
    body: [
      "Accuracy targets should come from the client’s data and the decisions the system will support. A score that looks strong in a demo may still fail the cases that matter most in production.",
      "Agree early on which errors are unacceptable, what score is good enough to ship, and who has authority to approve results. That keeps later optimization focused.",
      "Speed work comes after that agreement. Without a shared target, teams often optimize latency while quietly accepting the wrong kinds of mistakes.",
    ],
    takeaway:
      "Define acceptable results, critical errors and approval ownership before you optimize for speed.",
  },
  {
    id: "assistant-reliability",
    title: "Testing Whether an AI Assistant Is Reliable",
    topic: "Agentic AI & Automation",
    excerpt:
      "Give the assistant a specific job, define when it should decline or hand a request to someone else and record what it does. Use cases that previously caused failures to check whether it handles them correctly.",
    body: [
      "Reliable assistants need a clear job description: what they should do, when they should decline, and when they should hand a request to a person.",
      "Record outcomes on a fixed set of cases, including ones that previously failed. That makes regressions visible and keeps evaluation tied to real behavior instead of impressions.",
      "Update the test set as new failure modes appear. Reliability is not a one-time checkbox — it is a habit of checking the cases that already went wrong.",
    ],
    takeaway:
      "Scope the job, define handoff rules, and re-test known failure cases before you call an assistant reliable.",
  },
  {
    id: "cloud-vs-local",
    title: "What Changes When AI Runs in the Cloud",
    topic: "Embedded & Edge Computing",
    excerpt:
      "Running a model locally keeps processing on hardware you control, within that hardware’s limits. A hosted API gives you access to remote computing and brings decisions about response times, per-request costs and data handling.",
    body: [
      "Local inference keeps processing on hardware you control. That can simplify data handling, but you inherit the limits of that machine — memory, throughput and maintenance included.",
      "A hosted API opens access to remote compute. In return, you take on decisions about response times, per-request costs and where data travels for each call.",
      "For edge and embedded contexts, the same trade-off appears at a smaller scale: keep work on-device when control matters most, and reach out to the cloud when capability or capacity require it.",
    ],
    takeaway:
      "Local control and cloud capacity solve different constraints — pick based on data handling, latency and cost.",
  },
];
