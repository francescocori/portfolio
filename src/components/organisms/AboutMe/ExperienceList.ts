interface ExpepienceCard {
  time: string;
  role: string;
  skills: string;
  even?: boolean;
}
export const experienceData: ExpepienceCard[] = [
  {
    time: "July 2022 - today",
    role: "Frontend Developer - Studio Graphene",
    skills:
      "React - Typescript - Tailwind - JS - HTML - CSS - Figma - Next.Js -  Git  ",
  },
  {
    time: "2022",
    role: "Frontend Developer Internship - KinderBDay",
    skills: "React -JS - HTML - CSS - Bootstrap - SEO  ",
    even: true,
  },
  {
    time: "2021 ",
    role: "Full Stack Web Development Bootcamp at Wild Code School",
    skills: "HTML5 - CSS3 - JavaScript - React - Node.js - MySQL",
  },
  {
    time: "2020",
    role: "The Complete Javascript Course",
    skills: "JavaScript - CSS - HTML - Bootstrap",
    even: true,
  },
];
