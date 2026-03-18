const withPublicAssetPath = (value) => {
  if (!value || value.startsWith("/") || /^https?:\/\//i.test(value)) {
    return value;
  }

  return `/${value}`;
};

const rawProjects = [
  {
    title: "FindH",
    mediaSrc: "findh.webm",
    technologies:
      "Next.js, React, Node.js, Express.js, Supabase, PostgreSQL, Framer Motion, GSAP",
    description:
      "FindH is a rental verification platform that connects tenants with nearby agents who can physically verify properties. Users can book agents to inspect listings, upload verification documents, and receive admin-approved reports privately through a secure multi-role workflow.",
    href: "https://frontend-nine-ashen-8v3tcyasob.vercel.app/",
    featured: true,
    eyebrow: "Flagship Full-Stack Case Study",
    caseStudy: {
      content: [
        {
          type: "intro",
          paragraphs: [
            "FindH is a web platform designed to solve one of the biggest problems in rental marketplaces: trust. Many tenants book rooms or apartments online without verifying whether the property actually exists, whether the information is accurate, or whether the landlord is legitimate. FindH introduces a human verification layer by connecting tenants with nearby verified agents who can physically inspect properties and upload proof.",
            "The platform enables tenants to request property verification, allows agents to perform on-site inspections, and provides administrators with tools to review uploaded documents. Once approved, the verification report becomes privately available to the tenant who requested the verification, ensuring transparency while maintaining privacy.",
            "Unlike traditional marketplaces that rely on automated badges or seller claims, FindH uses real-world verification through human agents, making property listings significantly more reliable."
          ]
        },
        {
          title: "Problem the Project Solves",
          paragraphs: ["Online rental platforms often suffer from:"],
          list: [
            "Fake property listings",
            "Misleading photos or descriptions",
            "Scam landlords asking for advance payments",
            "Tenants being unable to physically visit properties"
          ],
          footer: [
            "FindH solves this by introducing on-demand property verification through local agents.",
            "A tenant can hire a nearby agent to inspect the property and confirm whether the listing is genuine."
          ]
        },
        {
          title: "Core Idea",
          paragraphs: ["The system introduces three roles:"],
          list: [
            "Tenant: A user searching for rental properties who wants a listing verified before trusting it.",
            "Agent: A verified user who can physically visit properties and upload proof of legitimacy.",
            "Admin: A platform moderator who reviews uploaded documents and approves or rejects verification reports."
          ],
          footer: ["This creates a trusted verification pipeline."]
        },
        {
          title: "Verification Workflow",
          paragraphs: ["The workflow of the system is structured as follows:"],
          list: [
            "Tenant views property listing",
            "Tenant clicks Verify This Property",
            "Nearby agents are displayed based on location",
            "Tenant selects an agent and books verification",
            "Agent receives the verification request",
            "Agent visits the property and uploads verification documents",
            "Admin reviews the uploaded documents",
            "If approved, the verification report becomes visible to the tenant"
          ],
          footer: ["The verification is private, meaning other users cannot see the verification report unless they requested it."]
        },
        {
          title: "Platform Features",
          subsections: [
            {
              title: "Property Listings",
              paragraphs: ["Users can create rental listings by providing property details such as:"],
              list: ["Title", "Address", "Rent", "Sharing capacity", "Rules and amenities", "Property images"],
              footer: ["Listings appear in the marketplace where tenants can explore them."]
            },
            {
              title: "Nearby Agent Discovery",
              paragraphs: [
                "When a tenant opens a listing, the platform shows agents located near the property.",
                "This is calculated using the address information provided during registration.",
                "Users can:"
              ],
              list: ["View agent profiles", "Check ratings or credibility", "Book an agent for verification"]
            },
            {
              title: "Agent Verification System",
              paragraphs: ["Agents can:"],
              list: [
                "Accept verification requests",
                "Visit the property location",
                "Upload verification documents such as: Ownership proof, Rental agreement, Electricity bill, Property registration, Property images"
              ],
              footer: ["These documents are submitted to the admin for approval."]
            },
            {
              title: "Admin Dashboard",
              paragraphs: ["The admin dashboard is responsible for maintaining platform trust.", "Admins can:"],
              list: [
                "Verify agent identity (KYC)",
                "Review property verification documents",
                "Approve or reject verification reports",
                "View tenant bookings",
                "Monitor agents and listings",
                "Manage the platform database"
              ],
              footer: ["This ensures that only legitimate verification reports are delivered to tenants."]
            },
            {
              title: "Private Verification Reports",
              paragraphs: ["Once the admin approves a verification report:"],
              list: [
                "The tenant who booked the agent receives access",
                "Documents become visible in the Agent Docs section",
                "Tenants can view and download verification files"
              ],
              footer: ["The verification results are not shown publicly, maintaining privacy."]
            },
            {
              title: "Booking System",
              paragraphs: ["The platform includes a booking workflow where tenants can:"],
              list: [
                "Select an agent",
                "Confirm booking",
                "Pay the verification fee (currently mock payment for testing)"
              ],
              footer: ["This creates a structured request between tenant and agent."]
            }
          ]
        },
        {
          title: "Technical Architecture",
          paragraphs: ["The project is built using a modern full-stack architecture."],
          subsections: [
            {
              title: "Frontend",
              paragraphs: ["The frontend is developed using Next.js and React, providing a responsive and interactive user interface.", "Key frontend technologies:"],
              list: ["Next.js", "React", "Framer Motion animations", "GSAP background animations", "Responsive UI design"],
              footer: ["The interface focuses on a clean marketplace layout with modern UI interactions."]
            },
            {
              title: "Backend",
              paragraphs: ["The backend handles business logic and API endpoints.", "Main technologies:"],
              list: ["Node.js", "Express.js", "REST APIs"],
              footer: ["Backend responsibilities include: Authentication, Property listing management, Agent request handling, Document verification workflows, Admin moderation tools"]
            },
            {
              title: "Database",
              paragraphs: ["The application uses PostgreSQL through Supabase.", "The database manages:"],
              list: ["Users", "Agents", "Listings", "Verification documents", "Booking requests", "Reviews"],
              footer: ["The schema is designed with relational integrity using foreign keys."]
            },
            {
              title: "File Storage",
              paragraphs: ["Verification documents and images are stored using Supabase Storage.", "Two types of storage buckets are used:"],
              list: ["Public bucket: property images", "Private bucket: verification documents, KYC documents, proof files"],
              footer: ["Admin and authorized users access private files using signed URLs."]
            }
          ]
        },
        {
          title: "Security Features",
          paragraphs: ["The system implements several security measures:"],
          list: [
            "JWT authentication",
            "Protected routes",
            "Private document storage",
            "Admin verification of agents",
            "Restricted access to verification reports"
          ],
          footer: ["These mechanisms prevent unauthorized access and maintain trust within the platform."]
        },
        {
          title: "Unique Aspects of the Project",
          paragraphs: ["FindH differs from traditional rental platforms because it introduces human verification instead of automated trust systems.", "Key innovations include:"],
          list: [
            "On-demand property verification",
            "Private verification reports",
            "Real-world inspection by agents",
            "Structured admin approval system"
          ],
          footer: ["This approach significantly reduces the risk of rental scams."]
        }
      ]
    },
  },
  {
  title: "Second Brain AI",
  mediaSrc: "secai.webm",
  technologies:
    "Next.js, React, FastAPI, Supabase, PostgreSQL, Vector Embeddings, AI APIs",
  description:
    "Second Brain AI is a personal knowledge management platform that allows users to upload documents, ingest websites, and interact with their data using AI. It supports multiple AI providers and enables seamless switching between models without losing conversation context.",
  href: "https://frontend-nine-ashen-8v3tcyasob.vercel.app/", 
  featured: false,
  eyebrow: "AI Knowledge System",
  caseStudy: {
    content: [
      {
        type: "intro",
        paragraphs: [
          "Second Brain AI is a platform designed to solve the growing problem of fragmented knowledge and inefficient interaction with AI tools. Users often store information across documents, websites, and notes, making it difficult to retrieve insights quickly.",
          "Additionally, most AI platforms restrict users to a single provider, limiting experimentation and flexibility. Switching between providers often results in losing conversation context, forcing users to restart discussions.",
          "Second Brain AI introduces a unified system where users can store knowledge, interact with it using AI, and seamlessly switch between multiple AI providers without losing context."
        ]
      },
      {
        title: "Problem the Project Solves",
        paragraphs: ["Modern AI workflows suffer from multiple inefficiencies:"],
        list: [
          "AI provider lock-in limiting flexibility",
          "Loss of conversation context when switching models",
          "Scattered knowledge across documents and websites",
          "Difficulty retrieving specific insights from large documents",
          "Repeatedly explaining the same context to different AI models"
        ],
        footer: [
          "Second Brain AI solves these issues by combining knowledge management with flexible AI integration.",
          "It allows users to switch models freely while preserving the conversation flow."
        ]
      },
      {
        title: "Core Idea",
        paragraphs: ["The platform is built around three core concepts:"],
        list: [
          "Personal Knowledge Base: Store documents and web content in one place",
          "Context-Aware AI Chat: Interact with stored knowledge using natural language",
          "Provider Flexibility: Switch between AI models without losing context"
        ],
        footer: ["This creates a seamless and powerful AI-assisted thinking system."]
      },
      {
        title: "System Workflow",
        paragraphs: ["The workflow of the system is structured as follows:"],
        list: [
          "User signs up and logs in",
          "User uploads documents or adds website URLs",
          "Content is processed and indexed into vector embeddings",
          "User starts a chat or selects a document",
          "AI retrieves relevant context using semantic search",
          "User can switch AI providers at any time",
          "Conversation context is preserved across provider switches",
          "User receives accurate, context-aware responses"
        ],
        footer: ["The system ensures continuity and efficiency in AI interactions."]
      },
      {
        title: "Platform Features",
        subsections: [
          {
            title: "Knowledge Base Management",
            paragraphs: ["Users can manage their knowledge efficiently."],
            list: [
              "Upload documents (PDF, TXT, MD)",
              "Add website URLs",
              "View and manage stored documents",
              "Delete documents with automatic context cleanup"
            ],
            footer: ["All data is indexed for fast retrieval."]
          },
          {
            title: "AI Chat System",
            paragraphs: ["The platform provides an advanced chat experience."],
            list: [
              "Multi-thread chat history",
              "Chat search functionality",
              "Markdown-style responses",
              "Typing animations for AI replies",
              "Persistent conversations"
            ]
          },
          {
            title: "Document-Scoped Chat",
            paragraphs: ["Users can interact with specific documents."],
            list: [
              "Click a document to start a scoped chat",
              "AI automatically understands document context",
              "Focused and accurate responses",
              "Ability to switch back to global context"
            ]
          },
          {
            title: "Multi-Provider AI System",
            paragraphs: ["One of the key innovations of the platform."],
            list: [
              "Add multiple AI providers",
              "Configure API keys and endpoints",
              "Switch models directly during conversations",
              "Support for cloud, private, and local LLMs"
            ],
            footer: [
              "Unlike traditional platforms, users are not locked into a single provider."
            ]
          },
          {
            title: "Context Preservation System",
            paragraphs: [
              "A major innovation of the platform is maintaining conversation continuity."
            ],
            list: [
              "Conversation history is preserved across provider switches",
              "No need to re-explain previous context",
              "Seamless transition between models",
              "Improved productivity for developers and researchers"
            ],
            footer: [
              "This solves a critical problem in multi-model experimentation workflows."
            ]
          }
        ]
      },
      {
        title: "Technical Architecture",
        paragraphs: ["The platform uses a modern scalable architecture."],
        subsections: [
          {
            title: "Frontend",
            paragraphs: ["The frontend is built using modern web technologies."],
            list: [
              "Next.js",
              "React",
              "Responsive UI design",
              "Interactive chat interface"
            ]
          },
          {
            title: "Backend",
            paragraphs: ["The backend is powered by FastAPI."],
            list: [
              "REST API endpoints",
              "Chat processing pipeline",
              "Document ingestion and parsing",
              "Provider routing system"
            ]
          },
          {
            title: "Database & Storage",
            paragraphs: ["Data is managed using Supabase and PostgreSQL."],
            list: [
              "User authentication",
              "Chat history storage",
              "Document metadata",
              "Vector embeddings for semantic search"
            ]
          },
          {
            title: "AI & Retrieval",
            paragraphs: ["The system uses advanced retrieval techniques."],
            list: [
              "Vector embeddings for semantic search",
              "Lexical fallback search",
              "Context assembly for accurate responses",
              "Document-prioritized retrieval for scoped chats"
            ]
          }
        ]
      },
      {
        title: "Security & Reliability",
        paragraphs: ["The system includes multiple safeguards:"],
        list: [
          "Secure authentication with Supabase",
          "Encrypted API key storage",
          "Protected routes",
          "Rate limit handling",
          "Error handling and fallback mechanisms"
        ]
      },
      {
        title: "Unique Aspects of the Project",
        paragraphs: [
          "Second Brain AI introduces a unique combination of flexibility and intelligence."
        ],
        list: [
          "Multi-provider AI support",
          "Context preservation across model switching",
          "Document-scoped AI conversations",
          "Semantic + lexical hybrid search",
          "Personal AI-powered knowledge system"
        ],
        footer: [
          "This makes it a powerful tool for developers, researchers, and knowledge workers."
        ]
      }
    ]
  }
},
  {
    title: "Defungi CNN",
    mediaSrc: "fungi.png",
    technologies: "Python, TensorFlow, CNN, Deep Learning",
    description:
      "Defungi CNN is a deep learning project that uses Convolutional Neural Networks to classify fungal images for medical analysis. The model processes image datasets and predicts fungal types with high accuracy, demonstrating practical computer vision and healthcare AI applications.",
    href: "https://github.com/Shashiawari/Defungi-CNN",
  },
  {
    title: "Detect GPT",
    mediaSrc: "gpt.png",
    technologies: "Python, NLP, Machine Learning",
    description:
      "Detect GPT is an AI tool designed to detect whether text is generated by large language models. The system analyzes linguistic patterns and probability distributions to distinguish between human-written and AI-generated content.",
    href: "https://github.com/Shashiawari",
  },
  {
    title: "GenAI",
    mediaSrc: "gen.mp4",
    technologies: "Next.js, HTML, CSS, JavaScript, AI API",
    description:
      "GenAI is a generative AI platform that allows users to create dynamic content such as text and images using modern AI APIs. It provides an intuitive interface for developers and creators to experiment with AI-powered workflows.",
    href: "https://main--genn-ai.netlify.app/",
  },
  {
    title: "Chit-Chat",
    mediaSrc: "chit.mp4",
    technologies: "Node.js, HTML, CSS, JavaScript, Socket.io",
    description:
      "Chit Chat is a real-time messaging application built using Node.js, Express, and Socket.io. It supports private chat rooms generated with UUID for secure conversations and enables instant messaging and file sharing in a simple and responsive interface.",
    href: "https://chit-chat-5e9g.onrender.com/",
  },
  {
    title: "JapEase",
    mediaSrc: "Jap.mp4",
    technologies: "React.js, Node.js, HTML, CSS, JavaScript, API",
    description:
      "JapEase is a job discovery application built with React.js that helps students find real-time job opportunities. It focuses on API integrations, dynamic UI updates, and responsive design to provide a smooth job search experience.",
    href: "https://japease2.onrender.com/",
  },
  {
    title: "SnapGen",
    mediaSrc: "snapg.mp4",
    technologies: "Node.js, HTML, CSS, JavaScript, Unsplash API",
    description:
      "SnapGen is an image generation and discovery web application powered by the Unsplash API. It allows users to search, preview, and download high-quality images with a fast and minimal interface.",
    href: "https://snapgen.onrender.com/",
  },
  {
    title: "NexGen",
    mediaSrc: "nex.mp4",
    technologies: "Next.js",
    description:
      "NexGen is an innovative platform where users can create custom websites with the assistance of a dedicated personal developer. The project leverages Next.js to deliver a smooth and efficient user experience, empowering individuals to bring their digital visions to life effortlessly.",
    href: "https://nexxgenn.netlify.app/",
  },
  {
    title: "Next Level Food",
    mediaSrc: "food.mp4",
    technologies: "React, SQLite",
    description:
      "Next Level Food is a recipe-sharing platform where users can explore and contribute food recipes. The application focuses on an intuitive UI, allowing users to browse dishes, view cooking instructions, and share their own culinary creations.",
    href: "https://nextlevelfoods.onrender.com/",
  },
  {
    title: "Micro Course Converter",
    mediaSrc: "taads.png",
    technologies: "Python, NLP, AI",
    description:
      "Micro Course Converter is an AI-powered tool that converts long educational content into structured micro-learning modules. It uses natural language processing to summarize and restructure information into concise learning segments.",
    href: "https://github.com/Shashiawari",
  },
];

export const projects = rawProjects.map((project) => ({
  ...project,
  mediaSrc: withPublicAssetPath(project.mediaSrc),
}));

export const featuredProject = projects.find((project) => project.featured) ?? null;
