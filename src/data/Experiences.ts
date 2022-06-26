type Experience = {
  company: string,
  link: string,
  title: string,
  duration: string,
  imgName: string,
  desc: string[]
}

const EXP_LIST: Experience[] = [
  {
    company: "Wattpad",
    link: "https://www.wattpad.com",
    title: "Associate Engineer",
    duration: "May 2021 - Present",
    imgName: "wattpad",
    desc: [
      "Develop a fully responsive web application using React at massive scale (more than 2 billion daily requests and 90+ million users).",
      "Collaborate with product, design and senior engineers to build new experiences for users.",
    ],
  },
  {
    company: "ICUBE UTM",
    link: "https://icubeutm.ca/",
    title: "Software Developer",
    duration: "Sept 2020 - Feb 2021",
    imgName: "icube",
    desc: [
      "Develop responsive websites for clients using HTML, CSS, JavaScript and MySQL.",
      "Create wordpress plugins using PHP and JavaScript to speed up project implementation.",
      "Implemented websites by following accessibility and Search Engine Optimization (SEO) guidelines.",
    ],
  },
  {
    company: "Royal Bank of Canada",
    link: "https://www.rbcroyalbank.com/personal.html",
    title: "Quality Engineer Intern",
    duration: "May 2020 - Aug 2020",
    imgName: "rbc",
    desc: [
      "Worked on the Client Cards team to automate UI Testing, authoring 350+ test cases, highest by an intern in the team.",
      "Developed automation scripts in Python with Selenium, increasing automated test coverage by 48%.",
      "Developed understandable, reliable and maintainable test suites in collaboration with the QA team and executed tests using CI/CD Tools like Jenkins.",
    ],
  },
];

export default EXP_LIST;
