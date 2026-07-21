// import React from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '../assets/logo image.png'
import { FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiMysql } from "react-icons/si";
gsap.registerPlugin(useGSAP, ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardRef = useRef([])
  const imgRef = useRef(null)
  const btnRef = useRef(null);

  useGSAP(() => {
console.log(cardRef.current.length);
console.log(cardRef.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none ",
         markers:true
      },
    })
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",

    })
    tl.from(paraRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,

    })
    tl.from(imgRef.current,{
      opacity:0,
      x:-50,
      duration:0.8
    }, "<")
     
    tl.fromTo(
  [...cardRef.current],
  {
    x: (i) => (i % 2 === 0 ? -60 : 60),
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  },
  "-=0.3"
)
tl.from(btnRef.current,{
  y:-40,
  opacity:0,
  duration:0.6
})
  },{
  scope: sectionRef,
  revertOnUpdate: false,
});
  
  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto py-24 px-10 flex flex-col md:flex-row gap-16 text-white justify-between items-center ">
      {/* left side */}
      <div className="w-full md:w-[40%] flex justify-center items-center">
        <div ref={imgRef} className="w-72 h-96 rounded-3xl  bg-gradient-to-br from-[#1b2130] to-[#111827] border border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.2)]  flex justify-center items-center relative overflow-hidden ">
          {/* yaha logo aega */}
          <img
            src={profileImage}
            alt="Manahil Zahra"
            className="w-full h-full object-cover rounded-2xl"
          />

        </div>
      </div>
      {/* right div */}
      <div className='w-full md:w-[60%]'>
        <h2 ref={headingRef} className='text-4xl font-bold md:text-5xl'>
          About <span className='text-purple-400'> Me</span>
        </h2>
        <p ref={paraRef} className='text-lg leading-8 text-gray-400 mt-6'>I'm a passionate Full Stack Web Developer with a strong interest in building
          modern, responsive, and user-friendly web applications. I enjoy turning ideas
          into real-world solutions using React, Flask, Python, SQL, and Tailwind CSS,
          while focusing on clean code, performance, and great user experience.
        </p>
        {/* grid me skills card aenge */}
        <div className='grid grid-cols-2 gap-4 mt-8'>
          {/* skills react card bana ha yaha pe aaaaaab */}
          <div ref={(el) => (cardRef.current[0] = el)} className='bg-[#161b22]  border border-purple-500/20 rounded-xl  hover:border-purple-500 transition-all duration-300 p-4'>
            <h3 className='font-semibold text-lg flex  items-center gap-2'> <FaReact className="text-sky-400 text-xl " /> React Development</h3>
            <p className='text-gray-400 text-sm mt-2 leading-relaxed'> Building fast, modern, and responsive user interfaces.</p>
          </div>
          {/* flask card */}
          <div ref={(el) => (cardRef.current[1] = el)} className='bg-[#161b22] border border-purple-500/20 rounded-xl hover:border-purple-600 transition-all duration-300 p-4'>
            <h3 className='font-semibold text-lg gap-2 flex items-center'><SiFlask className="text-white text-lg " />Flask Backend</h3>
            <p className='text-gray-400 text-sm leading-relaxed mt-2'>Building secure and scalable backend APIs with Flask.</p>
          </div>
          {/* python card */}
          <div ref={(el) => (cardRef.current[2] = el)} className='bg-[#161b22] border border-purple-500/20 rounded-xl hover:border-purple-600 transition-all duration-300 p-4'>
            <h3 className='font-semibold text-lg gap-2 flex items-center'><FaPython className="text-yellow-400 text-lg " />Python</h3>
            <p className='text-gray-400 text-sm leading-relaxed mt-2'>Writing clean, efficient, and scalable Python applications.</p>
          </div>
          {/* sql */}
          <div ref={(el) => (cardRef.current[3] = el)} className='bg-[#161b22] border border-purple-500/20 rounded-xl hover:border-purple-600 transition-all duration-300 p-4'>
            <h3 className='font-semibold text-lg gap-2 flex items-center'><SiMysql className="text-green-400 text-lg" />SQL</h3>
            <p className='text-gray-400 text-sm leading-relaxed mt-2'>Managing databases and writing optimized SQL queries.</p>
          </div>

        </div>
        {/* button */}
        <div ref={btnRef} className='mt-8'>
          <a href="/" className='inline-block bg-purple-900 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-400 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)] text-center'>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
