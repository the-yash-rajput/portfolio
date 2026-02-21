import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yash Rajput",
  title: "Hi all, I'm Yash",
  subTitle: emoji(
    "Senior Software Engineer with extensive experience in designing and delivering scalable microservices, driving end-to-end platform solutions, and leading full-stack development across complex enterprise systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vsXyjQqvtpU114LRHqj8ZrGRFNZO7URh/view", // Set to empty to hide the button
  resumeDownloadLink:
    "https://drive.google.com/uc?export=download&id=1vsXyjQqvtpU114LRHqj8ZrGRFNZO7URh", // Set to empty to hide the butto
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Homepage section order and visibility
// Use `visible: false` to hide a section. Any section without `visible` defaults to visible.
const homepageSections = [
  {id: "greeting", label: "About", visible: true, showInNav: true},
  {id: "skills", label: "Skills", visible: true, showInNav: false},
  {id: "proficiency", label: "Proficiency", visible: true, showInNav: false},
  {id: "experience", label: "Experience", visible: false, showInNav: false},
  {id: "projects", label: "Projects", visible: false, showInNav: false},
  {id: "opensource", label: "Open Source", visible: true, showInNav: true},
  {id: "blogs", label: "Blogs", visible: true, showInNav: true},
  {id: "education", label: "Education", visible: true, showInNav: true},
  {id: "achievements", label: "Achievements", visible: true, showInNav: true},
  {
    id: "startup-projects",
    label: "Startup Projects",
    visible: false,
    showInNav: false
  },
  {id: "contact", label: "Contact", visible: true, showInNav: true}
];

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/the-yash-rajput/",
  github: "https://github.com/the-yash-rajput",
  gmail: "yashrajputishu@gmail.com",
  medium: "https://medium.com/@yashrajputishu",
  facebook: "https://www.facebook.com/profile.php?id=100008839271901",
  instagram: "https://www.instagram.com/yash.ishu_/",
  phone: "+91-7374094640",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Architected, implemented, and optimized scalable systems supporting critical business operations, ensuring reliability and performance."
    ),
    emoji(
      "⚡ Recognized for resolving complex production challenges and delivering cost-saving solutions that provide significant business value."
    ),
    emoji(
      "⚡ Led and contributed to high-impact initiatives, including designing numerous microservices and driving major infrastructure improvements."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf" // using a leaf to represent Spring
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-bolt" // emphasizes speed
    },
    {
      skillName: "RabbitMQ",
      fontAwesomeClassname: "fas fa-paper-plane"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Kibana",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Elasticsearch",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SCTR'S Pune Institute of Computer Technology",
      logo: require("./assets/images/pictLogo.png"),
      subHeader: "B.E. in Computer Science",
      duration: "August 2019 - May 2023"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "99%"
    },
    {
      Stack: "Programming",
      progressPercentage: "99%"
    },
    {
      Stack: "System Design",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps/Cloud",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Turtlemint",
      companylogo: require("./assets/images/tmlogo.png"),
      date: "Dec 2022 – Present",
      desc: "Driving the design and development of scalable microservices and core systems to support Turtlemint’s business growth.",
      descBullets: [
        "Architected and delivered scalable full-stack systems, designing numerous services with cutting-edge technologies to meet business needs and achieve high performance.",
        "Led RPA migration to Java + Playwright, saving ~₹1CR annually by cutting infra and licensing costs.",
        "Implemented Zendesk attachment redaction, reducing storage by 66% and saving $28K+ annually, with growing year-over-year.",
        "Built Recon Management Service for fast, accurate reconciliation across large datasets.",
        "Contributed to key side projects like TM-contest, Auth Service, API Gateway, and payment integrations."
      ]
    },
    {
      role: "Chief Technical Secretary",
      company: "PCSB",
      companylogo: require("./assets/images/pcsb.png"),
      date: "Jul 2021 – Mar 2023",
      desc: "Served as Technical Head.",
      descBullets: [
        "Organized and moderated major coding events like Reverse Coding and CodeStrike under Xenia.",
        "Delivered DSA sessions for juniors, promoting peer learning and enhancing problem-solving skills.",
        "Contributed to technical growth through seminars with PICT Algorithms Club (PAC) and PICT ACM Student Chapter (PASC).",
        "Led and mentored a cross-functional technical team to ensure smooth event execution and project delivery.",
        "Demonstrated strong leadership by coordinating with multiple stakeholders and driving team success under tight deadlines."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  openSourcePRs: {
    title: emoji("Open Source Pull Requests 🚀"),
    subtitle:
      "Contributions to open source projects through pull requests, showcasing technical skills and community involvement.",
    display: true, // Set false to hide this section, defaults to true
    prs: [
      {
        title: "Enhancing Easy Containers CLI Functionality",
        description:
          "Contributed improvements and feature enhancements to the Easy Containers project, optimizing CLI usability and developer workflow.",
        repository: "easy-containers",
        repositoryUrl: "https://github.com/arjavdongaonkar/easy-containers",
        prNumber: "7",
        prUrl: "https://github.com/arjavdongaonkar/easy-containers/pull/7",
        status: "merged"
      },
      {
        title: "Adding PiApproximation Algorithm",
        description:
          "Added PiApproximation algorithm to TheAlgorithms repository",
        repository: "TheAlgorithms",
        repositoryUrl: "https://github.com/TheAlgorithms",
        prNumber: "6602",
        prUrl: "https://github.com/TheAlgorithms/Java/pull/6602",
        status: "merged"
      },
      {
        title: "Added CountBitsFlip Algorithm",
        description:
          "Optimized data processing pipeline by implementing efficient caching mechanisms and parallel processing, resulting in 40% faster data processing times.",
        repository: "TheAlgorithms",
        repositoryUrl: "https://github.com/TheAlgorithms",
        prNumber: "6603",
        prUrl: "https://github.com/TheAlgorithms/Java/pull/6603",
        status: "merged"
      },
      {
        title: "Added Ground To Ground Projectile Motion Algorithm",
        description:
          "Added Ground To Ground Projectile Motion Algorithm to TheAlgorithms repository",
        repository: "TheAlgorithms",
        repositoryUrl: "https://github.com/TheAlgorithms",
        prNumber: "6714",
        prUrl: "https://github.com/TheAlgorithms/Java/pull/6714",
        status: "merged"
      },
      {
        title: "Added Added SimplePendulumRK4 Algorithm",
        description:
          "Added SimplePendulumRK4 Algorithm to TheAlgorithms repository",
        repository: "TheAlgorithms",
        repositoryUrl: "https://github.com/TheAlgorithms",
        prNumber: "6800",
        prUrl: "https://github.com/TheAlgorithms/Java/pull/6800",
        status: "merged"
      },
      {
        title: "Adding DampedOscillator Code",
        description: "Added DampedOscillator Code to TheAlgorithms repository",
        repository: "TheAlgorithms",
        repositoryUrl: "https://github.com/TheAlgorithms",
        prNumber: "6801",
        prUrl: "https://github.com/TheAlgorithms/Java/pull/6801",
        status: "merged"
      },
      {
        title: "Adding ElasticCollision2D Code",
        description:
          "Added ElasticCollision2D Code to TheAlgorithms repository",
        repository: "TheAlgorithms",
        repositoryUrl: "https://github.com/TheAlgorithms",
        prNumber: "6802",
        prUrl: "https://github.com/TheAlgorithms/Java/pull/6802",
        status: "merged"
      },
      {
        title:
          "Implement topological sort with DAG validation and cycle detection",
        description:
          "Implemented topological sort with DAG validation and cycle detection to TheAlgorithms repository",
        repository: "TheAlgorithms",
        repositoryUrl: "https://github.com/TheAlgorithms",
        prNumber: "6803",
        prUrl: "https://github.com/TheAlgorithms/Java/pull/6568",
        status: "close"
      }

      // {
      //   title: "Added MinCostClimbingStairs Algorithm",
      //   description: "Added comprehensive input validation and sanitization to prevent potential security vulnerabilities in user input handling.",
      //   repository: "web-security",
      //   repositoryUrl: "https://github.com/example/web-security",
      //   prNumber: "8",
      //   prUrl: "https://github.com/example/web-security/pull/8",
      //   status: "Merged",
      //   date: "October 2023",
      //   technologies: ["JavaScript", "Security", "Input Validation", "XSS Prevention"],
      //   impact: "Enhanced application security by preventing common vulnerabilities like XSS and injection attacks.",
      //   changes: [
      //     "Implemented comprehensive input validation",
      //     "Added XSS protection mechanisms",
      //     "Enhanced error handling for security events",
      //     "Updated security documentation"
      //   ]
      // }
    ]
  }
};

// Achievement Section
// Include certificates etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "4x ACM-ICPC Regionalist",
      subtitle:
        "Qualified 4 times as ACM-ICPC Regionalist with best rank of 82 across Amritapuri, Asia Gwalior-Pune, and Kanpur-Mathura regionals.",
      image: require("./assets/images/icpcLogo.webp"),
      imageAlt: "ACM ICPC Logo",
      footerLink: [
        {
          name: "View ICPC Profile",
          url: "https://icpc.global/ICPCID/9FSU20XQS6JS"
        }
      ]
    },
    {
      title: "Turtlemint Hackathon 3.0",
      subtitle:
        "Secured 1st place in Turtlemint Hackathon 3.0 by demonstrating innovative problem-solving and strong teamwork.",
      image: require("./assets/images/hackathonLogo.webp"),
      imageAlt: "Hackathon Trophy Logo",
      footerLink: []
    },
    {
      title: "Codeforces Specialist",
      subtitle:
        "Achieved highest rating of 1438 (Specialist) on Codeforces through consistent competitive programming performance.",
      image: require("./assets/images/codeforcesLogo.webp"),
      imageAlt: "Codeforces Logo",
      footerLink: [
        {
          name: "View Codeforces Profile",
          url: "https://codeforces.com/profile/Try_Fail_Learn_Repeat"
        }
      ]
    },
    {
      title: "CodeChef 5 ★",
      subtitle:
        "Reached highest rating of 2003 (5 Star) on CodeChef, reflecting strong algorithmic and data structure expertise.",
      image: require("./assets/images/codechefLogo.webp"),
      imageAlt: "CodeChef Logo",
      footerLink: [
        {
          name: "View CodeChef Profile",
          url: "https://www.codechef.com/users/far_from_noob"
        }
      ]
    },
    {
      title: "Google Kickstart 2022",
      subtitle:
        "Achieved Global Rank 349 in Google Kickstart 2022 Round D, competing with top programmers worldwide.",
      image: require("./assets/images/googleLogo.webp"),
      imageAlt: "Google Kickstart Logo",
      footerLink: []
    },
    {
      title: "JEE Top 2% ",
      subtitle:
        "Secured 98.95 percentile, ranking in the top 2% among 900,000+ candidates in JEE.",
      image: require("./assets/images/jeeLogo.webp"),
      imageAlt: "JEE Exam Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "Lover of code, ideas, and learning — I craft and share so we can all grow together.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7374094640", // Set to empty to hide the number
  email_address: "yashrajputishu@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  homepageSections,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};
