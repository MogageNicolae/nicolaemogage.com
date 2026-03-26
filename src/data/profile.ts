// ============================================
// PROFILE DATA
// ============================================

export const profile = {
  name: "Nicolae Mogage",
  title: "AI/ML Engineer and Full Stack Developer",
  email: "nicolaemogage1311@gmail.com",
  location: "Cluj-Napoca, Romania",
  resumeUrl: "/MogageNicolae_Resume.pdf",
  avatarUrl: "/avatar.png",
  available: true,

  // Hero section
  heroHeadline: {
    main: "Engineering AI systems",
    sub: "from research to production",
  },
  heroBio:
    'I design multi-agent architectures, RAG pipelines, and full-stack AI products — shipping LangGraph orchestrators, fine-tuned models, and semantic search across Python, .NET, and React. Currently at <strong style="color:var(--text-primary)">RebelDot</strong>, where I turn complex ML research into reliable software that solves real problems.',
}

export const socials = {
  github: "https://github.com/MogageNicolae",
  linkedin: "https://www.linkedin.com/in/nicolae-mogage",
  twitter: "https://x.com/MogageNicolae",
  instagram: "https://www.instagram.com/nicolaemogage/",
}

// ============================================
// ABOUT
// ============================================

export const about = {
  headline: {
    before: "Curious engineer,",
    emphasis: "driven by ownership",
  },
  bio: [
    'I\'m an AI/ML Engineer and Full Stack Developer based in <strong style="color:var(--text-primary)">Cluj-Napoca, Romania</strong>. I design and build multi-agent architectures, RAG pipelines, and full-stack AI products that run in production - taking full ownership from research prototype to deployed system.',
    "My work spans the full stack of AI engineering: from orchestrating LangGraph agents with semantic search and fine-tuned models, to building end-to-end platforms across Python, .NET, and React that replace hours of manual work with intelligent automation.",
    "I'm finishing a Master's in Artificial Intelligence at Babeș-Bolyai University, where my research focuses on software defect prediction using deep learning and code embeddings. I'm a fast learner who thrives on understanding problems deeply before solving them - curiosity first, ego second.",
    "Outside of work, you'll find me watching Formula 1 races, gaming with friends, or playing sports. I believe the best engineers are the ones who stay curious beyond their IDE - whether that's debating race strategy, exploring new cities, or diving into a completely unrelated rabbit hole at 2 AM.",
  ],
  quote: {
    text: "The best AI system is the one that knows when to ask for help.",
    author: "Personal Motto",
  },
  interests: [
    "Multi-Agent Systems",
    "RAG & Knowledge Graphs",
    "Formula 1",
    "Gaming",
    "Sports",
    "Open Source",
  ],
}

// ============================================
// EDUCATION
// ============================================

export interface Education {
  degree: string
  school: string
  period: string
  location: string
}

export const education: Education[] = [
  {
    degree: "Master of Science in Artificial Intelligence",
    school: "Babeș-Bolyai University",
    period: "Oct 2024 – Jun 2026",
    location: "Cluj-Napoca",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Babeș-Bolyai University",
    period: "Oct 2021 – Jun 2024",
    location: "Cluj-Napoca",
  },
]

// ============================================
// TECH STACK
// ============================================

export interface TechItem {
  name: string
  category: "ai-ml" | "frameworks" | "devops" | "databases" | "languages" | "tools"
}

