'use client'

import { FaHeart, FaCode, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const techStack = [
        { icon: <SiNextdotjs className="text-lg" />, name: "Next.js", color: "text-gray-900" },
        { icon: <SiTailwindcss className="text-lg" />, name: "Tailwind CSS", color: "text-cyan-500" },
        { icon: <FaReact className="text-lg" />, name: "React", color: "text-blue-500" }
    ]

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                    {/* Main content */}
                    <div className="mb-8 animate-in-up">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                            Imane Ouazzani Chahdi
                        </h3>
                        <p className="text-gray-300 text-lg mb-6">
                            Full Stack Developer & Software Engineer
                        </p>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-8 animate-in-up" style={{ animationDelay: '200ms' }}>
                        <p className="text-gray-400 mb-4">Built with</p>
                        <div className="flex justify-center items-center space-x-6">
                            {techStack.map((tech, index) => (
                                <div key={index} className="group flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
                                        {tech.icon}
                                    </div>
                                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-white/10 animate-in-up" style={{ animationDelay: '400ms' }}>
                        <p className="text-gray-400 flex items-center justify-center space-x-2 mb-2">
                            <span>© {currentYear} Imane Ouazzani Chahdi. All rights reserved.</span>
                        </p>
                        <p className="text-gray-500 flex items-center justify-center space-x-2">
                            <span>Made with</span>
                            <FaHeart className="text-red-500 animate-pulse" />
                            <span>and</span>
                            <FaCode className="text-blue-400" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
