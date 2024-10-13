"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiLinkUnlinkM } from "react-icons/ri";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 border border-black/5 rounded-lg overflow-hidden shadow-lg transition hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 h-[33rem] w-[18rem] flex flex-col">
        {/* Image section */}
        <Image
          src={imageUrl}
          alt="Project Image"
          quality={95}
          className="w-full h-[30%] object-cover transition group-hover:scale-105 cursor-pointer hover:opacity-80"
        />

        <div className="relative flex flex-col pt-4 pb-7 px-5 flex-grow">
          <a href={url} target="_blank" rel="noopener noreferrer" className="">
            <RiLinkUnlinkM className="absolute right-3 bottom-3 text-gray-700 hover:text-black dark:text-white/70 dark:hover:text-white cursor-pointer hover:scale-150 transition" />
          </a>

          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 flex-grow">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
