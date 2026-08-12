/**
 * PORTFOLIO LANDING PAGE CONFIGURATION (2-COLUMN MODERN LAUNCHPAD)
 * ================================================================
 * Customize all your personal details, links, and preferences here.
 * Any field left empty (""), null, or set to enabled: false will automatically 
 * be hidden from the webpage.
 */

window.CONFIG = {
  // Personal Information (Shown in Left Column)
  name: "Ashfatul Islam",
  title: "Frontend-Focused Full Stack Developer",
  bio: "Building modern web experiences, applications, & digital products. Select a destination to explore my work.",
  location: "Bangladesh",

  // Profile Photo / Avatar Option
  // Set show: false or url: "" to hide the photo entirely
  photo: {
    show: true,
    url: "res/img/ashfatul.png",
    alt: "Ashfatul Islam Profile Photo"
  },

  // Status Badge (Shown above name)
  statusBadge: {
    show: true,
    text: "Available for Hire",
    status: "online" // "online" (green dot)
  },

  // Primary Featured Destination (Shown at top of Right Column)
  primaryFeatured: {
    enabled: true,
    badge: "MAIN PORTFOLIO",
    title: "Visit Full Interactive Portfolio",
    description: "Explore my interactive showcase of web apps, case studies, & engineering projects.",
    url: "https://ashfatul-islam.web.app/",
    buttonText: "Launch Portfolio 🚀",
    icon: "globe"
  },

  // Action Links List (Shown in Right Column)
  // Only links with enabled: true AND non-empty url (or email) will be rendered
  links: [
    {
      id: "resume",
      enabled: true,
      title: "Download Resume / CV",
      description: "Frontend-Focused Full Stack Developer",
      url: "https://ashfatul.netlify.app/resume",
      icon: "file-text",
    },
    {
      id: "github",
      enabled: true,
      title: "GitHub Profile",
      description: "@ashfatul • Open Source & Repositories",
      url: "https://github.com/ashfatul",
      icon: "github",
    },
    {
      id: "linkedin",
      enabled: true,
      title: "LinkedIn Profile",
      description: "@ashfatul • Connect professionally",
      url: "https://linkedin.com/",
      icon: "linkedin",
    },
    {
      id: "email",
      enabled: true,
      title: "Direct Email",
      description: "ashfatul.islam@gmail.com",
      url: "mailto:ashfatul.islam@gmail.com",
      emailAddress: "ashfatul.islam@gmail.com",
      icon: "mail",
      isEmail: true,
    },
  ],

  // Footer text
  footer: {
    show: true,
    text: "© 2026 Ashfatul Islam • Static Launchpad"
  }
};
