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
        A visionary Full Stack Developer proficient in{" "}
        <span className="font-bold">
          React, Node.js, MongoDB, PSQL, Nest, Next and Express
        </span>
        , I blend technical excellence with creativity to craft captivating web
        projects. My agile mindset and innovative flair turn ideas into
        awe-inspiring user experiences. I followed my passion
        for programming by enrolling in a coding bootcamp, where I mastered{" "}
        <span className="font-bold">full-stack web development</span>. My
        favorite part of programming is solving problems and thinking new solutions, and I{" "}
        <span className="underline">love</span> the thrill of arriving at a
        solution.
      </p>

      <p className="mb-3">
        My core stack includes{" "}
        <span className="font-bold">
          React, Next.js, Node.js, Nest.Js, PSQL and MongoDB
        </span>
        , with additional familiarity in{" "}
        <span className="font-bold">TypeScript</span> and{" "}
        <span className="font-bold">Prisma, Testing Libraries, and Other Professional Tools</span>. I am always eager to learn
        new technologies. Now I'm currently working as a Full Stack Developer at{" "}
        <span className="font-bold">Towner Solution</span> in Bangalore.
      </p>

    </motion.section>
  );
}
