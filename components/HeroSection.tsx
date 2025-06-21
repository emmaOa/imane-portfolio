'use client'

import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaRocket, FaCode, FaLaptopCode } from 'react-icons/fa'
import { HiMail, HiPlay } from 'react-icons/hi'

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            observer.disconnect()
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const skills = [
        { icon: <FaCode />, text: 'Full Stack' },
        { icon: <FaLaptopCode />, text: 'DevOps' },
        { icon: <FaRocket />, text: 'Performance' }
    ]

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated gradient mesh */}
                <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-secondary-500/20 animate-gradient-shift"></div>

                {/* Floating geometric elements - responsive sizes */}
                <div className="absolute top-16 sm:top-20 left-[5%] sm:left-[10%] w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-400/40 to-accent-400/40 rounded-2xl rotate-45 animate-float"></div>
                <div className="absolute top-[25%] sm:top-[30%] right-[10%] sm:right-[15%] w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-secondary-400/30 to-primary-400/30 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-[20%] sm:bottom-[25%] left-[15%] sm:left-[20%] w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-accent-400/35 to-secondary-400/35 rounded-xl rotate-12 animate-float"></div>
                <div className="absolute bottom-[10%] sm:bottom-[15%] right-[20%] sm:right-[25%] w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full animate-float-delayed"></div>

                {/* Interactive mouse follower - only on desktop */}
                <div
                    className="hidden lg:block absolute w-96 h-96 bg-gradient-radial from-primary-500/25 via-secondary-500/15 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none will-change-transform"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                ></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Mobile-specific background enhancement */}
                <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)] lg:min-h-0">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
                        {/* Header */}
                        <div className="space-y-4 lg:space-y-6">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/80 text-xs sm:text-sm font-medium mb-4 lg:mb-6">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                    Available for hire
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                    <span className="block">Hi, I'm</span>
                                    <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                                        Imane Ouazzani
                                    </span>
                                    <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/90 font-medium">
                                        Software Engineer & DevOps
                                    </span>
                                </h1>
                            </div>

                            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    Passionate about building scalable applications and optimizing development workflows.
                                    I transform ideas into robust, efficient solutions using modern technologies and DevOps practices.
                                </p>
                            </div>

                            {/* Skills badges */}
                            <div className={`flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-primary-400/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="text-primary-300 group-hover:text-primary-200 transition-colors text-sm sm:text-base">
                                            {skill.icon}
                                        </div>
                                        <span className="text-white/80 font-medium text-xs sm:text-sm">{skill.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <HiMail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 relative z-10" />
                                <span className="relative z-10 text-sm sm:text-base">Get In Touch</span>
                            </button>

                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl sm:rounded-2xl hover:border-primary-400 hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                <HiPlay className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                                <span className="text-sm sm:text-base">View My Work</span>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className={`flex items-center justify-center lg:justify-start space-x-4 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="text-white/60 text-xs sm:text-sm">Follow me:</span>
                            <div className="flex space-x-3">
                                <a
                                    href="https://github.com/emmaOa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/20"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-primary-300 transition-colors" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/imane-ouazzani-chahdi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/20"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-300 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visual Element */}
                    <div className={`relative order-1 lg:order-2 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            {/* Glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 to-secondary-500/40 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse-slow scale-110"></div>

                            {/* Code window mockup */}
                            <div className="relative card-glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 backdrop-blur-xl">
                                {/* Window header */}
                                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                                    <div className="flex-1 text-center">
                                        <span className="text-white/40 text-xs font-mono">developer.js</span>
                                    </div>
                                </div>

                                {/* Code content */}
                                <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm overflow-hidden">
                                    <div className="text-cyan-300 animate-slide-in-left">
                                        <span className="text-purple-300">const</span>
                                        <span className="text-white ml-2">developer</span>
                                        <span className="text-gray-400 ml-1">=</span>
                                        <span className="text-green-300 ml-2">{'{'}</span>
                                    </div>
                                    <div className="ml-3 sm:ml-4 text-blue-300 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                                        name: <span className="text-green-300">'Imane Ouazzani'</span>,
                                    </div>
                                    <div className="ml-3 sm:ml-4 text-blue-300 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                                        role: <span className="text-green-300">'Full Stack Engineer'</span>,
                                    </div>
                                    <div className="ml-3 sm:ml-4 text-blue-300 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                                        passion: <span className="text-green-300">'Building Amazing Apps'</span>,
                                    </div>
                                    <div className="ml-3 sm:ml-4 text-blue-300 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                                        skills: <span className="text-yellow-300">[</span>
                                    </div>
                                    <div className="ml-6 sm:ml-8 text-green-300 animate-slide-in-left" style={{ animationDelay: '1.0s' }}>
                                        'React', 'Next.js', 'Node.js',
                                    </div>
                                    <div className="ml-6 sm:ml-8 text-green-300 animate-slide-in-left" style={{ animationDelay: '1.2s' }}>
                                        'Docker', 'DevOps', 'PostgreSQL'
                                    </div>
                                    <div className="ml-3 sm:ml-4 text-yellow-300 animate-slide-in-left" style={{ animationDelay: '1.4s' }}>],</div>
                                    <div className="text-green-300 animate-slide-in-left" style={{ animationDelay: '1.6s' }}>{'}'}</div>
                                    
                                    {/* Typing cursor */}
                                    <div className="flex items-center animate-fade-in" style={{ animationDelay: '1.8s' }}>
                                        <div className="w-0.5 h-4 bg-white animate-pulse ml-2"></div>
                                    </div>
                                </div>

                                {/* Terminal-like footer */}
                                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
                                    <div className="flex items-center space-x-2 text-xs text-white/40">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span>Ready to code amazing things</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements around the code window */}
                            <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg sm:rounded-xl rotate-12 animate-float opacity-80"></div>
                            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full animate-float-delayed opacity-80"></div>
                            <div className="absolute top-1/2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-accent-400 to-secondary-400 rounded animate-float opacity-60"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="group flex flex-col items-center space-y-1 sm:space-y-2 text-white/60 hover:text-white transition-colors duration-300"
                        aria-label="Scroll to about section"
                    >
                        <span className="text-xs sm:text-sm font-medium hidden sm:block">Scroll to explore</span>
                        <span className="text-xs font-medium sm:hidden">Explore</span>
                        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors">
                            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}
