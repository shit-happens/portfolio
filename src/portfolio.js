/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "shit-happens",
  title: "Hi all, I'm Anshit",
  subTitle: emoji(
    "A dedicated Data Scientist 🚀 with 3+ years of experience. Proficient in Python, Pyspark, and SQL. Passionate about using data to drive business growth and boost revenue. Let's transform your data into success."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1DAahWlAeJOLrwpGKOyYgO_Cr6xTx0iAR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shit-happens",
  linkedin: "https://www.linkedin.com/in/anshit-vishwakarma/",
  gmail: "anshit.vishwakarma.13@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/share/WdvXgN6SDyXBNkXs/?mibextid=LQQJ4d",
  medium: "https://medium.com/@anshitvishwa111",
  twitter: "https://x.com/AnshitVishwaka3",
  kaggle: "https://www.kaggle.com/avishwakarma1",
  instagram: "https://www.instagram.com/6_karmaa_9/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DATA SCIENTIST OBSESSED WITH EXPLORING EVERY DATA TECH STACK AND UNLOCKING HIDDEN INSIGHTS",
  skills: [
    emoji(
      "⚡ Expertise in building and deploying robust machine learning models across diverse data types, including text, image, and time series"
    ),
    emoji(
      "⚡ Proficient in transforming raw, unclean data into fully functional ML models through comprehensive end-to-end data science pipelines"
    ),
    emoji(
      "⚡ Skilled in leveraging Azure's powerful tools and services to streamline and enhance the entire data science workflow"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "pyspark",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "ms-excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "powerbi",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "ms-sql-server",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure-sql-database",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "RESTful API",
      fontAwesomeClassname: "fa-solid fa-network-wired"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology, Roorkee",
      logo: require("./assets/images/IITRLogo.png"),
      subHeader:
        "Bachelor of Technology in Mechanical & Industrial Engineering",
      duration: "August 2017 - July 2021",
      desc: "Course Structure",
      descBullets: [
        "NOC20-CS29: INTRODUCTION TO MACHINE LEARNING",
        "MAN-001: MATHEMATICS-I",
        "MAN-006: PROBABILITY AND STATISTICS",
        "MIN-103: PROGRAMMING AND DATA STRUCTURES"
      ]
    }
    // ,
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Pandas",
      progressPercentage: "95%"
    },
    {
      Stack: "NumPy",
      progressPercentage: "95%"
    },
    {
      Stack: "sckit-learn",
      progressPercentage: "90%"
    },
    {
      Stack: "Tensorflow",
      progressPercentage: "80%"
    },
    {
      Stack: "PyTorch",
      progressPercentage: "80%"
    },
    {
      Stack: "PySpark",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Matplotlib",
      progressPercentage: "90%"
    },
    {
      Stack: "RESTful API",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Data Scientist",
      company: "Tesco PLC",
      companylogo: require("./assets/images/Tesco-Logo.png"),
      date: "December 2024 – Present",
      desc: "Part of the CCEC team",
      descBullets: [
        "Analyzing areas for improving the CSAT score of the business in the UK region by leveraging customer service agent segmentation and speech analytics"
      ]
    },
    {
      role: "Data Scientist",
      company: "Landmark Group",
      companylogo: require("./assets/images/LANDMARK-OG-TAG-LOGO.jpg"),
      date: "June 2022 – December 2024",
      desc: "Architected and developed strategic pricing applications and comprehensive data science pipelines, leading to improved profit margins and inventory management efficiency",
      descBullets: [
        "Led the development of Pricescope, a strategic pricing application for Landmark Group brands like MAX and Splash",
        "Implemented machine learning models for sales prediction, product analysis, and price elasticity using Azure Databricks, PySpark, and machine learning libraries",
        "Created and deployed the Margin Estimator tool for analyzing the impact of stock availability and markdowns on margin percentage and revenue"
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "Larsen & Toubro Infotech",
      companylogo: require("./assets/images/LTI_Lets_solve.png"),
      date: "Jul 2021 – Jan 2022",
      desc: "Developed and optimized cloud data extraction modules, enhancing data processing efficiency and user experience",
      descBullets: [
        "Developed a cloud data extraction module using RESTful APIs to efficiently retrieve JSON data from diverse cloud servers",
        "Optimized data processing using Python libraries such as threading, multiprocessing, and asyncio, achieving a 75% reduction in extraction time",
        "Streamlined user experience by converting JSON data to CSV format and automating file saving with email notifications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Internships",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/enercompLogo.png"),
      projectName: "Enercomp Solutions",
      projectDesc:
        "Enercomp Solutions Pvt Ltd offers drone-based solutions to enhance efficiency and accuracy across sectors, specializing in energy digital transformation, IT integration, aerial mapping, thermography of solar plants, and smart grid consulting",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.enercomp.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sensovision_systems_logo.jpeg"),
      projectName: "SensoVision Systems",
      projectDesc:
        "Senso Vision is a technology development and consulting start-up working in the domain of Computer Vision, Machine Learning, IOT, Drone-Autonomy and Media Streaming",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sensoviz.com/"
        }
      ]
    },
    {
      image: require("./assets/images/emuron_technologies_pvt_ltd_logo.jpeg"),
      projectName: "Emuron (Acquired by Livguard)",
      projectDesc:
        "Emuron is a product and services company specializing in Internet of Things (IoT) solutions for electric mobility, offering customized hardware and software expertise to help clients adapt to the evolving technological landscape",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.emuron.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Spot Award - Landmark Group",
      subtitle:
        "Awarded for exemplary contributions to the team in Q4 of FY 23-24",
      image: require("./assets/images/LANDMARK-OG-TAG-LOGO.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/19dp_20ewZ9XOrToW7euIRhWzJiZBHR1o/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Spot Award - Landmark Group",
      subtitle:
        "Awarded for exemplary contributions to the team in Q4 of FY 22-23",
      image: require("./assets/images/LANDMARK-OG-TAG-LOGO.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/19dp_20ewZ9XOrToW7euIRhWzJiZBHR1o/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Machine Learning Specialization",
      subtitle:
        "Completed Certifcation from DeepLearning.ai by Andrew Ng, Stanford University",
      image: require("./assets/images/Stanford_Coursera_Logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CZIONn5NWw_1RvDr_j_s0b4hjNlRwWav/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Deep Learning Specialization",
      subtitle:
        "Completed Certifcation from DeepLearning.ai by Andrew Ng, Stanford University",
      image: require("./assets/images/deeplearningaiLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1xiIzG_TSuGDIOY5z99OsPTvLl-zctEul/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Chatbot using RASA",
      subtitle:
        "An AI-driven NLP module, built on the RASA framework, processes customer queries via a microphone, leveraging core NLP technologies to emulate waiter services by greeting, guiding, taking orders, and resolving queries",
      image: require("./assets/images/chatbot.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wcMkWyne5JjZ7pNgFMnKKS3zciDK-OIJ/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@anshitvishwa111/hosting-machine-learning-models-as-an-api-service-1cf5cb5a1e2f",
      title: "Hosting Machine Learning Models as an API Service",
      description:
        "How I have been deploying my ML models?"
    },
    {
      url: "https://medium.com/@anshitvishwa111/fashions-secret-weapon-unleashing-data-science-in-the-apparel-retail-industry-b21a915a9a4c",
      title: "Fashion’s Secret Weapon: Unleashing Data Science in the Apparel Retail Industry",
      description:
        "Deep dive into role of data scientists in markdown and assortment planning"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Hire me, Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7024503772",
  email_address: "anshit.vishwakarma.13@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "AnshitVishwaka3", //Replace "twitter" with your twitter username without @
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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
