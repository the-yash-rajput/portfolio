/**
 * Single source of truth for every word and number on the site.
 * Edit here — no copy lives inside components.
 */

export const person = {
  name: "Yash Rajput",
  monogram: "YR",
  role: "AI / Backend Engineer",
  location: "Pune, India",
  email: "yashrajputishu@gmail.com",
  phone: "+91-7374094640",
  resume:
    "https://drive.google.com/file/d/1vsXyjQqvtpU114LRHqj8ZrGRFNZO7URh/view",
  resumeDownload:
    "https://drive.google.com/uc?export=download&id=1vsXyjQqvtpU114LRHqj8ZrGRFNZO7URh",
  available: true
};

export const socials = [
  {
    label: "GitHub",
    handle: "the-yash-rajput",
    url: "https://github.com/the-yash-rajput"
  },
  {
    label: "LinkedIn",
    handle: "the-yash-rajput",
    url: "https://www.linkedin.com/in/the-yash-rajput/"
  },
  {
    label: "Medium",
    handle: "@yashrajputishu",
    url: "https://medium.com/@yashrajputishu"
  },
  {label: "Email", handle: person.email, url: `mailto:${person.email}`}
];

export const hero = {
  eyebrow: `${person.role} · ${person.location}`,
  headline: ["I build agent systems", "that survive production."],
  lede: "Senior engineer at Turtlemint. I ship LLM agents, retrieval pipelines and the distributed backends underneath them — the part where latency, cost and failure modes are somebody's problem.",
  status: "Open to AI engineering roles"
};

/** Hero signature: the workflow graph that runs on load.
 *  Node coordinates are on a 0–100 grid; the canvas maps them to pixels. */
export const agentGraph = {
  nodes: [
    {
      id: "ingest",
      label: "ingest",
      kind: "io",
      x: 0,
      y: 50,
      note: "document · image · webhook"
    },
    {
      id: "preprocess",
      label: "preprocess",
      kind: "py",
      x: 17,
      y: 50,
      note: "OCR, chunk, normalise"
    },
    {
      id: "classify",
      label: "classify",
      kind: "llm",
      x: 34,
      y: 50,
      note: "vision LLM · 9 doc types"
    },
    {
      id: "route",
      label: "route",
      kind: "branch",
      x: 51,
      y: 50,
      note: "conditional edge"
    },
    {
      id: "extract",
      label: "extract",
      kind: "llm",
      x: 68,
      y: 16,
      note: "structured field extraction"
    },
    {
      id: "retrieve",
      label: "retrieve",
      kind: "rag",
      x: 68,
      y: 84,
      note: "vector search over corpus"
    },
    {
      id: "validate",
      label: "validate",
      kind: "py",
      x: 85,
      y: 50,
      note: "schema + confidence gate"
    },
    {
      id: "respond",
      label: "respond",
      kind: "io",
      x: 100,
      y: 50,
      note: "typed payload"
    }
  ],
  edges: [
    ["ingest", "preprocess"],
    ["preprocess", "classify"],
    ["classify", "route"],
    ["route", "extract"],
    ["route", "retrieve"],
    ["extract", "validate"],
    ["retrieve", "validate"],
    ["validate", "respond"]
  ],
  /** The run the canvas replays, in order. */
  trace: [
    {node: "ingest", log: "payload accepted · 1 file"},
    {node: "preprocess", log: "3 pages → 11 chunks"},
    {node: "classify", log: "policy_schedule · confidence 0.94"},
    {node: "route", log: "branch → extract"},
    {node: "extract", log: "14 / 14 fields resolved"},
    {node: "validate", log: "schema ok · gate passed"},
    {node: "respond", log: "200 · 1.8s end to end"}
  ]
};

/** What I'm building now — the section that answers "can you do AI work?" */
export const focus = {
  eyebrow: "current work",
  title: "What I'm building",
  lede: "Four things I've spent the last year on, all of them running against real traffic rather than a notebook.",
  cards: [
    {
      title: "Agent orchestration",
      body: "Workflow agents as explicit graphs — LLM, Python, API, RAG and queue nodes wired with conditional edges. Deterministic routing, replayable state, and a debug loop that tells you which node lied.",
      stack: ["LangGraph", "LangChain", "Python", "FastAPI"]
    },
    {
      title: "Document & vision extraction",
      body: "Multimodal classification of screenshots and insurance documents, then structured field extraction against a strict schema. Confidence gates decide what a human still has to see.",
      stack: ["Vision LLMs", "OCR", "Pydantic", "Structured output"]
    },
    {
      title: "Retrieval that stays honest",
      body: "Chunking, embedding and hybrid search over internal corpora, tuned for recall on the questions people actually ask instead of the ones that demo well.",
      stack: ["Vector search", "Elasticsearch", "Redis", "Hybrid rerank"]
    },
    {
      title: "The boring half",
      body: "The part that decides whether an agent ships: queue-backed workers, idempotent retries, token and latency budgets, prompt versioning, and traces you can read at 3am.",
      stack: ["Kafka", "RabbitMQ", "Kubernetes", "Observability"]
    }
  ]
};

