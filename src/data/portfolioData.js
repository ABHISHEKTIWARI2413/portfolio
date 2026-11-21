export const personalInfo = {
  name: "Abhishek Tiwari",
  initials: "AT",
  headline: "Data Science Student | Exploring AI, Technology & Innovation",
  introduction:
    "I am a BTech Data Science student passionate about building practical technology solutions and exploring Artificial Intelligence, Data Science and software development.",
  bio: [
    "Currently in my second year of Bachelor of Technology in Data Science at Pranveer Singh Institute of Technology, I focus on transforming data into actionable insights and developing intelligent digital tools.",
    "My core interests lie at the intersection of Machine Learning, predictive data analysis, and scalable web software. I enjoy taking foundational computer science concepts and applying them directly to solve everyday real-world problems.",
    "Whether collaborating on live campus platforms like CampusShare, building interactive games like Dusk Compound, or exploring emerging machine learning workflows, I am committed to continuous learning and building software with measurable impact."
  ],
  educationQuick: "BTech Data Science • 2nd Year at PSIT",
  institution: "Pranveer Singh Institute of Technology",
  degree: "Bachelor of Technology (BTech)",
  branch: "Data Science",
  academicYear: "Second Year",
  status: "Open to Internships & Collaborative Projects",
  email: "abhi13tiwari@gmail.com",
  socials: {
    github: "https://github.com/ABHISHEKTIWARI2413",
    linkedin: "https://www.linkedin.com/in/tiwariabhishek19",
    email: "mailto:abhi13tiwari@gmail.com",
  },
  resumeUrl: "/Abhishek_Tiwari_Resume.pdf",
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
    category: "Programming & Databases",
    description: "Core languages for software and relational data systems",
    color: "purple",
    skills: [
      { name: "Python", level: "Confirmed" },
      { name: "SQL & DBMS", level: "Confirmed" },
      { name: "JavaScript", level: "Basic" },
    ],
  },
  {
    category: "Web & Design",
    description: "Modern web architecture, interface design, and prototyping",
    color: "blue",
    skills: [
      { name: "Web Development", level: "Applied" },
      { name: "Figma", level: "Proficient" },
      { name: "Canva", level: "Proficient" },
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
    category: "AI Tools & Framer",
    description: "Modern generative tools and intelligent workflows",
    color: "emerald",
    skills: [
      { name: "ChatGPT", level: "Applied" },
      { name: "Claude", level: "Applied" },
      { name: "Framer", level: "Applied" },
    ],
  },
]

export const projects = [
  {
    id: "campusshare",
    title: "CampusShare",
    type: "Campus Resource & Note Sharing Platform",
    description:
      "A full-fledged campus platform designed to connect students, streamline peer assistance, share study notes, and enable efficient resource circulation across collegiate environments.",
    keyPoints: [
      "Student resource sharing and verified peer assistance",
      "Clean, modern responsive UI tailored for campus communities",
      "Deployed and accessible live on Vercel"
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel", "Web App"],
    demoUrl: "https://campus-share-sigma.vercel.app/",
    status: "Live Project",
    accent: "purple",
  },
  {
    id: "dusk-compound-game",
    title: "Dusk Compound Game",
    type: "2D Pixel Fighter & Shooting Game",
    description:
      "An action-packed retro 2D pixel shooter and arena fighting game featuring smooth canvas animations, dynamic obstacle physics, combat controls, and real-time score tracking.",
    keyPoints: [
      "Interactive 2D physics and fast-paced combat mechanisms",
      "Dynamic enemy spawning and responsive keyboard controls",
      "Deployed and playable live on Netlify"
    ],
    tags: ["JavaScript", "HTML5 Canvas", "Game Mechanics", "Netlify"],
    demoUrl: "https://pixelfightershooting.netlify.app/",
    status: "Live Project",
    accent: "indigo",
  },
]

export const educationData = [
  {
    degree: "Bachelor of Technology (BTech)",
    branch: "Data Science",
    year: "Second Year",
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
    date: "Verified Learning Milestone",
    skills: ["SQL", "Relational Databases", "Data Querying"],
    badgeColor: "emerald",
  },
  {
    id: "cert-aws-ml",
    title: "AWS Foundations: Machine Learning",
    issuer: "Amazon Web Services (AWS)",
    date: "Verified Learning Milestone",
    skills: ["Machine Learning Concepts", "Cloud AI", "Model Training Basics"],
    badgeColor: "purple",
  },
  {
    id: "cert-apna-college-git",
    title: "Git and GitHub Learning",
    issuer: "Apna College",
    date: "Verified Learning Milestone",
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
      "Initiated and architected CampusShare and Dusk Compound Game to address practical student resource sharing and interactive browser gaming.",
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
