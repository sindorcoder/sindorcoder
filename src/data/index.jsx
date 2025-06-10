import translate from "../assets/images/translate.png";

import dinorama from "../assets/images/dinorama.png";
import expence from "../assets/images/exchange.png";
import ecommerce from "../assets/images/ecomerce.png";
import candleaf from "../assets/images/candleaf.png";
import makeUps from "../assets/images/makeUps.png";
import weather from "../assets/images/weather.png";
import info from "../assets/images/info.png";
import najot from "../assets/images/najot.png";

import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import tailwind from "../assets/icons/tailwindcss.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/nextdotjs.svg";
import node from "../assets/icons/nodedotjs.svg";
import reactQuery from "../assets/icons/reactquery.svg";
import redux from "../assets/icons/redux.svg";
import antdesign from "../assets/icons/antdesign.svg";
import chakraUi from "../assets/icons/chakraui.svg";
import chartJS from "../assets/icons/chartdotjs.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import mui from "../assets/icons/mui.svg";
import sass from "../assets/icons/sass.svg";
import shadCN from "../assets/icons/shadcnui.svg";
import vite from "../assets/icons/vite.svg";
import webpack from "../assets/icons/webpack.svg";
import { Icons } from "../components/ui/Icons";

const projectData = [
  {
    title: "Weather App",
    text: "An application that shows weather forecasts. Developed using React.",
    links: [
      {
        type: "Website",
        href: "https://weathers-uz.vercel.app",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/weather",
        icon: <Icons.github />,
      },
    ],
    type: ["Javascript"],
    image: weather,
  },

  {
    title: "Translate",
    text: "An app for translating texts. Built with React and Tailwind.",
    links: [
      {
        type: "Website",
        href: "https://translate-six-pi.vercel.app/",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/Translate",
        icon: <Icons.github />,
      },
    ],
    type: ["React Js", "Tailwind"],
    image: translate,
  },
  {
    title: "Dinorama Shop",
    text: "E-commerce platform for a dinosaur shop. Built with React, Tailwind, and shadCN.",
    links: [
      {
        type: "Website",
        href: "https://dinorama.vercel.app/",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/Dinorama",
        icon: <Icons.github />,
      },
    ],
    type: ["ReactJS", "Tailwind", "shadCN"],
    image: dinorama,
  },
  {
    title: "Expence and Income",
    text: "An app for managing income and expenses. Built with HTML, Tailwind, and TypeScript.",
    links: [
      {
        type: "Website",
        href: "https://exchange-sable.vercel.app/",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/Exchange",
        icon: <Icons.github />,
      },
    ],
    type: ["HTML", "Tailwind", "TypeScript"],
    image: expence,
  },

  {
    title: "E-COMMERCE",
    text: "Platform for an online store. Developed using HTML, CSS, and Javascript.",
    links: [
      {
        type: "Website",
        href: "https://imtixon-5-teal.vercel.app/",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/E-COM",
        icon: <Icons.github />,
      },
    ],
    type: ["HTML", "CSS", "Javascript"],
    image: ecommerce,
  },

  {
    title: "Candleaf",
    text: "E-commerce app for candle products. Built with TypeScript, ReactJS, and Tailwind.",
    links: [
      {
        type: "Website",
        href: "https://candleaf-tan.vercel.app/",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/Candleaf",
        icon: <Icons.github />,
      },
    ],
    type: ["TypeScript", "ReactJS", "Tailwind"],
    image: candleaf,
  },
  {
    title: "Make up",
    text: "App for beauty products. Developed with TypeScript, ReactJS, and Tailwind.",
    links: [
      {
        type: "Website",
        href: "https://beatyforgirls.vercel.app/",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/makeUps",
        icon: <Icons.github />,
      },
    ],
    type: ["TypeScript", "ReactJS", "Tailwind"],
    image: makeUps,
  },

  {
    title: "Info Countries",
    text: "An app providing information about countries worldwide. Built with Webpack, SCSS, and Javascript.",
    links: [
      {
        type: "Website",
        href: "https://information-countries.vercel.app/",
        icon: <Icons.globe />,
      },
      {
        type: "Source",
        href: "https://github.com/sindorcoder/information-countries",
        icon: <Icons.github />,
      },
    ],
    type: ["Webpack", "SCSS", "Javascript"],
    image: info,
  },
];

export const techsIcon = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "shadCN UI", icon: shadCN },
  { name: "Chakra UI", icon: chakraUi },
  { name: "React", icon: react },
  { name: "React-Query", icon: reactQuery },
  { name: "Redux", icon: redux },
  { name: "Next JS", icon: next },
  { name: "Node JS", icon: node },
  { name: "ANT DESIGN", icon: antdesign },
  { name: "Chart JS", icon: chartJS },
  { name: "Git", icon: git },
  { name: "Github", icon: github },
  { name: "MATERIAL UI", icon: mui },
  { name: "Sass", icon: sass },
  { name: "Vite", icon: vite },
  { name: "Webpack", icon: webpack },
];

export const education = [
  {
    school: "Najot Talim",
    href: "https://najottalim.uz/",
    degree: "React.Js BootCamp",
    logoUrl: najot,
    start: "2024 February",
    end: "2024 October",
  },
];

export default projectData;
