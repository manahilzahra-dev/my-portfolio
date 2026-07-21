// import React from 'react'
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaFigma
    

} from "react-icons/fa";
import { FaPhp } from 'react-icons/fa'; 
import { VscVscode } from "react-icons/vsc";
import { FaDatabase } from 'react-icons/fa'; 
import { SiFlask } from 'react-icons/si';
import { SiTailwindcss, SiGreensock } from "react-icons/si";
 const frontendSkills = [
 {
    name:  "HTML",
    icon: FaHtml5,
     color: "text-orange-500",
},
{
    name:  "CSS",
    icon: FaCss3Alt,
     color: "text-blue-500",
},{
    name:  "JAVASCRIPT",
    icon: FaJs,
     color: "text-yellow-500",
},
{
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
},{
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
},
{
    name: "Bootstrap",
    icon:  FaBootstrap,
    color: "text-purple-400",
},
{
    name: "GSAP",
    icon:  SiGreensock,
    color: "text-green-400",
},
 ];
// backend array 

const backendSkills = [
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-400",
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "text-white",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "text-blue-500",
  },
  {
    name: "MySQL",
    icon: FaDatabase,
    color: "text-blue-800",
  },
];
// tools array
const tools = [
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-[#F05032]",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-[#181717]",
  },
  {
    name: "VsCode",
    icon: VscVscode,
    color: "text-[#007ACC]",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "text-[#F24E1E]",
  },
];


const Skill = () => {

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

  tl.from(headingRef.current,{
    y:40,
    opacity:0,
    duration:0.8,
  });

  tl.from(paraRef.current,{
    y:20,
    opacity:0,
    duration:0.6,
  },"-=0.3");

  tl.fromTo(
    cardsRef.current,
    {
      x:(i)=>{
        if(i===0) return -100;
        if(i===1) return 0;
        return 100;
      },

      y:(i)=>(i===1 ? 60 : 0),

      opacity:0,
    },
    {
      x:0,
      y:0,
      opacity:1,
      duration:0.8,
      stagger:0.15,
      ease:"power3.out",
    },
    "-=0.3"
  );

},{scope:sectionRef});

  
  
  
  

    return (
        <section id="skills" ref={sectionRef} className="max-w-7xl mx-auto py-24 px-10">
            {/* <SiVisualstudiocode className="text-4xl text-blue-500" /> */}
            <h2 ref={headingRef} className="text-white text-4xl md:text-5xl  font-bold text-center"
            >My   <span className="text-purple-500"> Skills</span></h2>
            <p ref={paraRef} className="text-gray-400 text-center mt-5 max-w-2xl mx-auto"> Technologies and tools I use to build modern, responsive, and scalable web applications.</p>
            {/* cards ki grid frontend */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 ">
                {/* card 1 */}
                <div ref={(el)=>{
                    (cardsRef.current[0]=el)
                }} className="bg-[#161b22] border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white"> Frontend</h3>
                    <p  className="text-gray-400 text-sm mt-2">
                        Building responsive and interactive user interfaces.
                    </p>

                    {/* skills  frontend badges banongi ab */}

                    <div className="flex flex-wrap gap-3 mt-6">
                     {frontendSkills.map((skill)=>{
                        const Icon = skill.icon;
                        
                        return (<span 
                            key={skill.name} 
                            className="rounded-full bg-purple-600/20 text-sm px-3 py-1 text-purple-300  flex gap-2  items-center hover:scale-105  transition-all duration-300">
                            <Icon   className={skill.color}/> 
                            {skill.name} </span>)
                     })}

                        
                    </div>
                    </div>


                {/* backend */}
                 <div ref={(el)=>{
                    (cardsRef.current[1]=el)
                 }} className="bg-[#161b22] border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white">Backend</h3>
                    <p className="text-gray-400 text-sm mt-2">
                       Developing server-side applications with secure APIs and database integration.
                    </p>

                    {/* skills  frontend badges banongi ab */}

                    <div className="flex flex-wrap gap-3 mt-6">
                     {backendSkills.map((skill)=>{
                        const Icon = skill.icon;
                        
                        return (<span 
                            key={skill.name} 
                            className="rounded-full bg-purple-600/20 text-sm px-3 py-1 text-purple-300  flex gap-2  items-center hover:scale-105  transition-all duration-300">
                            <Icon   className={skill.color}/> 
                            {skill.name} </span>)
                     })}

                        
                    </div>
                    </div>

                   {/* tool cardr */}
                     <div ref={(el)=>{
                      (cardsRef.current[2]=el)
                     }} className="bg-[#161b22] border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white">Tools</h3>
                    <p className="text-gray-400 text-sm mt-2">
                       Tools I use for development, version control, and UI design.
                    </p>

                    {/* skills  frontend badges banongi ab */}

                    <div className="flex flex-wrap gap-3 mt-6">
                     {tools.map((skill)=>{
                        const Icon = skill.icon;
                        
                        return (<span 
                            key={skill.name} 
                            className="rounded-full bg-purple-600/20 text-sm px-3 py-1 text-purple-300  flex gap-2  items-center hover:scale-105  transition-all duration-300">
                            <Icon   className={skill.color}/> 
                            {skill.name} </span>)
                     })}

                        
                    </div>
                    </div>

            </div>






        </section >
    )
}

export default Skill
