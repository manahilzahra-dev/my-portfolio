// import React from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'
import { useRef } from "react";
// mobile animation 



const Navbar = () => {


  const menuRef = useRef(null);
  const menuListRef = useRef(null);
  const buttonRef = useRef(null);
  const crossRef = useRef(null)
  const humburgerRef = useRef(null)
  // dekstop pr 
  const logoRef = useRef(null)
  const desktopMenuRef = useRef(null)
  const buttondeskRef = useRef(null)
  const tl = useRef();
  const navRef = useRef();
  

  useGSAP(() => {
    const tld = gsap.timeline({

      defaults: {
        duration: 0.6,
        ease: "power3.out"
      }
    })
    // 
    tld.from(navRef.current, {
      opacity: 0,
      

    },)
    tld.from(logoRef.current, {
      y: -20,
      opacity: 0,

    }, "<0.1")
    tld.from(humburgerRef.current, {
      y: -20,
      opacity: 0,

    }, )
    tld.from(desktopMenuRef.current.children, {
      y:-10,
      opacity: 0,
      stagger: 0.2,
      

    }, "<0.3")
    tld.from(buttondeskRef.current,{
      opacity: 0,
      scale:0.9,
      duration:0.4
      
      
    }, "<0.3")
    tl.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: "power3.inOut"
      }
    })

    tl.current.to(menuRef.current, {
      x: 0,

    })
    tl.current.from(crossRef.current, {
      x: 20,
      opacity: 0,

    }, "<0.2");
    tl.current.from(menuListRef.current.children, {
      x: 40,
      opacity: 0,
      // duration:0.5,
      stagger: 0.2
    });
    // button
    tl.current.from(buttonRef.current, {
      y: 20,
      opacity: 0,

    })
    // ye position set kiye hoe ha slide ki
    gsap.set(menuRef.current, {
      x: "100%",
    });
  });

  const openMenu = () => {
    tl.current.play()


  }
  const closeMenu = () => {
    tl.current.reverse()
  }


  return (
    <div className="sticky top-0 z-50 w-full h-auto relative">
      {/* LOGO */}
      <nav ref={navRef}  className="max-w-7xl mx-auto h-20 bg-[#0B0F11]/20 flex justify-between items-center gap-2 text-white py-2 px-5 md:px-10 rounded-full border-2 border-gray-700 backdrop-blur-md">
        <div >
          <h1 ref={logoRef} className="text-3xl font-bold">MANAHIL  <span className="font-bold text-purple-900 text-4xl">.</span></h1>
        </div>

        <div>
          {/* MENU */}
          <ul ref={desktopMenuRef} className="md:flex justify-between items-center gap-8 text-lg hidden">
            <li><a href="#home" className="text-gray-400 hover:text-white transition-all duration-200">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-all duration-200">About</a></li>
             <li><a href="#skills" className="text-gray-400 hover:text-white transition-all duration-200">Skills</a></li>
             <li><a href="#project" className="text-gray-400 hover:text-white transition-all duration-200">Projects</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-all duration-200">Contact  </a></li>
           
          </ul>
        </div>
        <div>
          {/* BUTTON */}
          <button ref={buttondeskRef} className="bg-purple-900 py-2 px-8 rounded-3xl font-bold hover:bg-white hover:text-purple-700 hover:transition-all hover:duration-300 shadow-[0_12px_15px_rgba(168,85,247,0.2)] hidden md:flex">Let's Talk</button>

        </div>
        {/* hamburger */}
        <div onClick={openMenu}
          className="md:hidden z-1000" ref={humburgerRef}>
          <FiMenu className="text-4xl" />
        </div>
      </nav>










      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-full bg-[#0B0F11]/95 text-white p-10"
      >
        <div ref={crossRef} className="flex justify-end items-start">

          <FiX className="text-4xl cursor-pointer mb-6 flex justify-end"
            onClick={closeMenu}
          />
        </div>

        {/* MENU */}
        <ul className="space-y-5 text-lg " ref={menuListRef}>
          <li><a href="/" className="text-gray-200 hover:text-white transition-all duration-200 text-3xl font-bold">Home</a></li>
          <li><a href="/" className="text-gray-200 hover:text-white transition-all duration-200 text-3xl font-bold">About</a></li>
          <li><a href="/" className="text-gray-200 hover:text-white transition-all duration-200 text-3xl font-bold">Contact  </a></li>
          <li><a href="/" className="text-gray-200 hover:text-white transition-all duration-200 text-3xl font-bold">Projects</a></li>
        </ul>

        {/* BUTTON */}
        <button ref={buttonRef} className="bg-purple-900 py-2 px-10 rounded-3xl font-bold hover:bg-white hover:text-purple-700 hover:transition-all hover:duration-300 shadow-[0_12px_15px_rgba(168,85,247,0.2)] flex mt-3">Let's Talk</button>


      </div>

    </div>
  )
}

export default Navbar
