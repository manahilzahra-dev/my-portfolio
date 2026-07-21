// import React from 'react'
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

const Contact = () => {
  const sectionRef = useRef(null);
const headingRef = useRef(null);
const paraRef = useRef(null);
const leftRef = useRef(null);
const rightRef = useRef(null);

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

  tl.from(leftRef.current,{
    x:-80,
    opacity:0,
    duration:0.8,
    ease:"power3.out"
  },"-=0.2");

  tl.from(rightRef.current,{
    x:80,
    opacity:0,
    duration:0.8,
    ease:"power3.out"
  },"-=0.6");

},{scope:sectionRef});
  return (
    <section id="contact" ref={sectionRef} className="max-w-7xl mx-auto px-10 py-24">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-center text-white">Contact <span className="text-purple-500">Me </span></h2>
        <p ref={paraRef} className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">Have a project in mind or want to work together? Feel free to reach out.</p>

        {/* grid banaege do colums kaliye  */}
        <div className="grid md:grid-cols-2 gap-16 mt-16">
           {/* left side div */}
           <div ref={leftRef}>
               <h3 className="font-bold text-white text-3xl">Let's Connect</h3>
               <p className="text-gray-400 mt-4 leading-relaxed">
                 I'm always open to discussing new opportunities, freelance projects, or
  creative ideas. Feel free to reach out anytime.
               </p>
               {/* cards 1 */}
                 <div className="mt-8">
                    {/* actual card wale div ha ye */}
                    <div className="bg-[#161b22]  border border-purple-500/20 rounded-xl p-5">
                    {/* ye cad or text ko side by side rakhne kaliye ha */}
                      <div className="flex items-center gap-4">
                        {/* icon ki circle div ha */}
                         <div className="w-12 h-12 rounded-full bg-purple-600/20 flex justify-center items-center">
                            <MdEmail className="text-purple-400 text-2xl" />       
                         </div>
                         {/*  */}
                         <div>
                            <h4 className="text-white font-semibold">Email</h4>
                            <p className="text-gray-400 text-sm">manahil.zahra.dev@gmail.com</p>
                         </div>
                      </div>
                    </div>

                    {/* card2 */}
                     <div className="mt-4">
                    {/* actual card wale div ha ye */}
                    <div className="bg-[#161b22]  border border-purple-500/20 rounded-xl p-5">
                    {/* ye cad or text ko side by side rakhne kaliye ha */}
                      <div className="flex items-center gap-4">
                        {/* icon ki circle div ha */}
                         <div className="w-12 h-12 rounded-full bg-purple-600/20 flex justify-center items-center">
                            <MdPhone className="text-purple-400 text-2xl" />       
                         </div>
                         {/*  */}
                         <div>
                            <h4 className="text-white font-semibold">Phone</h4>
                            <p className="text-gray-400 text-sm">+92 300 1234567</p>
                         </div>
                      </div>
                    </div>

                    
                 </div>
                 </div>
                   </div>
           {/* right side div */}
           <div ref={rightRef}>
              {/* form contact  */}
                <div className="bg-[#161b22] border border-purple-500/20 rounded-2xl p-8 ">
              <h3 className="text-3xl font-bold  text-white"> Send Me a Message</h3>
              <p className="text-gray-400 mt-4 leading-relaxed">  Fill out the form below and I'll get back to you as soon as possible.</p>
              {/* form */}
                <div className="mt-6">
                    {/* name field */}
                   <label className="block text-gray-300 mb-2">Name</label>
                   <input type="text"  placeholder="Your Name "
                   className="w-full bg-[#0f172a] border border-gray-700 rounded-xl  px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
                   />
                </div>
                {/* email feld */}
                <div className="mt-5">
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" 
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"/>    
                </div>
                     {/* message field  */}
                     <div className="mt-5">
                        <label className="block text-gray-300 mb-2">Message</label>
                    <textarea rows={4} placeholder="Write your message here............"
                    className="w-full border border-gray-800 rounded-xl px-4 py-3  text-white placeholder-gray-500 outline-none focus:border-purple-500 transition resize-none"
                        ></textarea>

                     </div>
                     {/* button msg */}
                     <div className="mt-6">
                             <button className="w-full bg-purple-600 hover:bg-purple-500 py-3 font-bold text-white rounded-xl transition duration-300 ">Send Message</button>
                     </div>

                </div>
           </div>
           {/* grid close */}
        </div>
    </section>
  )
}

export default Contact