/** Impact ledger — value, what it was, where. */
export const impact = {
  eyebrow: "measured outcomes",
  title: "Things that moved a number",
  rows: [
    {
      value: "₹1 Cr",
      unit: "saved / year",
      what: "Migrated RPA automation to Java + Playwright, cutting licensing and infra spend",
      where: "Turtlemint"
    },
    {
      value: "66%",
      unit: "storage cut",
      what: "Attachment redaction pipeline for Zendesk — $28K+ saved annually, growing year over year",
      where: "Turtlemint"
    },
    {
      value: "4×",
      unit: "ICPC regionalist",
      what: "Best rank 82 across Amritapuri, Asia Gwalior-Pune and Kanpur-Mathura",
      where: "ACM-ICPC"
    },
    {
      value: "2003",
      unit: "peak rating",
      what: "CodeChef 5★ and Codeforces Specialist — the reflex behind everything above",
      where: "Competitive programming"
    }
  ]
};

export const experience = {
  eyebrow: "3 yrs · 2 orgs",
  title: "Where I've worked",
  jobs: [
    {
      role: "Senior Software Engineer",
      org: "Turtlemint",
      logo: require("../assets/images/tmlogo.png"),
      period: "Dec 2022 — Present",
      summary:
        "Designing agent workflows and the microservices they sit on, across insurance distribution systems used by hundreds of thousands of advisors.",
      bullets: [
        "Build LLM workflow agents — document classification, structured extraction and RAG nodes — and the message-envelope plumbing that feeds them.",
        "Architected and delivered scalable full-stack services, from API gateway and auth to payments integration.",
        "Led the RPA migration to Java + Playwright, saving roughly ₹1 Cr a year in infra and licensing.",
        "Shipped Zendesk attachment redaction, cutting storage 66% and $28K+ annually.",
        "Built a Recon Management Service for fast, accurate reconciliation across large datasets."
      ]
    },
    {
      role: "Chief Technical Secretary",
      org: "PICT Computer Society Board",
      logo: require("../assets/images/pcsb.png"),
      period: "Jul 2021 — Mar 2023",
      summary:
        "Ran the technical arm of the student board — events, mentoring, and a team that had to ship on a deadline it didn't set.",
      bullets: [
        "Organised and moderated Reverse Coding and CodeStrike under Xenia.",
        "Delivered DSA sessions for juniors, with PICT Algorithms Club and ACM Student Chapter.",
        "Led a cross-functional technical team across multiple stakeholders and tight deadlines."
      ]
    }
  ]
};

/** AI first — it's what the reader came for. */
export const stack = {
  eyebrow: "tools I reach for",
  title: "Stack",
  groups: [
    {
      name: "AI & ML",
      items: [
        "LangGraph",
        "LangChain",
        "RAG",
        "Vision LLMs",
        "Prompt engineering",
        "Vector search",
        "Structured output",
        "Evals"
      ]
    },
    {
      name: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "Node.js",
        "TypeScript",
        "GraphQL",
        "C++"
      ]
    },
    {
      name: "Data & messaging",
      items: [
        "Kafka",
        "RabbitMQ",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "Elasticsearch"
      ]
    },
    {
      name: "Platform",
      items: [
        "AWS",
        "Kubernetes",
        "Docker",
        "Jenkins",
        "GitHub Actions",
        "Kibana",
        "Playwright"
      ]
    }
  ]
};

