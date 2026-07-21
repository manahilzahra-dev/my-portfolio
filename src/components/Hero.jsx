// import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { useRef } from "react";
import profileImage from "../assets/logo image.png"
import { FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiTailwindcss, SiMysql, SiGreensock } from "react-icons/si";
const Hero = () => {

const badgeRef = useRef(null);
const headingRef = useRef(null);
const paraRef = useRef(null);
const buttonRef = useRef(null);
// right side 
const imgRef = useRef(null);
const ringRef = useRef(null);
const reactRef = useRef(null)
const pythonRef = useRef(null)
const flaskRef = useRef(null)
const sqlRef = useRef(null)
const tailwindRef = useRef(null)
const gsapRef = useRef(null)


useGSAP(()=>{
  const badges = [
  reactRef.current,
  pythonRef.current,
  flaskRef.current,
  sqlRef.current,
  tailwindRef.current,
  gsapRef.current,
];
console.log(badges);

  const tl = gsap.timeline({
    defaults:{
      duration:1,
      ease:"power3.out"
    }
  })
  tl.from(badgeRef.current,{
    opacity:0,
    y:20
  })

  .from(headingRef.current,{
    y:35,
    opacity:0
  }, "-=0.35")
  .from(paraRef.current,{
    y:25,
    opacity:0,
},"-=0.4")

.from(buttonRef.current,{
    y:20,
    opacity:0,
    
},"-=0.4")

.from(ringRef.current, {
  scale: 0.5,
  opacity: 0,
  duration: 0.8,
}, "<")

.from(imgRef.current, {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
}, "<")
.from(
  badges.filter(Boolean),
  {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "back.out(1.7)",
    immediateRender: false,
  }
)
tl.call(() => {
  badges.filter(Boolean).forEach((badge, index) => {
    gsap.to(badge, {
      y: gsap.utils.random(-8, -15),
      duration: gsap.utils.random(2, 3),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.15,
    });
  });
});
// .from(badges,{
//   opacity:0,
//   scale:0,
//   duration:0.5,
//   stagger:0.08,
//   ease:"back.out(1.7)"
// })
// tl.call(() => {

//   badges.forEach((badge,index)=>{

//     gsap.to(badge,{
//       y:gsap.utils.random(-8,-15),
//       duration:gsap.utils.random(2,3),
//       repeat:-1,
//       yoyo:true,
//       ease:"sine.inOut",
//       delay:index*0.15
//     })

//   })

// })
}, { revertOnUpdate: false })



  return (
    <section id="home" className='flex flex-col justify-center items-center md:flex-row py-5 md:py-24 lg:py-28  mx-auto   px-10 gap-10 text-white max-w-7xl mt-1 ' >
        {/* sec1 ka 1st child */}
      <div className="w-full md:w-[60%] flex flex-col gap-5">
         <div ref={badgeRef} className="bg-purple-950/40 rounded-full w-fit px-4 py-2 font-sm md:text-sm text-purple-400 border border-gray-500">
  ✨  Open to Internships & Freelance
</div>
         <h1 ref={headingRef} className=" max-w-xl text-white text-4xl md:text-6xl leading-tight tracking-tight font-extrabold">Building Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Web Applications.</span></h1>

        <p ref={paraRef} className="text-gray-400 text-lg  md:text-xl max-w-xl leading-relaxed">Hi, I'm Manahil. I build responsive and modern web applications using React, Flask, Python, and SQL, with a focus on clean UI and performance.</p>
        {/* button */}
        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 mt-5">
         <button className=" w-full sm:text-sm sm:w-auto bg-purple-900 text-white rounded-full py-2 px-5 font-bold hover:bg-purple-400 transition-all duration-300  hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)]">VIEW PROJECTS</button>
         <button   className=" w-full sm:w-auto border border-gray-700 text-gray-300 hover:border-white hover:text-white  rounded-full py-2 px-5 font-bold transition-all duration-300  hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)]">CONTACT ME</button>
        </div>
      </div>
    {/* sec 1 ka 2nd child right */}
    <div className=" relative w-full md:w-[40%] flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center">
        {/* glow ring */}
        <div ref={ringRef} className="absolute w-80 h-80 md:h-80 md:w-80 lg:w-96 lg:h-96 rounded-full border border-purple-500/20  bg-purple-800/20 shadow-[0_0_80px_rgba(168,85,247,0.35)]"></div> 
        {/* circle ring */}
       <div ref={imgRef} className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-75 md:h-75 rounded-full flex justify-center items-center bg-[#161b22] border-2 border-purple-600/50 shadow-[0_0_45px_rgba(168,85,247,0.25)] bg-gradient-to-br from-[#1b2130] to-[#111827]  overflow-hidden hover:scale-[1.03]
hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] ">

       <img
  src={profileImage}
  alt="Manahil Zahra"
  className="w-full h-full object-cover rounded-full "
/>
       </div>
{/* react badge */}
<div ref={reactRef} className="absolute -top-2 left-1/2 -translate-x-1/2
py-2 px-3
bg-[#111827]/90 backdrop-blur-md
border border-gray-700
rounded-full
flex items-center gap-2
hover:scale-110 transition-all duration-300 scale-90 sm:scale-100">

    <span className="text-blue-400"><FaReact className="text-sky-400 text-xl" /></span>React
 </div> 

 {/* python badge */}
 <div ref={pythonRef} className="absolute
bottom-12
right-0

py-2 px-3
bg-[#111827]/90
backdrop-blur-md
border border-gray-700
rounded-full

flex items-center gap-2
hover:scale-110
transition-all duration-300">

    <span className="text-blue-400"><FaPython className="text-yellow-400 text-xl" /></span>Python
 </div> 
{/* flask badge */}
<div ref={flaskRef} className="absolute
-bottom-2
left-1/2
-translate-x-1/2

py-2 px-3
bg-[#111827]/90
backdrop-blur-md
border border-gray-700
rounded-full

flex items-center gap-2
hover:scale-110
transition-all duration-300">

    <span className="text-blue-400"><SiFlask className="text-white text-lg" /></span>Flask
 </div> 
 {/* sql badge */}
 <div ref={sqlRef} className="absolute
top-14
right-0

py-2 px-3
bg-[#111827]/90
backdrop-blur-md
border border-gray-700
rounded-full

flex items-center gap-2
hover:scale-110
transition-all duration-300">

<SiMysql className="text-green-400 text-lg"/>
SQL

</div>
{/* tailwand badge */}

<div ref={tailwindRef} className="absolute  top-14 left-0 md:top-16 md:left-12 bg-[#111827]/90 backdrop-blur-md border border-gray-700 rounded-full px-3 py-2 flex items-center gap-2 hover:scale-110 transition-all duration-300">
  <SiTailwindcss className="text-cyan-400 text-xl" />
  <span>Tailwind</span>
</div>
{/* gsap */}
<div ref={gsapRef} className="absolute bottom-10 left-0 -translate-y-1/2 bg-[#111827]/90 backdrop-blur-md border border-gray-700 rounded-full px-3 py-2 flex items-center gap-2 hover:scale-110 transition-all duration-300">
  <SiGreensock className="text-green-400 text-lg" />
  <span>GSAP</span>
</div>
            
          {/* circle ka bhi container close */}
       </div>
       {/* right closing */}
    </div>
    
    
    </section>
  )
}

export default Hero
