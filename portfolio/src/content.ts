export const contact = {
  email: "sheethal.eenuganti@gmail.com",
  github: "https://github.com/Sheethaleenuganti",
  linkedin: "https://linkedin.com/in/sheethal-enuganti-169332379",
};
export const projects = [
  {
    title: "GPT-2, from the inside out.",
    subtitle: "Inference engine & int8 quantization",
    category: "LLM SYSTEMS",
    status: "2026",
    metric: "51%",
    label: "less weight memory",
    stack: ["PyTorch", "Hugging Face", "pytest", "GitHub Actions"],
    url: `${contact.github}/gpt2-quant-lab`,
    summary:
      "Rebuilding a 124M-parameter language model to understand the trade-offs between memory, speed and fidelity.",
    details: [
      [
        "Build",
        "Implemented attention, LayerNorm, GELU, KV caching and int8 quantizers from scratch; matched Hugging Face logits with automated tests and CI.",
      ],
      [
        "Evaluate",
        "Per-channel int8 reduced weight memory from 498 MB to 243 MB. WikiText-2 perplexity was 25.19 versus 25.17 FP32 (+0.02), compared with +3.52 for per-tensor quantization.",
      ],
      [
        "Investigate",
        "KV caching delivered 4.2×–14.9× CPU generation speedup across 128–1024 token contexts. W8A8 added 10.58 perplexity; activation-outlier profiling and per-block sensitivity analysis investigated the loss. These are project benchmark results, not universal performance guarantees.",
      ],
    ],
  },
  {
    title: "Finding structure in particle hits.",
    subtitle: "CERN TrackML reconstruction",
    category: "SCIENTIFIC ML",
    status: "Development stage · 2026–present",
    metric: "220",
    label: "passing tests",
    stack: ["Python", "NumPy", "pandas", "SciPy", "scikit-learn"],
    url: `${contact.github}/Trackml-reconstruction`,
    summary:
      "A leakage-aware pipeline that treats evaluation and failure analysis as first-class engineering work.",
    details: [
      [
        "Build",
        "Data validation, geometric candidate graphs, track assembly and evaluation, with frozen, reproducible experiment artifacts.",
      ],
      [
        "Evaluate",
        "On 60 development events, recovered 503,885 of approximately 5.0M true edges from 126.65M directed candidates: 10.06% candidate-edge recall. This is a development-stage candidate-graph result, not complete track-reconstruction accuracy.",
      ],
      [
        "Investigate",
        "The per-bin top-20 query missed 2.30M edges; 1.63M lay outside searched buckets. Designed a controlled candidate-generation experiment with the assembler fixed. Validation and final-test events remained untouched.",
      ],
    ],
  },
  {
    title: "Small server. Real guarantees.",
    subtitle: "Mini-Redis",
    category: "SYSTEMS ENGINEERING",
    status: "In progress",
    metric: "73",
    label: "tests, including crash recovery",
    stack: ["Python", "asyncio", "RESP2", "AOF"],
    url: `${contact.github}/MiniRedis`,
    summary:
      "A Redis-compatible server exploring the practical costs of persistence, concurrency and durability.",
    details: [
      [
        "Build",
        "Streaming RESP2 parser, lazy and active TTL expiry, AOF persistence with configurable fsync and torn-write recovery. Verified against the official redis-py client.",
      ],
      [
        "Evaluate",
        "Approximately 12,700 GET and 9,500 SET operations per second (everysec, 10 connections). Always-fsync reduced write throughput about 7×. Includes process-kill crash-recovery tests; implementation remains in progress.",
      ],
    ],
  },
  {
    title: "A calmer academic workflow.",
    subtitle: "Academic OS",
    category: "FULL-STACK PRODUCT",
    status: "Prototype · 2026",
    metric: "One",
    label: "connected planning workspace",
    stack: ["React", "TypeScript", "Firebase", "Gemini API"],
    summary:
      "An academic planning prototype connecting schedules, cloud storage and AI-assisted study guidance.",
    details: [
      [
        "Build",
        "Designed, built and deployed a full-stack prototype with Google OAuth, Firestore cloud storage, Google Calendar synchronisation and Gemini API study guidance.",
      ],
      [
        "Scope",
        "A working personal academic-planning prototype. No public project URL is supplied in the résumé.",
      ],
    ],
  },
];
export const leadership = [
  [
    "Apr 2026–present",
    "Vice Chairman",
    "IET Atlas Student Chapter",
    "Grew chapter membership by 66; hosted a 24-hour intercollegiate hackathon with 23 teams and five judging panels.",
  ],
  [
    "Nov 2025–present",
    "Student Lead",
    "Kindness Unlimited",
    "Led 55 student volunteers across community-service drives, coordinating logistics, scheduling and reporting.",
  ],
  [
    "2025",
    "Team Leader",
    "Smart India Hackathon · Vision_X2",
    "Led an AI-assisted early-stage dementia detection concept; cleared the first university-level round.",
  ],
  [
    "2025–present",
    "Coordinator",
    "Student Council · ATLAS",
    "Coordinating student-facing activities, communication and university events.",
  ],
  [
    "Oct 2025–Jul 2026",
    "Publicity Head",
    "IEEE Women in Engineering",
    "Led publicity and communications for student technical and community initiatives.",
  ],
  [
    "2026",
    "COIL Project",
    "University of Sussex",
    "Cross-country collaboration examining ethical and effective use of AI in the workplace.",
  ],
];
export const skills = [
  [
    "Programming",
    "Python · TypeScript · Java · SQL",
    "Java and SQL include coursework experience.",
  ],
  [
    "AI / ML",
    "PyTorch · scikit-learn · Hugging Face · XGBoost · LightGBM · CatBoost · SHAP",
    "LLM inference, quantization, clustering, time-series forecasting and model evaluation.",
  ],
  [
    "Data",
    "NumPy · pandas · SciPy · Tableau · Power BI · Excel",
    "Data harmonisation, pipelines, feature engineering and statistical analysis.",
  ],
  [
    "Engineering",
    "React · Firebase · REST APIs · Git / GitHub · GitHub Actions · pytest",
    "API integration, reproducible experiments and automated testing.",
  ],
  [
    "Research",
    "Literature review · Experimental design · Technical writing",
    "Explainable ML, responsible AI and reproducible research.",
  ],
];
export const certifications = [
  [
    "Anthropic",
    "Introduction to Model Context Protocol · Introduction to Agent Skills · AI Fluency: AI Capabilities and Limitations",
  ],
  ["Oxford University", "AI, Justice, and the Rule of Law · Oct 2026"],
  ["Columbia University", "AI Cybersecurity and Governance"],
  ["NVIDIA DLI", "Generative AI"],
  ["Databricks", "AI Foundations"],
  ["IBM", "Vibe Coding · Jan 2026"],
  ["Microsoft", "Power BI · four completed courses"],
  ["Qualcomm", "AI Optimization · 2026"],
];
