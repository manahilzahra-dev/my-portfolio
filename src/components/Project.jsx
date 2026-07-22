// import React from 'react'
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)
import talentflow from "../assets/talent-flow-img.png"

const Project = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const cardsRef = useRef([])
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
    });

    tl.from(paraRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, "-=0.3");
    tl.fromTo(
      [...cardsRef.current],
      {
        x: (i) => {
          if (i === 0) return -100;
          if (i === 1) return 0;
          return 80;


        },
        y: (i) => (i === 1 ? 60 : 0),
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)"
      },
      "-=0.3"
    );

  }, { scope: sectionRef });
  return (
    <section id="project" ref={sectionRef} className="max-w-7xl mx-auto py-24 px-10">
      <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white text-center">
        My <span className="text-purple-400">Projects</span>
      </h2>
      <p ref={paraRef} className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Here are some of my featured projects showcasing my skills in full-stack web development.
      </p>

      {/* Responsive Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {/* Card 1: Talent Flow AI */}
        <div ref={(el) => {
          (cardsRef.current[0] = el)
        }} className="bg-[#161b22] border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
          {/* Image container */}
          <div className="h-52 bg-white flex items-center justify-center hover:scale-105 transition duration-500">
            {/* project image */}
            <img
              src={talentflow}
              alt="Talent Flow AI"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">Talent Flow AI</h3>
            <p className="text-gray-400 leading-normal mt-3 text-sm min-h-[60px]">
              TalentFlow AI is a full-stack resume screening platform that parses PDF resumes, matches candidate skills against job requirements, calculates a compatibility score, and stores scan history securely using MySQL.
            </p>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">React</span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">Flask</span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">MySQL</span>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/manahilzahra-dev/TalentFlow-AI"
                className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full text-xs font-bold transition">Project Gallery</a>
              <a
                href="https://github.com/manahilzahra-dev/TalentFlow-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500 px-4 py-2 rounded-full text-xs font-bold hover:bg-purple-500/10 transition text-purple-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Restaurant Website */}
        <div ref={(el) => {
          (cardsRef.current[1] = el)
        }} className="bg-[#161b22] border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
          {/* Image container */}
          <div className="h-52 bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Ecommerce Website (Coming Soon)</span>
          </div>
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">Ecommerce Website</h3>
            <p className="text-gray-400 leading-normal mt-3 text-sm min-h-[60px]">
              A modern full-stack ecommerce platform currently under development with product listings, authentication, shopping cart, and secure checkout.
            </p>
            {/* Tech Stack (Realistic for landing pages) */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">React</span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">Tailwind</span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">GSAP</span>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <a href="/" className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full text-xs font-bold transition">Coming Soon</a>
              <a href="#" className="border border-purple-500 px-4 py-2 rounded-full text-xs font-bold hover:bg-purple-500/10 transition text-purple-400">In Progress</a>
            </div>
          </div>
        </div>

        {/* Card 3: Task Management Dashboard */}
        <div ref={(el) => {
          (cardsRef.current[2] = el)
        }} className="bg-[#161b22] border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
          {/* Image container */}
          <div className="h-52 bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Task Dashboard </span>
          </div>
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">Task Dashboard</h3>
            <p className="text-gray-400 leading-normal mt-3 text-sm min-h-[60px]">
              A productivity dashboard currently in development featuring task management, analytics, authentication, and responsive UI.
            </p>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">React</span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">Python</span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">SQL</span>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <a href="/" className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full text-xs font-bold transition">Coming Soon</a>
              <a href="#" className="border border-purple-500 px-4 py-2 rounded-full text-xs font-bold hover:bg-purple-500/10 transition text-purple-400">In Progress</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project