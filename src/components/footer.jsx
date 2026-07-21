// import React from 'react'
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="border-t border-purple-500/20 mt-20">
            <footer className="max-w-7xl mx-auto px-10 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-white font-semibold">Manahil Zahra</h3>
                        <p className="text-gray-400 text-sm">
                            Full Stack Web Developer
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400  hover:scale-110  transition text-xl">
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:manahil.zahra.dev@gmail.com"
                            className="text-gray-400 hover:text-purple-400  hover:scale-110  transition text-xl"
                        >
                            <FaEnvelope />
                        </a>

                    </div>

                </div>
                <p className="text-gray-500 text-sm text-center mt-6">
                    © {new Date().getFullYear()} Manahil Zahra. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer
