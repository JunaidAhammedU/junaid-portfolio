import React from "react";
import corpcommentImg from "@/public/coconut.jpg";
import rmtdevImg from "@/public/Indoore-plants.jpg";
import wordanalyticsImg from "@/public/food-delivary.jpg";
import passwordImg from "@/public/password-project.png";
import dallImg from "@/public/Dall-E-small-a7397dd.webp";
import adminImg from "@/public/admin-management.webp";
import signalImg from "@/public/signal-clone.png";
import netflixImg from "@/public/netflix.webp";
import { FaReact, FaNodeJs, FaDocker, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiNestjs, SiMongodb, SiPostgresql, SiWebrtc, SiJavascript, SiJest, SiRedux, SiTailwindcss, SiPrisma, SiBootstrap, SiExpress, SiFramer, SiSocketdotio, SiFirebase } from "react-icons/si";
import { title } from "process";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer At Towner Solution PVT. LTD.",
    location: "Bangalore, India",
    description:
      "Currently working as a full-stack developer at Towner Solution. We are developing a SaaS-based cab sector platform for the global market",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - present",
  },
  {
    title: "Full-Stack Developer Bromag India",
    location: "Chenai, India",
    description:
      "I worked as a full-stack developer for 3 months in Bromag India Product based company. I developed A Complete working Food delivery web app with user, restaurant and kitchen sections. It has login, payment and reservation systems.",
    icon: React.createElement(FaReact),
    date: "Nov 2023 - Jan 2024",
  },
  {
    title: "Graduated Brototype bootcamp",
    location: "Calicut Kerala, India",
    description:
      "I graduated from the Brototype. I was a part of the member to up skill to the full stack. I learned about the complete technologies which are using in web development.",
    icon: React.createElement(FaReact),
    date: "Feb 2023 - Oct 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "Food Delivery Web App",
    description:
      "A web app that allows users to order food online, Food delivery web app with user, restaurant and kitchen sections. It has login, payment and reservation systems.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Redux", "Typescript"],
    imageUrl: wordanalyticsImg,
    url: "https://food-delivery-web-app.vercel.app/",
  },
  {
    title: "AI - RECIPE GENERATOR.",
    description:
      "A web app that generates random AI recipes based on user input. It uses OpenAI API to fetch recipes and stores them in a database.",
    tags: ["React", "OpenAI-API", "MongoDB", "Tailwind", "Node.js", "Redux", "Typescript"],
    imageUrl: corpcommentImg,
    url: "https://coconut-client.vercel.app/login",
  },
  {
    title: "Indore Plants e-commerce Website",
    description:
      "A website for selling your plants online. With payment gateway, Analytics and Admin panel.",
    tags: ["Node.js", "Express", "EJS", "Bootstrap", "MongoDB", "Razore Pay"],
    imageUrl: rmtdevImg,
    url: "https://olea-indoor-plants-shop.onrender.com/",
  },
  {
    title:"DALL-E-Image-Generator-Node-Application",
    description:
    "A web app that generates images based on user input. It uses OpenAI API to fetch images and stores them in a database.",
    tags: ["OpenAI-API", "MongoDB", "Node.js", "Typescript", "Repository Pattern"],
    imageUrl: dallImg,
    url: "https://dalle-image-generator.vercel.app/",
  },
  {
    title: "Password Manager",
    description:
      "A Minimal web app that allows users to create strong passwords. Manage all the passwords in secure way.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Context API", "Typescript"],
    imageUrl: passwordImg,
    url: "https://password-generator-gold-rho.vercel.app/",
  },
  {
    title: "Signal Chat App Clone",
    description:
      "Developed a clone of Signal Chat App. Users can chat with each other. It has a login system.",
    tags: ["React", "Node.js", "Socket.io","MongoDB", "Tailwind", "Typescript"],
    imageUrl: signalImg,
    url: "https://github.com/JunaidAhammedU/Signal",
  },
  {
    title: "Admin Management System",
    description:
      "Developed an admin management system. With RBAC, Analytics, and other features. It has a login system.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Redux", "Typescript"],
    imageUrl: adminImg,
    url: "https://olea-indoor-plants-shop.onrender.com/admin",
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a clone of Netflix. Users can watch movies and series. It has a login system.",
    tags: ["React", "TMDB-API", "MongoDB" ,"Tailwind", "Typescript"],
    imageUrl: netflixImg,
    url: "https://netflix-clone-psi.vercel.app/",
  }
  
] as const;

export const skillsData = [
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "Nest JS", icon: React.createElement(SiNestjs) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "Microservices", icon: null }, 
  { name: "WebRTC", icon: React.createElement(SiWebrtc) },
  { name: "Docker", icon: React.createElement(FaDocker) },
  {name: "Socket.io", icon: React.createElement(SiSocketdotio) },
  {name:"Firebase", icon: React.createElement(SiFirebase) },
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(FaCss3Alt) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "Jest Unit Testing", icon: React.createElement(SiJest) },
  { name: "Testing Library", icon: null },
  { name: "Redux", icon: React.createElement(SiRedux) },
  { name: "Git", icon: React.createElement(FaGit) },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
  { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "Bootstrap", icon: React.createElement(SiBootstrap) },
  { name: "Express", icon: React.createElement(SiExpress) },
  { name: "Framer Motion", icon: React.createElement(SiFramer) },
] as const;