export const openSource = {
  eyebrow: "8 PRs · 7 merged",
  title: "Open source",
  lede: "Mostly algorithms and developer tooling, in public.",
  prs: [
    {
      title: "Enhance Easy Containers CLI functionality",
      repo: "arjavdongaonkar/easy-containers",
      number: "7",
      url: "https://github.com/arjavdongaonkar/easy-containers/pull/7",
      status: "merged"
    },
    {
      title: "Add PiApproximation algorithm",
      repo: "TheAlgorithms/Java",
      number: "6602",
      url: "https://github.com/TheAlgorithms/Java/pull/6602",
      status: "merged"
    },
    {
      title: "Add CountBitsFlip algorithm",
      repo: "TheAlgorithms/Java",
      number: "6603",
      url: "https://github.com/TheAlgorithms/Java/pull/6603",
      status: "merged"
    },
    {
      title: "Add ground-to-ground projectile motion",
      repo: "TheAlgorithms/Java",
      number: "6714",
      url: "https://github.com/TheAlgorithms/Java/pull/6714",
      status: "merged"
    },
    {
      title: "Add SimplePendulumRK4 algorithm",
      repo: "TheAlgorithms/Java",
      number: "6800",
      url: "https://github.com/TheAlgorithms/Java/pull/6800",
      status: "merged"
    },
    {
      title: "Add DampedOscillator",
      repo: "TheAlgorithms/Java",
      number: "6801",
      url: "https://github.com/TheAlgorithms/Java/pull/6801",
      status: "merged"
    },
    {
      title: "Add ElasticCollision2D",
      repo: "TheAlgorithms/Java",
      number: "6802",
      url: "https://github.com/TheAlgorithms/Java/pull/6802",
      status: "merged"
    },
    {
      title: "Topological sort with DAG validation and cycle detection",
      repo: "TheAlgorithms/Java",
      number: "6568",
      url: "https://github.com/TheAlgorithms/Java/pull/6568",
      status: "closed"
    }
  ]
};

export const writing = {
  eyebrow: "medium",
  title: "Writing",
  lede: "Notes on systems I've had to understand properly.",
  feedUrl: "/blogs.json",
  profileUrl: "https://medium.com/@yashrajputishu"
};

export const achievements = {
  eyebrow: "competitive programming",
  title: "Awards",
  cards: [
    {
      title: "4× ACM-ICPC Regionalist",
      body: "Best rank 82 across Amritapuri, Asia Gwalior-Pune and Kanpur-Mathura regionals.",
      image: require("../assets/images/icpcLogo.webp"),
      fallback: require("../assets/images/icpcLogo.png"),
      alt: "ACM ICPC",
      link: {
        label: "ICPC profile",
        url: "https://icpc.global/ICPCID/9FSU20XQS6JS"
      }
    },
    {
      title: "CodeChef 5★",
      body: "Peak rating 2003 — top-tier algorithmic and data structure work.",
      image: require("../assets/images/codechefLogo.webp"),
      fallback: require("../assets/images/codechefLogo.png"),
      alt: "CodeChef",
      link: {
        label: "CodeChef profile",
        url: "https://www.codechef.com/users/far_from_noob"
      }
    },
    {
      title: "Codeforces Specialist",
      body: "Peak rating 1438, built over years of consistent contests.",
      image: require("../assets/images/codeforcesLogo.webp"),
      fallback: require("../assets/images/codeforcesLogo.png"),
      alt: "Codeforces",
      link: {
        label: "Codeforces profile",
        url: "https://codeforces.com/profile/Try_Fail_Learn_Repeat"
      }
    },
    {
      title: "Google Kick Start 2022",
      body: "Global rank 349 in Round D.",
      image: require("../assets/images/googleLogo.webp"),
      fallback: require("../assets/images/googleLogo.png"),
      alt: "Google Kick Start",
      link: null
    },
    {
      title: "Turtlemint Hackathon 3.0",
      body: "First place — built and demoed in 48 hours.",
      image: require("../assets/images/hackathonLogo.webp"),
      fallback: require("../assets/images/hackathonLogo.png"),
      alt: "Hackathon",
      link: null
    },
    {
      title: "JEE — top 2%",
      body: "98.95 percentile among 900,000+ candidates.",
      image: require("../assets/images/jeeLogo.webp"),
      fallback: require("../assets/images/jeeLogo.png"),
      alt: "JEE",
      link: null
    }
  ]
};

export const education = {
  eyebrow: "2019 — 2023",
  title: "Education",
  schools: [
    {
      name: "SCTR's Pune Institute of Computer Technology",
      logo: require("../assets/images/pictLogo.png"),
      degree: "B.E. Computer Science",
      period: "Aug 2019 — May 2023"
    }
  ]
};

export const contact = {
  eyebrow: "inbox is open",
  title: "Let's build something that runs.",
  lede: "Hiring for an AI engineering team, or want to argue about agent architecture? Either works."
};

/** Nav — id must match a rendered <Section id>. */
export const navItems = [
  {id: "focus", label: "Work"},
  {id: "impact", label: "Impact"},
  {id: "experience", label: "Experience"},
  {id: "stack", label: "Stack"},
  {id: "open-source", label: "Open source"},
  {id: "writing", label: "Writing"},
  {id: "awards", label: "Awards"},
  {id: "contact", label: "Contact"}
];
