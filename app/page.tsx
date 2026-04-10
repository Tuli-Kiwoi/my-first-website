"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import ProjectsSection from "@/components/ProjectsSection"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Spotlight Background */}
      <div className="absolute inset-0 bg-background/90 dark:bg-background/90 antialiased">
        <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(23,23,23,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.08)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
      </div>

      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Available for work
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Tuli
                </span>
              </h1>

              {/* Container Text Flip */}
              <div className="flex items-center gap-2 text-xl md:text-2xl font-medium">
                <span className="text-foreground">I build</span>
                <ContainerTextFlip
                  words={["Networking", "Web Development", "Linux", "Design", "CCTV", "Next.js"]}
                  className="text-2xl md:text-4xl"
                  textClassName="text-foreground"
                />
              </div>
            </div>

            {/* Bio */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies.
              I love creating beautiful, functional applications and solving complex problems.
              Always eager to learn new technologies and tackle challenging projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <Link
                href="#"
                className="p-3 rounded-full bg-slate-900/10 hover:bg-slate-900/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-300"
                aria-label="GitHub"
              >
                <IconBrandGithub className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-full bg-slate-900/10 hover:bg-slate-900/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-full bg-slate-900/10 hover:bg-slate-900/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <IconBrandTwitter className="w-6 h-6" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <a
                href="mailto:kiwoituli@gmail.com"
                className="transition-colors hover:text-foreground"
              >
                kiwoituli@gmail.com
              </a>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-muted-foreground/60" />
              <a
                href="tel:+254797292238"
                className="transition-colors hover:text-foreground"
              >
                +254 797292238
              </a>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-muted-foreground/60" />
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                open
              </span>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-[550px] aspect-square mx-auto order-1 lg:order-2"
          >
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-95" />

            {/* Online badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-background/80 backdrop-blur-sm border border-border/40 flex items-center gap-1.5 px-2 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium">Online</span>
              </Badge>
            </div>

            <Image
              src="/IMG_0600@-1634772304.jpg"
              alt="Profile Photo"
              fill
              priority
              className="object-cover object-top rounded-2xl shadow-2xl border border-border/40
               hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
          </div>
        </div>
      </section>
      <ProjectsSection />
    </main>
  );
}
