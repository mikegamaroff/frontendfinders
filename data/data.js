export const steps = [
  {
    section: "creative",
    items: [
      "Wireframes",
      "Sketch",
      "Figma",
      "XD",
      "Hi-Fidelity",
      "UX/UI Design",
      "Prototyping",
    ],
  },
  {
    section: "frontend",
    items: ["Responsive", "CSS", "Animation", "Mobile Web", "Interactive"],
  },
  {
    section: "development",
    items: [
      "React",
      "NodeJs",
      "NextJs",
      "APIs",
      "Databases",
      "User management",
      "Data handling",
    ],
  },

  {
    section: "personal",
    items: [
      "Good communicator",
      "Team player",
      "Speedy",
      "Project Lead",
      "Attention to detail",
    ],
  },
  {
    section: "project",
    items: ["Long term", "From scratch", "Quick gig", "Already started"],
  },
  {
    section: "paymentPrefs",
    items: ["$100 per hour", "Capped price", "Fixed weekly", "Fixed monthly"],
  },
  {
    section: "description",
    description: "",
  },
];

export let ItemsConfigTemplate = {
  item0: false,
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
  item6: false,
  item7: false,
  item8: false,
  item9: false,
  item10: false,
  count: 0,
};

export let dbFeed = {
  user: {
    assignedAt: "",
    description: "",
    email: "",
    id: 0,
    name: "",
    phone: "",
    steps: {
      id: 0,
      items: "",
      section: "",
      submissionID: 0,
    },
  },
};
