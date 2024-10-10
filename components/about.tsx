"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A visionary MERN stack developer proficient in{" "}
        <span className="font-medium">
          React, Node.js, MongoDB, PSQL, Nest, Next and Express
        </span>
        , I blend technical excellence with creativity to craft captivating web
        projects. My agile mindset and innovative flair turn ideas into
        awe-inspiring user experiences. After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I followed my passion
        for programming by enrolling in a coding bootcamp, where I mastered{" "}
        <span className="font-medium">full-stack web development</span>. My
        favorite part of programming is solving complex problems, and I{" "}
        <span className="underline">love</span> the thrill of arriving at a
        solution.
      </p>

      <p className="mb-3">
        My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, PSQL and MongoDB
        </span>
        , with additional familiarity in{" "}
        <span className="font-medium">TypeScript</span> and{" "}
        <span className="font-medium">Prisma</span>. I am always eager to learn
        new technologies and currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and spending time with my dog. I also love{" "}
        <span className="font-medium">learning new things</span> and am
        currently delving into <span className="font-medium">history</span>,{" "}
        <span className="font-medium">philosophy</span>, and learning to play
        the guitar.
      </p> */}
    </motion.section>
  );
}
