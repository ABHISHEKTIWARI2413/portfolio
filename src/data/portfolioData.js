export const personalInfo = {
  name: "Abhishek Tiwari",
  initials: "AT",
  headline: "Data Science Student | Exploring AI, Technology & Innovation",
  introduction:
    "I am a BTech Data Science student passionate about building practical technology solutions and exploring Artificial Intelligence, Data Science and software development.",
  bio: [
    "Currently in my second year of Bachelor of Technology in Data Science at Pranveer Singh Institute of Technology, I focus on transforming data into actionable insights and developing intelligent digital tools.",
    "My core interests lie at the intersection of Machine Learning, predictive data analysis, and scalable web software. I enjoy taking foundational computer science concepts and applying them directly to solve everyday real-world problems.",
    "Whether collaborating on campus platforms, training predictive models, or exploring emerging generative AI workflows, I am committed to continuous learning and building software with measurable impact."
  ],
  educationQuick: "BTech Data Science • 2nd Year at PSIT",
  institution: "Pranveer Singh Institute of Technology",
  degree: "Bachelor of Technology (BTech)",
  branch: "Data Science",
  academicYear: "Second Year",
  status: "Open to Internships & Collaborative Projects",
  email: "abhi13tiwari@gmail.com",
  socials: {
    github: "https://github.com/Abhishektiwari1324",
    linkedin: "https://linkedin.com/in/placeholder-abhishektiwari", // Editable placeholder
    email: "mailto:abhi13tiwari@gmail.com",
  },
  resumeUrl: "#resume", // Placeholder as per PRD
}

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export const skillCategories = [
  {
    category: "Programming",
    description: "Core languages for software and analytical scripting",
    color: "purple",
    skills: [
      { name: "Python", level: "Confirmed" },
      { name: "SQL", level: "Confirmed" },
      { name: "Basic JavaScript", level: "Basic" },
    ],
  },
  {
    category: "Data Science",
    description: "Statistical discovery, data modeling, and visual insights",
    color: "blue",
    skills: [
      { name: "Data Analysis", level: "Confirmed" },
      { name: "Basic Machine Learning", level: "Foundational" },
      { name: "Data Visualization", level: "Confirmed" },
    ],
  },
  {
    category: "Tools & Environment",
    description: "Development workflow and version management tools",
    color: "indigo",
    skills: [
      { name: "Git", level: "Confirmed" },
      { name: "GitHub", level: "Confirmed" },
      { name: "VS Code", level: "Daily Workflow" },
    ],
  },
  {
    category: "AI & Technology",
    description: "Intelligent systems and modern prompt architectures",
    color: "emerald",
    skills: [
      { name: "Artificial Intelligence", level: "Academic Exploration" },
      { name: "Generative AI", level: "Applied" },
      { name: "Prompt Engineering", level: "Proficient" },
    ],
  },
]

export const projects = [
  {
    id: "campusxchange",
    title: "CampusXchange",
    type: "Campus Platform / Web Concept",
    description:
      "A campus resource-sharing and micro-task platform designed to connect students, streamline peer assistance, and enable efficient resource circulation within collegiate environments.",
    keyPoints: [
      "Peer-to-peer resource marketplace and notes sharing",
      "Micro-task coordination for collaborative academic projects",
      "Clean, accessible student-first user interface"
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Resource Sharing"],
    githubUrl: "https://github.com/Abhishektiwari1324/campusxchange", // Placeholder repository link
    demoUrl: null, // Placeholder: concept in development
    status: "In Development",
    accent: "purple",
  },
  {
    id: "scamshield-ai",
    title: "ScamShield AI",
    type: "AI & Machine Learning Concept",
    description:
      "An AI-powered concept for detecting potentially fraudulent messages, analyzing linguistic indicators, and helping users identify online and SMS scams before falling victim.",
    keyPoints: [
      "Natural language analysis for phishing pattern detection",
      "Explainable scam likelihood scoring for suspect text messages",
      "Privacy-first architecture intended for everyday consumer safety"
    ],
    tags: ["Python", "Machine Learning", "NLP", "Fraud Detection"],
    githubUrl: "https://github.com/Abhishektiwari1324/scamshield-ai", // Placeholder repository link
    demoUrl: null, // Concept / research phase
    status: "Research Concept",
    accent: "blue",
  },
  {
    id: "project-rush",
    title: "Project Rush",
    type: "Endless-Runner Game Concept",
    description:
      "An endless-runner game concept based on an Indian city and railway-track environment, featuring dynamic obstacles, thematic assets, and responsive character physics.",
    keyPoints: [
      "Thematic obstacles inspired by Indian railway & city infrastructure",
      "Fast-paced state loops and obstacle generation mechanics",
      "Optimized for smooth framerates and responsive player input"
    ],
    tags: ["Game Design", "State Logic", "Physics", "Interactive"],
    githubUrl: "https://github.com/Abhishektiwari1324/project-rush", // Placeholder repository link
    demoUrl: null, // In concept phase
    status: "Prototype Concept",
    accent: "indigo",
  },
]

export const educationData = [
  {
    degree: "Bachelor of Technology (BTech)",
    branch: "Data Science",
    year: "Second Year (2023 - Present)",
    institution: "Pranveer Singh Institute of Technology (PSIT)",
    description:
      "Pursuing specialized curriculum covering Data Structures, Algorithms, Database Management Systems, Statistical Analysis, and Machine Learning foundations.",
    highlights: [
      "Focused coursework on Data Science, Python, and SQL analytics",
      "Active participant in technical student clubs and campus hackathons",
      "Hands-on lab experiments building machine learning models"
    ],
  },
]

export const certifications = [
  {
    id: "cert-hackerrank-sql",
    title: "Basic SQL",
    issuer: "HackerRank",
    date: "Verified Learning Milestone", // Placeholder date
    credentialUrl: "https://www.hackerrank.com/certificates/placeholder", // Placeholder credential
    skills: ["SQL", "Relational Databases", "Data Querying"],
    badgeColor: "emerald",
  },
  {
    id: "cert-aws-ml",
    title: "AWS Foundations: Machine Learning",
    issuer: "Amazon Web Services (AWS)",
    date: "Verified Learning Milestone", // Placeholder date
    credentialUrl: "https://aws.amazon.com/placeholder-verification", // Placeholder credential
    skills: ["Machine Learning Concepts", "Cloud AI", "Model Training Basics"],
    badgeColor: "purple",
  },
  {
    id: "cert-apna-college-git",
    title: "Git and GitHub Learning",
    issuer: "Apna College",
    date: "Verified Learning Milestone", // Placeholder date
    credentialUrl: "https://apnacollege.in/placeholder-certificate", // Placeholder credential
    skills: ["Git Version Control", "GitHub Collaboration", "Branching & Merging"],
    badgeColor: "blue",
  },
]

export const achievements = [
  {
    title: "Hackathon Participation",
    category: "Competitive Development",
    description:
      "Participated in collegiate hackathons, collaborating under tight deadlines to prototype technology solutions and solve real-world problems.",
    icon: "Trophy",
  },
  {
    title: "Campus Project Development",
    category: "Product Innovation",
    description:
      "Initiated and architected CampusXchange and ScamShield AI to address practical pain points faced by students and everyday digital users.",
    icon: "Rocket",
  },
  {
    title: "Technical Learning Milestones",
    category: "Continuous Learning",
    description:
      "Earned credentials in SQL, Cloud Machine Learning foundations, and Git version control alongside rigorous BTech Data Science academics.",
    icon: "CheckCircle2",
  },
]
