import { CompanyCode } from "../global-types";

type Experience = {
  company: string,
  link: string,
  title: string,
  duration: string,
  imgName: CompanyCode,
  desc: string[]
}

const EXP_LIST: Experience[] = [
  {
    company: "Wattpad",
    link: "https://www.wattpad.com",
    title: "Associate Engineer",
    duration: "May 2021 - Present",
    imgName: CompanyCode.WATTPAD,
    desc: [
      "Migrated the web application’s Search experience from Backbone.js to React, leading to an 11% increase in user engagement within the first two weeks of launch.",
      "Developed submission forms and contest banners for the 2022 Watty awards while reducing the number of API calls made by 67% and receiving over 30K submissions with zero major bugs on launch.",
      "Built the foundation elements for Wattpad’s design system in collaboration with internal teams and stakeholders using TypeScript, React, StorybookJS and Webpack."
    ],
  },
  {
    company: "University of Toronto",
    link: "https://www.utm.utoronto.ca/math-cs-stats/home",
    title: "Teaching Assistant",
    duration: "Jan 2022 - Apr 2022",
    imgName: CompanyCode.UOFT,
    desc: [
      "Worked as an Undergraduate Teaching Assistant for the course CSC309: Programming on the web.",
      "Conducted weekly tutorials to teach JavaScript, React, and Django fundamentals to a class of 10-15 students.",
      "Provided timely feedback and guidance to 50+ students."
    ],
  },
  {
    company: "ICUBE UTM",
    link: "https://icubeutm.ca/",
    title: "Web Developer",
    duration: "Sept 2020 - Feb 2021",
    imgName: CompanyCode.ICUBE,
    desc: [
      "Developed five responsive websites for clients using HTML, CSS, JavaScript, and MySQL.",
      "Created a custom WordPress plugin using PHP to simplify and automate clients’ workflow, saving them over 30 manual hours of work per month.",
      "Worked in an Agile environment and participated in sprint planning and code reviews.",
    ],
  },
  {
    company: "Royal Bank of Canada",
    link: "https://www.rbcroyalbank.com/personal.html",
    title: "Quality Engineer Intern",
    duration: "May 2020 - Aug 2020",
    imgName: CompanyCode.RBC,
    desc: [
      "Worked on the Client Cards team to automate UI Testing, authoring 350+ test cases, the highest by an intern",
      "Developed automation scripts in Python with Selenium, increasing automated test coverage by 48%.",
      "Created understandable, reliable, and maintainable test suites in collaboration with the QA team.",
    ],
  },
];

export default EXP_LIST;
