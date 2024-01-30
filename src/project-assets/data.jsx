import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "cozyplace.png",
    url: "https://cozyplace.netlify.app",

    title: "Online Store",
    text: "Econmmerce website where buyers can see a catalog of products and electronically purchase them.",
  },
  {
    id: nanoid(),
    img: "toursone.png",
    url: "https://eder-tours.netlify.app",

    title: "Tours",
    text: "Make your reservation in this journey that includes the visiting of a number of places in sequence with an organized group led by a guide.",
  },
  {
    id: nanoid(),
    img: "menutwo.png",
    url: "https://menu-showcase.netlify.app",

    title: "Menu",
    text: "Go ahead and check out our list of dishes available for a meal.",
  },
];
