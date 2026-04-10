"use client"

import type { LucideIcon } from "lucide-react"
import { ExternalLink, Newspaper, ImageIcon, Megaphone } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"

const projects: {
  title: string
  description: string
  image: string
  link: string
  icon: LucideIcon
}[] = [
  {
    title: "Strategic leap magazine",
    description:
      "Strategic Leap Solutions Limited is a Nairobi-based company offering innovative, technology-driven solutions to help businesses grow and succeed.",
    image: "/1.png",
    link: "https://canva.link/5fiyat7fod6n6q3",
    icon: Newspaper,
  },
  {
    title: "Strategic leap banner",
    description:
      "Strategic Leap Solutions Limited drives business growth through innovative, practical solutions.",
    image: "/2.png",
    link: "https://canva.link/sz5r5vh12cnoi9g",
    icon: ImageIcon,
  },
  {
    title: "Strategic leap poster",
    description:
      "Strategic Leap Solutions Limited launches to deliver innovative solutions for business growth and community impact.",
    image: "/3.png",
    link: "https://canva.link/fko4xn64y9y2r4v",
    icon: Megaphone,
  },
]

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24 px-4 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            A few designs and campaigns I created recently.
          </p>
        </div>

        <BentoGrid className="max-w-none mx-0 md:auto-rows-auto">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <BentoGridItem
                key={project.title}
                className={index === 2 ? "md:col-span-2" : ""}
                header={
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/bento:scale-[1.03]"
                    />
                  </div>
                }
                title={project.title}
                icon={<Icon className="h-4 w-4 text-primary" />}
                description={
                  <div className="space-y-3">
                    <p>{project.description}</p>
                    <Button asChild variant="outline" size="sm" className="w-fit">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                }
              />
            )
          })}
        </BentoGrid>
      </div>
    </motion.section>
  )
}
