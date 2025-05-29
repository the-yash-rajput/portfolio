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
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
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

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