export const techStack: TechItem[] = [
  // AI & ML (concepts)
  { name: "Deep Learning", category: "ai-ml" },
  { name: "Neural Networks", category: "ai-ml" },
  { name: "Generative AI", category: "ai-ml" },
  { name: "Natural Language Processing", category: "ai-ml" },
  { name: "Computer Vision", category: "ai-ml" },
  { name: "RAG Systems", category: "ai-ml" },
  { name: "Embeddings", category: "ai-ml" },
  { name: "Multi-Agent Systems", category: "ai-ml" },
  { name: "Fine-tuning", category: "ai-ml" },
  { name: "Transfer Learning", category: "ai-ml" },
  { name: "Hyperparameter Optimization", category: "ai-ml" },

  // Frameworks & Libraries
  { name: "PyTorch", category: "frameworks" },
  { name: "LangChain", category: "frameworks" },
  { name: "LangGraph", category: "frameworks" },
  { name: "React", category: "frameworks" },
  { name: "FastAPI", category: "frameworks" },
  { name: ".NET", category: "frameworks" },
  { name: "HuggingFace Transformers", category: "frameworks" },
  { name: "Scikit-Learn", category: "frameworks" },
  { name: "OpenCV", category: "frameworks" },
  { name: "Pandas", category: "frameworks" },
  { name: "NumPy", category: "frameworks" },
  { name: "Matplotlib", category: "frameworks" },
  { name: "Nest.js", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Celery / Redis", category: "frameworks" },
  { name: "gRPC / Protobuf", category: "frameworks" },
  { name: "ComfyUI / Flux", category: "frameworks" },

  // DevOps & Cloud
  { name: "Docker", category: "devops" },
  { name: "Azure", category: "devops" },
  { name: "Terraform", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "Datadog", category: "devops" },
  { name: "Langfuse", category: "devops" },

  // Databases
  { name: "PostgreSQL / pgvector", category: "databases" },
  { name: "MongoDB", category: "databases" },
  { name: "MariaDB", category: "databases" },
  { name: "Neo4j", category: "databases" },

  // Languages
  { name: "Python", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "C#", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "C/C++", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "NoSQL", category: "languages" },
  { name: "Cypher", category: "languages" },

  // Developer Tools
  { name: "Claude Code", category: "tools" },
  { name: "Codex", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ / PyCharm", category: "tools" },
]

export const techCategories: Record<TechItem["category"], string> = {
  "ai-ml": "AI & Machine Learning",
  frameworks: "Frameworks",
  devops: "DevOps & Cloud",
  databases: "Databases",
  languages: "Languages",
  tools: "Developer Tools",
}

// ============================================
// WORK EXPERIENCE
// ============================================

export interface Experience {
  company: string
  role: string
  project?: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    company: "RebelDot",
    role: "Full-Stack Software Engineer & AI Systems Architect",
    project: "Facility Maintenance - AI-Powered Contract Management Platform",
    period: "Aug 2025 - Present",
    location: "Cluj-Napoca",
    description: [
      "Architected a multi-agent LangGraph orchestrator with 4 specialized sub-agents and intent-based routing, enabling complex multi-step contract reasoning from natural language across 12+ database tables and 4 interconnected microservices.",
      "Engineered a modular RAG pipeline integrating MongoDB Atlas vector search, pgvector semantic retrieval, and Confluence documentation ingestion with parent-chunk retrieval and scheduled cache refresh - providing agents with up-to-date domain knowledge for accurate contract interpretation.",
      "Delivered end-to-end AI chat experience across 4 repositories (Python, React/TypeScript, .NET 8/C#) - persistent side panel with field-level change highlighting, accept/reject/undo workflows, and automated term sheet review on save.",
      "Designed a reusable BaseAgentBuilder framework with configurable LLM nodes, tool routing, conditional edges, and Pydantic structured outputs - eliminating duplication and enabling rapid AI feature integration across all agent implementations.",
      "Designed gRPC/protobuf architecture across Python, React/TypeScript, and .NET 8/C# microservices, coordinating 12 proto version bumps with backward compatibility and Buf registry integration for reliable cross-service communication.",
      "Strengthened production reliability through Langfuse observability with automated trace scoring, BLEU-based evaluation datasets, Datadog structured JSON logging with correlation IDs, and gateway timeout resilience with polling recovery.",
      "Integrated OpenAI vector embeddings (text-embedding-3-small) into .NET backend services with pgvector HNSW indexing, enabling semantic search across the organization's contract and customer data at create/update lifecycle hooks.",
    ],
    technologies: ["Python", "LangGraph", "gRPC/Protobuf", "PostgreSQL/pgvector", "MongoDB", "React", "TypeScript", ".NET 8/C#", "Docker", "Langfuse", "Datadog"],
  },
  {
    company: "RebelDot",
    role: "AI Engineer",
    project: "Digital Library - AI-Powered Recommendation Engine",
    period: "Mar 2025 - Oct 2025",
    location: "Cluj-Napoca",
    description: [
      "Designed a weighted embedding fusion system combining 4 semantic signals (LLM-generated reader profiles, favorite categories, recent reading patterns, book descriptions) with HuggingFace 1024d vectors and pgvector cosine similarity for personalized book recommendations.",
      "Built the full recommendation pipeline orchestrating Azure OpenAI profile generation, pgvector similarity search, MMR diversity re-ranking, and a multi-stage filter chain (availability, series ordering, edition deduplication, category constraints) with deterministic caching.",
      "Integrated Azure OpenAI and Azure Translator into backend workflows with LangChain structured outputs, enabling multilingual content normalization across Romanian, Hungarian, French, German, and English for consistent vector space alignment.",
      "Scaled backend processing with 5 Celery/Redis background tasks - daily book catalog sync with batch embedding generation, weekly user profile refresh, and recommendation log cleanup - keeping API endpoints responsive under production load.",
      "Developed 10 FastAPI REST endpoints with typed Pydantic schemas across a dual-database architecture (PostgreSQL/pgvector for vectors, MariaDB for production data), serving 2 production deployments across Romania and Hungary via Azure Web Apps.",
      "Improved recommendation quality through MMR re-ranking with pre-computed similarity matrices, series-aware and edition-aware filtering, overstock prioritization, and category-aware limiting - reducing repetitive results and balancing format diversity.",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "Azure OpenAI", "HuggingFace Embeddings", "PostgreSQL/pgvector", "MariaDB", "Celery", "Redis", "Docker", "Azure Web Apps"],
  },
  {
    company: "RebelDot",
    role: "AI Engineer",
    project: "E-Commerce - DOM Selector Extraction Automation",
    period: "Apr 2025 - Jun 2025",
    location: "Cluj-Napoca",
    description: [
      "Built an AI-powered DOM selector extraction system using FastAPI and OpenAI GPT-4.1, automating coupon template generation across a 3-stage pipeline (toggle detection, coupon box extraction, post-apply validation) that replaced manual template creation for 1,000+ e-commerce sites.",
      "Fine-tuned GPT-4.1 on 150+ annotated DOM/selector pairs, achieving 95% accuracy on validation sets and a 10% improvement over the base model - reducing per-site template cost from ~$0.30 to ~$0.10.",
      "Engineered a DOM token reduction pipeline that compressed average page DOMs from 25K to 8K tokens through tag pruning, empty element removal, and stage-aware preprocessing - cutting fine-tuning costs by 60% and improving model response quality.",
      "Built end-to-end browser automation with Selenium for dataset generation, testing the extraction pipeline across 300+ sites with automated checkout flows, Cloudflare/bot detection handling, and structured result reporting.",
      "Integrated Langfuse for prompt management and observability with remote prompt sync, enabling A/B testing between prompt versions and real-time accuracy tracking across extraction stages.",
      "Coordinated cross-team delivery with the client's QA team for manual validation across 81+ brands, iterating on model accuracy based on live testing feedback and deploying the fine-tuned model to the client's OpenAI platform.",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI GPT-4.1", "Fine-tuning", "Selenium", "Langfuse", "Docker", "GitHub Actions"],
  },
  {
    company: "RebelDot",
    role: "AI Engineer",
    project: "Internal R&D Projects",
    period: "Apr 2025",
    location: "Cluj-Napoca",
    description: [
      "Evaluated 10+ open-source generative models (Stable Diffusion, Flux, DeepFaceLab, GHOST 2.0) and diffuser variants (Ghibli-Diffusion, GTA5 Artwork Diffusion, Kandinsky) under VRAM constraints, delivering a feasibility assessment for face-swapping and artistic style transfer for a live F1 event activation.",
      "Prototyped a generative image pipeline in ComfyUI with Flux as the base model, combining face segmentation for extraction, style-specific LoRAs for artistic transformation (manga, GTA5), and body compositing onto branded backgrounds - generating driver portraits from a single user photo.",
    ],
    technologies: ["Python", "ComfyUI", "Flux", "LoRA", "Segmentation Models", "Stable Diffusion", "DeepFaceLab"],
  },
  {
    company: "RebelDot",
    role: "AI Engineer Intern",
    project: "Internal - AI-Powered Productivity Platform",
    period: "Nov 2024 - Mar 2025",
    location: "Cluj-Napoca",
    description: [
      "Built a multi-agent LangGraph pipeline with intent classification routing queries to specialized Cypher (Neo4j), SQL (Azure SQL), and RAG (pgvector) sub-agents - enabling natural-language access to employee allocations, project data, and company policies across 3 knowledge bases.",
      "Developed the Cypher graph agent with semantic similarity-based few-shot example selection, schema-aware prompts, and a generate-validate-execute-retry loop - supporting natural language querying across 8 node types and 12 relationship types in Neo4j.",
      "Integrated a Slack bot with Celery/Redis async processing, thread-based conversation history, and a Celery Beat notification system polling allocation changes every minute - keeping teams informed of project assignment updates in real time.",
      "Built a RAG pipeline for company policy queries with PDF extraction, chunked OpenAI embeddings, PostgreSQL/pgvector storage with SHA256 deduplication, and top-5 similarity search for contextual response generation.",
      "Owned Azure/Terraform deployment and CI/CD - provisioning App Services, PostgreSQL Flexible Server, and Container Registry with OIDC authentication, Docker multi-stage builds, and automated terraform plan/apply pipelines.",
    ],
    technologies: ["Python", "FastAPI", "LangGraph", "OpenAI", "Neo4j", "Azure SQL", "PostgreSQL/pgvector", "Slack SDK", "Celery", "Redis", "Docker", "Terraform", "Azure"],
  },
  {
    company: "MultiversX",
    role: "API Backend Developer",
    period: "Jul 2024 - Sep 2024",
    location: "Cluj-Napoca",
    description: [
      "Shipped a full-stack on-chain application in a 3-person team - Smart Contract deployment with backend/frontend architecture for user-chain interaction.",
      "Created an API microservice for parsing blockchain transaction events and generating visualizations via Dune Analytics.",
      "Authored comprehensive Rust integration tests for escrow Smart Contract interactions using chain simulator.",
    ],
    technologies: ["Rust", "Go", "TypeScript", "React", "Nest.js", "Smart Contracts"],
  },
  {
    company: "Bitstone",
    role: "Web Developer Intern",
    period: "Jul 2023 - Sep 2023",
    location: "Cluj-Napoca",
    description: [
      "Developed a full-stack e-commerce application using React, Node.js with TypeScript, and MongoDB - from data modeling to deployed product.",
      "Built responsive front-end applications using HTML, SCSS, and JavaScript with external API integration.",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "HTML", "SCSS"],
  },
  {
    company: "Nanolabs",
    role: "Embedded Software Developer Intern",
    period: "Jul 2022 - Sep 2022",
    location: "Cluj-Napoca",
    description: [
      "Wrote drivers for MCP2515, SPI and VESC modules using C for a robotics platform (Harold).",
      "Programmed movement and path execution logic for the robot using Raspberry Pi and C.",
      "Implemented map display, path loading, and real-time position reading from the embedded application to the web interface.",
    ],
    technologies: ["C", "Raspberry Pi", "SPI", "Embedded Systems", "Python", "JavaScript"],
  },
]

// ============================================
// LEADERSHIP & EXTRACURRICULAR
// ============================================

export interface Leadership {
  organization: string
  role: string
  period: string
  description: string[]
}

export const leadership: Leadership[] = [
  {
    organization: "AIESEC Cluj-Napoca",
    role: "Outgoing Internships Vice-President",
    period: "Feb 2023 - Jan 2024",
    description: [
      "Achieved the national award for the department and international nomination.",
      "Member of the 9-person executive board, overseeing weekly meetings to monitor the organization's progress.",
      "Led department of 10+ members to work towards goals that improve leadership, cultural exchange, and unity.",
    ],
  },
]

// ============================================
// PROJECTS
// ============================================

export interface Project {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  year: string
  status?: string
}

const _projects: Project[] = [
  {
    title: "Defect Prediction Engine",
    description:
      "MSc Dissertation - neural network pipeline fusing jina-code-embeddings with CK software metrics for within-project defect prediction on Apache Calcite. Combines LSTM, class-weighted training, and combined feature evaluation.",
    technologies: ["Python", "PyTorch", "Deep Learning", "NLP", "Embeddings"],
    featured: true,
    year: "2025",
    status: "Dissertation",
  },
  {
    title: "Ontology-Aware Neural Machine Translation",
    description:
      "Advanced NMT system integrating domain ontologies with neural machine translation via PEFT adapters. Fine-tuned transformer models for English-French translation with ontology-guided decoding, evaluated using BLEU metrics.",
    technologies: ["Python", "HuggingFace Transformers", "PEFT", "PyTorch"],
    githubUrl: "https://github.com/MogageNicolae/Masters/tree/main/Semester%203/ACL/Research2",
    featured: true,
    year: "2025",
    status: "Research",
  },
  {
    title: "2D HP Protein Folding Solver",
    description:
      "Constraint Satisfaction, Reinforcement Learning, and Greedy approaches to the 2D Hydrophobic-Polar protein folding problem. Implements CSP with AC-3 arc consistency and Q-Learning with visualization.",
    technologies: ["Python", "NumPy", "Matplotlib", "CSP", "Q-Learning"],
    githubUrl: "https://github.com/MogageNicolae/Masters/tree/main/Semester%203/DPML/Research%20Report",
    featured: false,
    year: "2025",
    status: "Research",
  },
  {
    title: "CSP Solver Framework",
    description:
      "Comprehensive Java framework for Constraint Satisfaction Problems with Backtracking, Forward Checking, GBJ, and GENET search strategies. Includes AC-3/PC-4 consistency reductions and solves Dinner Party and Nonogram puzzles.",
    technologies: ["Java", "CSP", "Backtracking", "Arc Consistency"],
    githubUrl: "https://github.com/MogageNicolae/Masters/tree/main/Semester%203/DPML/Software%20Report",
    featured: false,
    year: "2025",
    status: "Academic",
  },
  {
    title: "Multi-Agent Fire Suppression Simulation",
    description:
      "Multi-agent system simulating coordinated fire suppression with sensor agents, firefighter agents, and control agents using JADE framework. Agents communicate and cooperate to detect and extinguish fires in real time.",
    technologies: ["Java", "JADE", "Multi-Agent Systems"],
    githubUrl: "https://github.com/MogageNicolae/Masters/tree/main/Semester%202/Multi%20Agent%20Systems",
    featured: false,
    year: "2025",
    status: "Academic",
  },
  {
    title: "Multilingual Translation Pipeline",
    description:
      "Machine translation dataset pipeline loading and preprocessing parallel corpora from Tatoeba, CCMatrix, Open Subtitles, and NLLB for low-resource language pairs targeting Romanian.",
    technologies: ["Python", "HuggingFace Datasets", "Transformers", "NLP"],
    githubUrl: "https://github.com/MogageNicolae/Masters/tree/main/Semester%202/Natural%20Language%20Processing",
    featured: false,
    year: "2025",
    status: "Academic",
  },
  {
    title: "Information Retrieval System",
    description:
      "Text IR system built from scratch with indexing, query processing, and ranked retrieval. Evaluated on CACM dataset using P@3, P@10, and R-Precision metrics with Porter stemming.",
    technologies: ["Python", "NLTK", "Information Retrieval", "Text Processing"],
    githubUrl: "https://github.com/MogageNicolae/Masters/tree/main/Semester%203/ACL",
    featured: false,
    year: "2025",
    status: "Academic",
  },
  {
    title: "Handwriting Recognition System",
    description:
      "End-to-end handwriting recognition using WideResNet + LSTM with CTC loss. Full-stack web app with Flask, MongoDB, Google Drive integration, user authentication, and recognition history. Achieved 22.91% CER on CVL dataset.",
    technologies: ["PyTorch", "Flask", "MongoDB", "Google API", "JavaScript"],
    featured: true,
    year: "2024",
    status: "Thesis",
  },
  {
    title: "Video Super-Resolution Model",
    description:
      "AI model to increase resolution and enhance color in videos using PyTorch. Explored video-super-resolution methods and wrote a 6-page research paper on the task.",
    technologies: ["Python", "PyTorch", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/MogageNicolae/Bachelors/tree/main/Semester%205/Research%20Project",
    featured: true,
    year: "2024",
    status: "Research",
  },
  {
    title: "Knowledge Discovery & Data Mining",
    description:
      "Data mining pipeline analyzing MovieLens, Wine Quality, and CelebA datasets. Includes association rule mining, clustering, SQL schema generation, and comprehensive visualization.",
    technologies: ["Python", "pandas", "Matplotlib", "SQL", "Data Mining"],
    githubUrl: "https://github.com/MogageNicolae/Masters/tree/main/Semester%202/Knowledge%20Discovery",
    featured: false,
    year: "2024",
    status: "Academic",
  },
  {
    title: "U-Net Segmentation Model",
    description:
      "Image segmentation model based on modified U-Net architecture with custom upsampling. Tracked training with Wandb, served predictions via Gradio web interface.",
    technologies: ["PyTorch", "Wandb", "Gradio", "Pillow"],
    githubUrl: "https://github.com/MogageNicolae/Bachelors/tree/main/Semester%205/Computer%20Vision%20and%20Deep%20Learning",
    featured: true,
    year: "2023",
    status: "Research",
  },
  {
    title: "RPA Reddit Scraper",
    description:
      "UiPath RPA automation that scrapes Reddit comments, applies custom filters, and sends results via email with configurable parameters. Team project with documentation.",
    technologies: ["C#", "UiPath", "RPA", "Email Automation"],
    githubUrl: "https://github.com/MogageNicolae/RPA-Project",
    featured: false,
    year: "2023",
    status: "Academic",
  },
]

export const projects = _projects.sort((a, b) => Number(b.year) - Number(a.year))

// ============================================
// BLOG POSTS
// ============================================

interface RawBlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
  tags: string[]
  content: string
  featured: boolean
}

export interface BlogPost extends RawBlogPost {
  readingTime: string
}

function calcReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

const rawBlogPosts: RawBlogPost[] = [
  {
    title: "GraphRAG vs Vector RAG: What I Learned at NODES 2025",
    slug: "graphrag-vs-vector-rag-nodes-2025",
    date: "2025-12-20",
    excerpt:
      "Knowledge Graphs + LLMs are the most promising frontier in AI. Here's what stood out from the NODES 2025 conference on GraphRAG and agentic workflows.",
    tags: ["RAG", "Knowledge Graphs", "Conference"],

    content: `
## GraphRAG vs Vector RAG: What I Learned at NODES 2025

The integration of Knowledge Graphs with Large Language Models - often called GraphRAG - is currently one of the most promising frontiers in AI. I attended NODES 2025 because it promised a structural solution to LLM limitations: replacing the "black box" of vector similarity with the "glass box" of graph relationships.

As someone who builds RAG systems in production, I constantly face the limitations of standard vector-based retrieval. Documents get chunked, embedded, and stored - but the relationships between entities, the hierarchical structure of knowledge, and the ability to reason across multiple hops are all lost in the process. GraphRAG promised to fix exactly this.

### The Rise of Agentic Workflows

The most interesting trend across all presentations was the shift from generation to action. LLMs are no longer just text generators - they're becoming orchestrators that decide what tools to use and when.

**The GDS Agent** (Brian Shei) was a standout. Instead of asking an LLM to hallucinate a path between London Underground stations, the system used the Model Context Protocol (MCP) to give the LLM "tools." The LLM didn't calculate the path - it recognized the intent ("quickest way"), selected the correct algorithm (Yen's k-shortest path), and parameterized it correctly using 'time' as a weight. This is a fundamental shift: the LLM becomes a decision-maker, not a calculator. It understands what needs to be done and delegates to the right algorithm.

**Cisco's CAPE** (Platform Engineering) validated the agent concept in a DevOps setting. The interesting part was their "self-correcting" loop. If the LLM generated invalid Cypher (the graph query language), the agent would catch the error, analyze the failure message, and retry with a corrected query - effectively debugging its own linguistic output before presenting it to the user. In my own work building multi-agent systems, I've seen this pattern work exceptionally well. The key is giving agents enough context to understand why they failed.

**The INRAE Agricultural Research** presentation showed GraphRAG applied to scientific literature. They built a knowledge graph from research papers and used it to answer questions like "which researchers collaborated across multiple institutions on climate adaptation?" - a query that requires multi-hop reasoning across author, institution, and topic nodes simultaneously.

### Where Vector RAG Fails

The Ekimetrics and Lux4IT presentations provided empirical evidence that standard Vector RAG fails at tasks involving aggregation or negative logic.

**The "Negative Query" Problem:** Vector RAG can find "papers about climate change," but it fails at "who did NOT publish in 2021?" or "who are the common authors between unit A and B?". These queries require set operations - intersection, difference, complement - that are trivial graph traversals but impossible with cosine similarity alone. When I tested this pattern against our own MongoDB vector search pipeline, the results confirmed exactly this limitation.

**Expert Identification:** The oncology talk was fascinating because it used graph centrality algorithms - typically used for social networks - to identify Key Opinion Leaders in medical research. By modeling the citation graph and collaboration patterns, the system could surface experts that keyword search would never find. PageRank on a citation graph identifies influential researchers far better than searching for "expert in oncology."

**Temporal Reasoning:** Another failure mode I noticed across presentations: vector RAG struggles with time-dependent queries. "What changed between version 1 and version 2?" requires comparing two states of a document - something a graph with temporal edges handles naturally but embeddings collapse into a single point.

### The Architecture That Works

Based on what I saw at the conference and my own production experience, the winning architecture combines three layers:

- **Vector search** for initial retrieval - cast a wide net using semantic similarity to find relevant document chunks
- **Graph traversal** for structured reasoning - once you have candidate entities, use the graph to find relationships, paths, and aggregations
- **Agent orchestration** to tie it all together - an LLM-based router that decides whether a query needs vector search, graph traversal, or both

The Ekimetrics team called this "Graph-Augmented RAG" rather than pure GraphRAG, and I think the naming is important. You don't replace vector search - you augment it with structural reasoning.

### Practical Takeaways for Production Systems

If you're building RAG systems today, here's what I took away:

- **Start with vector RAG** - it handles 70-80% of queries well enough, and the tooling is mature
- **Add a graph layer when you need it** - entity resolution, relationship queries, and aggregation queries are clear signals
- **Use Neo4j or similar for the graph store** - the Cypher query language maps naturally to LLM-generated queries
- **Invest in entity extraction** - the quality of your graph depends entirely on how well you extract entities and relationships from raw documents
- **Build agent routing early** - don't try to force every query through the same pipeline; route simple similarity queries to vector search and complex reasoning queries to the graph

### What's Next

The conference made it clear that the future is hybrid systems orchestrated by agents. The tools are maturing rapidly - Neo4j's GDS library, LangChain's graph integrations, and the Model Context Protocol are all converging on this pattern. For my own work, I'm planning to add a graph layer to our existing RAG pipeline for document relationship queries, starting with Confluence documentation where the page hierarchy provides natural graph structure.
    `,
    featured: true,
  },
  {
    title: "Deep Learning for Software Defect Prediction: A Survey",
    slug: "deep-learning-software-defect-prediction",
    date: "2025-11-26",
    excerpt:
      "From CNNs to Transformers - how neural architectures are replacing handcrafted metrics for predicting where code will break.",
    tags: ["Deep Learning", "Research", "Software Quality"],

    content: `
## Deep Learning for Software Defect Prediction: A Survey

Software Defect Prediction has evolved from a niche academic interest into a critical component of modern software quality assurance. As software systems grow in scale and complexity - spanning healthcare, finance, aviation, and telecommunications - the requirement for reliability becomes non-negotiable. Recent global outages caused by faulty updates have highlighted just how precarious our digital infrastructure can be, and how much we need proactive defect detection.

This is the topic of my master's dissertation at Babeș-Bolyai University, and this post distills the key findings from my survey of the field.

### The Paradigm Shift: From Metrics to Semantics

Historically, SDP relied on statistical correlations with static code metrics - Lines of Code, Halstead complexity, McCabe's cyclomatic complexity, and CK object-oriented metrics. These methods operated on the assumption that structural complexity is a direct proxy for defectiveness. A method with high cyclomatic complexity is more likely to contain bugs than a simple getter.

This simplification worked for decades, but it fails to capture the subtle semantic logic errors that characterize modern software failures - things like incorrect variable usage, data flow anomalies, race conditions, or off-by-one errors in loop bounds. A method can be structurally simple but semantically broken.

Deep Learning changes the game by automatically extracting features from source code, bypassing the need for handcrafted metrics entirely. Instead of telling the model what to look for, you give it raw code and let it learn what matters.

### Neural Architectures for Code

The field has progressed through several generations of architectures, each capturing a different aspect of code:

**CNNs** treat code as a 1D signal - a sequence of tokens - and apply convolutional filters to detect local patterns. They're good at catching things like nested loops, complex conditionals, suspicious variable shadowing, and repeated anti-patterns. TextCNN-based approaches achieve decent performance on file-level defect prediction, but they're fundamentally limited by their local receptive field.

**LSTMs** capture sequential dependencies, understanding how information flows through a function from top to bottom. They excel at detecting issues where the bug is in the ordering of operations - a resource allocated but never freed, a variable read before it's initialized. The sequential nature of LSTMs maps naturally to the sequential execution of code. In my dissertation work, I use LSTM layers to process code embedding sequences and find they capture temporal patterns that CNNs miss.

**Graph Neural Networks** represent the most exciting direction. They operate on Code Property Graphs (CPGs) - a unified representation combining Abstract Syntax Trees (ASTs), Control Flow Graphs (CFGs), and Program Dependency Graphs (PDGs). GNNs can reason about code structure in ways that sequential models fundamentally cannot. A data dependency that spans 50 lines of code is invisible to an LSTM but a single edge in a graph.

**Transformer-based LLMs** (CodeBERT, GraphCodeBERT, UniXcoder) bring pre-trained code understanding. Fine-tuned on defect data, they leverage patterns learned from millions of code repositories. The key advantage is transfer learning - a model pre-trained on GitHub's entire code corpus arrives with an understanding of programming patterns that would take a from-scratch model millions of examples to learn.

### The Representation Problem: How to Encode Code

The choice of code representation is as important as the architecture. The field has evolved through several stages:

**Token embeddings** - simple word2vec-style embeddings of code tokens. Fast and simple, but loses structural information entirely.

**AST-based representations** - parsing code into its abstract syntax tree preserves hierarchical structure. Methods like tree-LSTM and recursive neural networks can process these directly.

**Code embeddings** - models like jina-code-embeddings and CodeBERT produce dense vector representations that capture semantic meaning. In my dissertation, I fuse these embeddings with traditional CK metrics to get the best of both worlds: the semantic understanding of neural embeddings plus the proven discriminative power of complexity metrics.

**Code Property Graphs** - the most complete representation, combining syntax, control flow, and data dependencies into a single graph. This is where GNNs shine, but the computational cost of constructing and processing CPGs at scale is non-trivial.

### Persistent Challenges

**Class imbalance** remains the biggest practical issue. In real-world codebases, defective modules are rare - typically 5-20% of files contain bugs. Standard training produces models that predict "no defect" for everything and still achieve 80%+ accuracy. Solutions include SMOTE oversampling, class-weighted loss functions (which I use in my work), focal loss, and cost-sensitive learning. None is a silver bullet.

**Data leakage** is surprisingly common in published results. Time-based leakage - using future commits to predict past defects - inflates metrics dramatically. Cross-project leakage - training on the same codebase you evaluate on - is another common trap. Rigorous evaluation requires temporal splitting: train only on data that existed before the test period.

**Computational cost** of deploying large models in CI pipelines is non-trivial. A model that takes 30 seconds per file is unusable in a pipeline processing thousands of files on every commit. This creates a tension between accuracy and latency that practical systems must navigate.

**Granularity** is an underappreciated problem. File-level prediction tells you "this file probably has a bug" - useful but imprecise. Method-level prediction is more actionable but harder because there's less context. Line-level prediction is the holy grail but requires extremely precise models.

### My Approach: Embedding Fusion with CK Metrics

For my dissertation on the Apache Calcite codebase, I'm exploring a fusion approach: combining jina-code-embeddings (which capture semantic meaning) with traditional CK software metrics (which capture structural complexity). The hypothesis is that embeddings alone miss the simple structural signals that metrics capture well, while metrics alone miss the semantic nuances that embeddings understand.

Early results using LSTM classifiers with class-weighted training show promise - the combined features outperform either source alone on within-project prediction.

### What's Next

The frontier is converging on two directions: **agentic AI for autonomous defect verification** - models that don't just flag bugs but propose and validate fixes automatically - and **continuous prediction** - models that update their predictions in real-time as code changes, integrated directly into the IDE rather than running post-hoc in CI.
    `,
    featured: true,
  },
  {
    title: "Shift Quantization: Compressing Neural Networks for Edge Deployment",
    slug: "shift-quantization-neural-networks",
    date: "2025-05-25",
    excerpt:
      "Comparing ADMM, INQ, and DenseShift quantization techniques for deploying neural networks on resource-constrained devices.",
    tags: ["Deep Learning", "Optimization", "Research"],

    content: `
## Shift Quantization: Compressing Neural Networks for Edge Deployment

Deep Neural Networks have transformed computer vision, natural language processing, and especially autonomous driving. But these advances come with a cost: modern models require billions of floating-point multiplications during inference, making them impractical for resource-constrained devices like automotive embedded systems, IoT sensors, and mobile phones.

This paper, co-authored with Denis-Angel Moldovan and Darian-Dominik Serban, investigates a specific family of compression techniques: Shift Quantization. The core idea is elegant - replace expensive multiplication operations with cheap bit-shift operations by constraining weights to powers of two.

### Why Shift Quantization Matters

The bottleneck in DNN inference isn't just the number of parameters - it's the arithmetic. A single convolutional layer might require millions of multiply-accumulate operations. On a GPU with dedicated FP32 units, this is fast. On an embedded CPU or a custom ASIC, each multiplication costs 10-100x more energy than an addition.

Shift Quantization sidesteps this entirely. If all weights are powers of two (1, 0.5, 0.25, 0.125, ...), then multiplication becomes a bit-shift operation - something that costs essentially nothing on any hardware. The question is: how much accuracy do you lose?

### The Three Methods

We compared three quantization approaches on a ResNet-18 model trained on MNIST:

**ADMM (Alternating Direction Method of Multipliers)** formulates quantization as a constrained optimization problem. The method alternates between two steps: update weights to minimize the training loss (ignoring constraints), then project weights onto the nearest quantized values (ignoring the loss). By gradually increasing the penalty for violating constraints, ADMM converges to a solution that's both accurate and quantized. The result is mathematically clean, but convergence can be slow - each iteration requires a full training pass.

**INQ (Incremental Network Quantization)** takes a more pragmatic approach. Instead of quantizing all weights simultaneously, INQ quantizes them in groups. First, quantize the 25% of weights with the largest magnitudes (these are most important and least affected by quantization). Then fine-tune the remaining weights to compensate. Repeat at 50%, 75%, and finally 100%. This progressive strategy avoids the "quantization shock" of converting everything at once, but requires multiple training rounds - we ran 4 rounds of re-training in our experiments.

**DenseShift** is the most hardware-aligned approach. It constrains all weights to the form (-1)^s * 2^p, where s is a sign bit and p is a small integer. Every multiplication becomes: flip the sign (if s=1) and shift the bits by p positions. The training procedure uses a straight-through estimator to backpropagate through the non-differentiable quantization function. DenseShift emerged as the clear winner in our experiments.

### Measuring the Tradeoff: Compression-Accuracy Index

A fundamental challenge in model compression research is comparing methods fairly. One method might achieve 95% accuracy with 4x compression, while another achieves 90% accuracy with 16x compression. Which is better? It depends on your constraints.

We introduced the **Compression-Accuracy Index (CAI)** as a unified metric that balances both factors. CAI is defined as the product of the compression ratio and the accuracy, normalized so that the uncompressed baseline scores 1.0. A method that maintains accuracy while compressing scores above 1.0; a method that loses too much accuracy scores below.

DenseShift achieved the best CAI score across all experiments - maintaining strong accuracy while achieving the highest compression ratio. The reason is elegant: by constraining weights to powers of two, DenseShift maps directly to hardware bit-shift operations, so there's no "approximation gap" between what the quantized weights represent and what the hardware actually computes.

### Practical Implications

For engineers deploying models on edge devices, the takeaway is: **match your quantization strategy to your target hardware's native operations**. A 4-bit shift-quantized model on hardware with bit-shift units will outperform a 4-bit fixed-point model on the same hardware, even if the fixed-point model has slightly better theoretical accuracy.

The second takeaway is about the training procedure. DenseShift's straight-through estimator is simple to implement and works well in practice. If you're using PyTorch, the core idea fits in about 20 lines of code - override the forward pass with quantized weights, but use the full-precision gradients in the backward pass.

### Future Directions

Our paper focused on MNIST with ResNet-18, which is a controlled benchmark. The natural next step is evaluating these methods on larger models (ResNet-50, EfficientNet) and more complex tasks (ImageNet, COCO object detection). The other open question is latency profiling on actual hardware - our compression ratios are theoretical. Real-world speedup depends on whether the deployment platform has optimized kernels for shift operations.
    `,
    featured: true,
  },
  {
    title: "Multi-Agent Systems for F1 Racing Strategy",
    slug: "multi-agent-systems-f1-racing",
    date: "2025-05-05",
    excerpt:
      "How game theory, reinforcement learning, and agent-based modeling can revolutionize strategic decision-making in Formula 1.",
    tags: ["Multi-Agent Systems", "Reinforcement Learning", "Research"],

    content: `
## Multi-Agent Systems for F1 Racing Strategy

Formula 1 is the pinnacle of motorsport - an international competition where high technology, elite driving skills, and complex strategic planning converge to determine victory. What makes F1 particularly interesting from a computer science perspective is that the pursuit of ever-incremental competitive gains has driven teams to adopt methods that extend far beyond the engineering of the car itself.

This research paper, written for the Multi-Agent Systems course at Babeș-Bolyai University, explores how MAS can model and optimize the complex, multi-stakeholder decision-making that happens during an F1 race.

### Why Multi-Agent Systems?

An F1 race involves simultaneous interactions between 20 cars, their drivers, pit crews, strategy engineers, and race control. Each entity has its own objectives, constraints, information, and decision-making capabilities. The driver optimizes for lap time but must manage tire wear. The pit wall optimizes for race position but must account for traffic patterns. The meteorologist predicts rain windows. The tire engineer estimates degradation curves.

Traditional optimization treats this as a single objective function. MAS treats it as what it actually is: a distributed system of autonomous agents that must coordinate under uncertainty and time pressure.

### Game Theory for Strategic Interactions

Pit stop timing is a classic game-theoretic scenario. Your optimal strategy depends on what your competitors do - and they're making decisions simultaneously based on what they think you'll do.

Consider a two-team scenario: if Team A pits early for fresh tires, Team B can either cover (pit immediately to maintain position) or stay out (overcut by running faster on an empty track). The Nash equilibrium of this game depends on the tire degradation curves, track position, gap between cars, and remaining laps. Game-theoretic methods can compute these equilibria in real-time, accounting for multiple competitors simultaneously.

We explored both **normal-form games** (for discrete strategic decisions like tire compound choice) and **extensive-form games** (for sequential decisions like pit stop ordering). The key insight is that F1 strategy is not a single game but a sequence of nested games played under incomplete information.

### Reinforcement Learning for Race Strategy

Reinforcement Learning offers a fundamentally different approach: instead of modeling the game structure explicitly, let an agent learn optimal strategies through simulation.

We implemented a Deep Q-Network (DQN) agent that learns tire management and pit stop timing by simulating thousands of race scenarios. The state space includes: current tire compound, tire age, fuel load, track position, gap to car ahead, gap to car behind, weather probability, and remaining laps. The action space includes: push hard, manage tires, pit for softs, pit for mediums, pit for hards.

The most interesting result: the RL agent discovered a "defensive overcut" strategy that human engineers rarely use. By deliberately staying out 2-3 laps longer than optimal on degrading tires, the agent sometimes gains position because opponents who pit first get stuck in traffic. This violates the conventional wisdom of pitting at the optimal tire life, but the agent learned that the traffic effect outweighs the tire degradation penalty in specific scenarios.

### Agent-Based Coordination

Team operations require real-time coordination between the driver, pit wall, and mechanics. We modeled this as a multi-agent system with specialized agents:

- **Tire Strategy Agent** - monitors degradation, predicts remaining life, recommends pit windows
- **Gap Analysis Agent** - tracks gaps to competitors, identifies undercut/overcut opportunities
- **Weather Agent** - integrates forecast data, recommends wet tire transitions
- **Pit Stop Coordinator** - synchronizes pit entry with mechanic readiness, minimizes stationary time
- **Race Director Agent** - aggregates recommendations, resolves conflicts, communicates final decisions

These agents communicate through a shared blackboard architecture, with the Race Director having final authority when agent recommendations conflict. The negotiation protocol uses priority-weighted voting, where each agent's vote is weighted by the confidence of its recommendation.

### Challenges and Ethics

**Real-time latency** is the hardest engineering challenge. F1 decisions must be made in seconds, not minutes. Any agent system must meet hard latency constraints - a recommendation that arrives one lap too late is worse than no recommendation at all.

**Data volume** is staggering. A modern F1 car generates data from hundreds of sensors at thousands of samples per second. Processing this in real-time while running multi-agent negotiations requires careful architecture design - we recommend a tiered approach where raw sensor data is pre-processed into high-level features before reaching the agent layer.

**Ethical considerations** are non-trivial. If an autonomous strategy system makes a decision that causes a crash, who is responsible? The FIA's regulations currently require all strategic decisions to be made by human engineers, but as AI advisory systems become more sophisticated, the line between "recommendation" and "decision" blurs.

### What I Learned

This research reinforced my conviction that multi-agent systems are most powerful when each agent has a clearly bounded domain of expertise. The temptation is to build one super-agent that handles everything, but in practice, specialized agents that negotiate produce better outcomes than monolithic systems - both in F1 strategy and in the production AI systems I build at work.
    `,
    featured: false,
  },
  {
    title: "Multilingual Machine Translation: LLMs vs Traditional MNMT",
    slug: "multilingual-machine-translation",
    date: "2025-04-05",
    excerpt:
      "Can LLMs replace traditional multilingual NMT systems? A look at the current state of translation for low-resource languages like Romanian.",
    tags: ["NLP", "Translation", "Research"],

    content: `
## Multilingual Machine Translation: LLMs vs Traditional MNMT

Machine translation into Romanian is a deceptively hard problem. Despite Romanian being a Romance language with structural similarities to French, Italian, and Spanish, the available parallel training data is orders of magnitude smaller than for high-resource language pairs like English-French. This data scarcity, combined with domain heterogeneity across available corpora, makes Romanian a fascinating test case for multilingual NMT.

For my NLP course project, I built a multilingual translation system and compared it against the current literature on LLM-based translation. The results were both encouraging and humbling.

### The Experiment

We fine-tuned Google's mT5-small - a multilingual sequence-to-sequence Transformer - on a Romanian-centric corpus combining four source languages (English, French, Italian, German) translating into Romanian. The key design decisions:

**Multi-corpus fusion:** We merged parallel sentence pairs from four different sources - CCMatrix (web-crawled), Tatoeba (community-contributed), Open Subtitles (conversational), and NLLB (curated for low-resource languages). Each contributed up to 5,000 sentence pairs per language, yielding 70,143 total examples.

**Language-tag prefixing:** Each source sentence was prepended with a language tag (<en>, <fr>, <it>, <de>) to help the model distinguish between input languages. This is a simple but effective technique - without tags, the model frequently confused Italian and Romanian input, producing garbled output that mixed both languages.

**Training setup:** Learning rate 3e-5, batch size 32, 1 epoch. We used the Seq2SeqTrainer from Hugging Face with BLEU-based checkpointing. The final test BLEU score was 5.28 - low by absolute standards, but informative about the challenges.

### Why 5.28 BLEU? Understanding the Result

A BLEU score of 5.28 looks terrible on paper. For context, production NMT systems typically score 30-50 on standard benchmarks. But several factors explain the gap:

**Model size:** mT5-small has 300M parameters. Production systems use models 10-100x larger. The model simply doesn't have enough capacity to learn translation patterns for four language pairs simultaneously.

**Training data:** 70K sentence pairs is a tiny dataset for machine translation. Google Translate was trained on billions of sentence pairs. Our model sees each language pair only ~17,500 times during training.

**Domain mismatch:** Our test set contains a mix of domains (web text, subtitles, formal translations). The model learned a "average" of all these domains rather than excelling at any single one.

**One epoch:** We trained for a single epoch due to compute constraints. Most NMT systems train for 20-50 epochs with learning rate scheduling and data augmentation.

The result is actually reasonable for what it is: a proof-of-concept that a small multilingual model can learn basic translation patterns from limited data in a single training run.

### LLMs vs Established Systems: The Literature

The broader literature paints a nuanced picture of LLM-based translation versus traditional NMT:

**Where LLMs win:** Recent benchmarks across 102 languages and 606 translation directions show that LLMs can exceed supervised baselines like NLLB on English-centric tasks. The XGLUE and XTREME benchmarks confirm that scale brings cross-lingual capability - models like GPT-4 and Claude can translate acceptably between many language pairs without any translation-specific fine-tuning.

**Where LLMs fail:** For low-resource language pairs (especially non-English-centric ones like Italian-to-Romanian), LLMs struggle to match dedicated NMT systems. Performance varies dramatically based on language characteristics and prompt design. An LLM that excels at English-to-Romanian might fail at Italian-to-Romanian despite both being Romance languages, because the LLM's training data is heavily English-centric.

**The transfer learning advantage:** Multilingual NMT models with complete parameter sharing demonstrate clear strengths in low-resource translation. Training on high-resource pairs (English-French) transfers knowledge that improves low-resource pairs (English-Romanian). The shared decoder learns language-universal patterns that generalize across targets.

### Persistent Challenges

**Evaluation methodology:** A notable limitation across all approaches is that evaluation relies on human-translated test sets. When using zero-shot methods, we're measuring how well the model matches one particular human translation, ignoring equally valid alternatives. Metrics like BLEU are known to correlate poorly with human judgments for low-resource languages.

**English centricity:** Massively multilingual models face performance imbalances that consistently favor English-centric translation directions. English-to-X is almost always better than X-to-Y for non-English pairs, because English dominates the pre-training data.

**Training optimization:** MNMT models suffer from sub-optimal training when language pairs are handled uniformly. High-resource pairs dominate gradients and low-resource pairs get undertrained. Temperature-based sampling and curriculum learning help but don't fully solve the problem.

### Practical Takeaways

For anyone building production translation involving Romanian or other mid-resource languages:

- **Use established systems** (Google Translate, DeepL) when you need reliable quality today
- **Fine-tune multilingual models** when you need domain-specific translation (legal, medical, technical) that generic systems handle poorly
- **Invest in parallel data collection** - even a few thousand high-quality domain-specific sentence pairs dramatically improve fine-tuned model quality
- **Always use language tags** - they're simple but they prevent the model from confusing structurally similar languages
- **Evaluate with multiple metrics** - BLEU alone is insufficient for low-resource languages; add chrF, COMET, and human evaluation
    `,
    featured: false,
  },
  {
    title: "Handwriting Recognition: From WideResNet to Production",
    slug: "handwriting-recognition-widresnet",
    date: "2024-06-15",
    excerpt:
      "Building an end-to-end offline handwriting recognition system using WideResNet and LSTM - my bachelor's thesis project.",
    tags: ["Computer Vision", "Deep Learning", "PyTorch"],

    content: `
## Handwriting Recognition: From WideResNet to Production

Offline handwritten text recognition is one of the oldest problems in computer vision, and it remains unsolved in the general case. While OCR for printed text is essentially a solved problem (modern systems achieve 99%+ accuracy), handwritten text introduces variability in letter shapes, spacing, slant, and stroke width that makes recognition fundamentally harder.

For my bachelor's thesis at Babeș-Bolyai University, I built an end-to-end handwriting recognition system - from the neural network architecture to a deployed web application. This post covers the technical decisions, results, and lessons learned.

### Why Not Just Use Transformers?

Most state-of-the-art handwriting recognition models in 2024 use Transformer-based architectures: a Vision Transformer (ViT) encoder processes the image, an autoregressive decoder generates the text character by character, and a language model post-processes the output to fix errors. Systems like TrOCR achieve CER below 5% on standard benchmarks.

I deliberately chose a simpler architecture for two reasons. First, understanding: I wanted to deeply understand every component of the pipeline rather than relying on a pre-trained Transformer as a black box. Second, constraints: my thesis had to demonstrate original architectural decisions, not just fine-tune an existing model.

### The Architecture

The system has two stages, each handling a different aspect of the recognition:

**WideResNet** (pre-trained on ImageNet, fine-tuned for handwriting features) acts as the visual feature extractor. It takes a grayscale line image (resized to a fixed height with variable width) and produces a sequence of feature vectors - one per horizontal position. WideResNet was chosen over standard ResNet because its wider layers provide richer features at the cost of more parameters, which is an acceptable tradeoff when your bottleneck is feature quality, not model size.

The key architectural decision was how to convert the 2D feature map into a 1D sequence. I used column-wise pooling: for each horizontal position in the feature map, I average-pool across the vertical dimension. This produces a sequence of feature vectors where each vector represents the visual content of one vertical "strip" of the input image.

**LSTM** takes these feature vectors and produces character-level predictions using CTC (Connectionist Temporal Classification) loss. CTC is essential for this task because it handles the alignment problem - the model doesn't know which characters correspond to which positions in the image. CTC allows the model to output a sequence of characters without explicit alignment labels, using a special "blank" token to handle variable-length outputs.

I used a bidirectional 2-layer LSTM with 256 hidden units per direction. Bidirectionality is important because handwriting context flows in both directions - the shape of a letter is often disambiguated by the letters around it.

### Training Details

**Dataset:** The IAM Handwriting Database - the standard benchmark for English handwriting recognition, containing 13,353 text lines from 657 different writers. The dataset is challenging because it includes a wide variety of writing styles, from neat cursive to barely legible scrawl.

**Preprocessing pipeline:** Each line image goes through: binarization (Otsu's method), deskewing (using the Hough transform to detect and correct slant), normalization (resize to fixed height of 64px with preserved aspect ratio), and augmentation (random affine transforms, elastic distortion, and Gaussian noise).

**Training regime:** Adam optimizer with learning rate 1e-3, cosine annealing schedule, batch size 16, 50 epochs. The WideResNet backbone was frozen for the first 5 epochs (only training the LSTM head), then unfrozen with a 10x lower learning rate for end-to-end fine-tuning.

### Evaluation: Cross-Dataset Generalization

For validation and evaluation, I used the CVL dataset with a 25/75 split (25% for validation, 75% for evaluation). Using a completely different dataset for evaluation is crucial - it tests whether the model generalizes beyond the writing styles it was trained on. Many papers report results on IAM test splits, which share writers with the training set. Cross-dataset evaluation is a much harder and more honest benchmark.

### Results: 22.91% CER

The model achieved a Character Error Rate of 22.91% on the CVL evaluation set. This means roughly 1 in 4 characters is wrong. For context:

- State-of-the-art Transformer models achieve ~3-5% CER on IAM (same-dataset evaluation)
- Cross-dataset CER is typically 2-3x higher than same-dataset CER
- A CER of ~23% on cross-dataset evaluation is actually reasonable for a CNN+RNN pipeline without a language model

The error analysis revealed clear patterns: the model frequently confuses visually similar characters (l/i, m/n, a/o), struggles with very short words (1-2 characters), and makes systematic errors on rare characters and punctuation. Most of these errors could be corrected by a simple language model that knows "teh" should be "the."

### The Web Application

I integrated the model into a production web application:

**Backend:** Flask with MongoDB for user data storage. The API accepts image uploads, runs line segmentation, sends each line through the model, and returns recognized text.

**Line segmentation:** Full-page images are segmented into individual lines using horizontal histogram projection. The algorithm computes the sum of dark pixels per row, smooths the histogram, and identifies gaps (low-density regions) that separate text lines. This works well for regular handwriting but struggles with severely slanted or overlapping lines.

**Google Drive integration:** Authenticated users can import images directly from Google Drive, which required implementing the Google OAuth2 flow and the Drive API for file listing and download.

**Privacy by design:** Unauthenticated users can use the recognition service freely - their images are processed in memory and never stored. Authenticated users get a history feature that saves recognized texts to MongoDB, allowing them to review and edit past recognitions.

### What I'd Do Differently

If I were starting this project today, I'd make three key changes:

- **Vision Transformer encoder** instead of WideResNet - ViT captures long-range dependencies between distant parts of the image, which matters for connecting letters in cursive writing
- **N-gram language model** for post-processing - even a simple 3-gram character model would catch most of the l/i and m/n confusions, potentially halving the CER
- **Attention-based decoder** instead of CTC - CTC assumes conditional independence between output positions, which is a strong (and wrong) assumption for natural language. An autoregressive decoder with attention can model character dependencies directly

With these changes, I estimate the cross-dataset CER could drop below 10%.
    `,
    featured: true,
  },
]

export const blogPosts: BlogPost[] = rawBlogPosts.map((post) => ({
  ...post,
  readingTime: calcReadingTime(post.content),
}))
