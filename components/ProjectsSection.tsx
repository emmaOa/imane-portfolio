'use client'

import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaRocket, FaServer } from 'react-icons/fa'

interface Project {
    title: string
    description: string
    technologies: string[]
    github: string
    demo?: string
    category: 'frontend' | 'backend' | 'fullstack' | 'devops'
    featured?: boolean
    image?: string
    status: 'completed' | 'in-progress' | 'planning'
    highlights: string[]
}

interface ProjectCardProps {
    project: Project
    index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'frontend': return <FaCode className="w-5 h-5" />
            case 'backend': return <FaServer className="w-5 h-5" />
            case 'fullstack': return <FaLaptopCode className="w-5 h-5" />
            case 'devops': return <FaRocket className="w-5 h-5" />
            default: return <FaCode className="w-5 h-5" />
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'frontend': return 'from-blue-500 to-cyan-500'
            case 'backend': return 'from-green-500 to-emerald-500'
            case 'fullstack': return 'from-purple-500 to-pink-500'
            case 'devops': return 'from-orange-500 to-red-500'
            default: return 'from-gray-500 to-slate-500'
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800 border-green-200'
            case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
            case 'planning': return 'bg-blue-100 text-blue-800 border-blue-200'
            default: return 'bg-gray-100 text-gray-800 border-gray-200'
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed': return '✅'
            case 'in-progress': return '🚧'
            case 'planning': return '📋'
            default: return '📝'
        }
    }

    return (
        <div
            className={`group relative card-glass rounded-3xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:-rotate-1 animate-fade-in-up border border-white/20 ${project.featured ? 'lg:col-span-2 ring-2 ring-gradient-to-r ring-primary-200/50' : ''}`}
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Dynamic gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-3xl`}></div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1000`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 200}ms`,
                            animation: isHovered ? 'float 4s ease-in-out infinite' : 'none'
                        }}
                    ></div>
                ))}
            </div>

            {/* Featured badge */}
            {project.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        ⭐ Featured
                    </div>
                </div>
            )}

            {/* Status indicator */}
            <div className="absolute top-4 right-4 z-10">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)} backdrop-blur-sm`}>
                    <span className="mr-1">{getStatusIcon(project.status)}</span>
                    {project.status.replace('-', ' ').toUpperCase()}
                </div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className={`p-3 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                            {getCategoryIcon(project.category)}
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-primary-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                {project.title}
                            </h3>
                            <span className="text-sm text-gray-500 capitalize font-medium">{project.category}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="flex-1 mb-6">
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                        {project.description}
                    </p>
                </div>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider">
                            Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {project.highlights.map((highlight, highlightIndex) => (
                                <div
                                    key={highlightIndex}
                                    className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600"
                                >
                                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full`}></div>
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">
                        Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="group/tech relative px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-md"
                                style={{ animationDelay: `${techIndex * 50}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(project.category)} opacity-0 group-hover/tech:opacity-20 rounded-xl transition-opacity duration-300`}></div>
                                <span className="relative z-10">{tech}</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 sm:flex-none"
                    >
                        <FaGithub className="w-4 h-4 group-hover/btn:animate-spin" />
                        <span>View Code</span>
                    </a>

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/btn flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r ${getCategoryColor(project.category)} text-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex-1 sm:flex-none`}
                        >
                            <FaExternalLinkAlt className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function ProjectsSection() {
    const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack' | 'devops'>('all')
    const sectionRef = useRef<HTMLElement>(null)

    const projects: Project[] = [
        {
            title: "FT_TRANSCENDENCE",
            description: "Engineered an online gaming and chat platform featuring real-time Pong matches, comprehensive user management, and live chat functionality. Built with modern web technologies and real-time communication protocols.",
            technologies: ["TypeScript", "NestJS", "React", "PostgreSQL", "Docker", "Socket.io"],
            github: "https://github.com/emmaOa/ft_transcendence",
            demo: "https://ft-transcendence-demo.vercel.app",
            category: "fullstack",
            featured: true,
            status: "completed",
            highlights: ["Real-time multiplayer", "JWT Authentication", "WebSocket integration", "Responsive design"]
        },
        {
            title: "WEBSERV",
            description: "Built an HTTP server from scratch demonstrating deep understanding of server-side architecture. Implemented robust support for HTTP/1.1 protocol, custom routing, and efficient request handling.",
            technologies: ["C++", "HTTP/1.1", "Socket Programming", "Multi-threading"],
            github: "https://github.com/emmaOa/webserv",
            category: "backend",
            status: "completed",
            highlights: ["Custom HTTP parser", "Multi-threaded architecture", "CGI support", "Performance optimized"]
        },
        {
            title: "INCEPTION",
            description: "Created a comprehensive Docker Compose infrastructure orchestrating NGINX, WordPress + PHP FPM, and MariaDB containers. Demonstrates advanced containerization and DevOps practices.",
            technologies: ["Docker", "Docker Compose", "NGINX", "WordPress", "MariaDB", "PHP-FPM"],
            github: "https://github.com/emmaOa/inception",
            category: "devops",
            featured: true,
            status: "completed",
            highlights: ["Container orchestration", "SSL configuration", "Database optimization", "Security hardening"]
        },
        {
            title: "MINI-SHELL",
            description: "Developed a fully functional shell from scratch with advanced features including environment variable management, command parsing, pipe handling, and built-in commands implementation.",
            technologies: ["C", "Unix System Calls", "Process Management", "Shell Scripting"],
            github: "https://github.com/emmaOa/minishell",
            category: "backend",
            status: "completed",
            highlights: ["Custom parser", "Signal handling", "Built-in commands", "Process management"]
        },
        {
            title: "DevOps Pipeline",
            description: "Automated CI/CD pipeline with comprehensive testing, security scanning, and deployment automation. Implements GitOps principles with infrastructure as code.",
            technologies: ["GitHub Actions", "Terraform", "Kubernetes", "Helm", "ArgoCD", "SonarQube"],
            github: "https://github.com/emmaOa/devops-pipeline",
            category: "devops",
            status: "in-progress",
            highlights: ["GitOps workflow", "Security scanning", "Auto-scaling", "Monitoring"]
        },
        {
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website built with Next.js and TypeScript. Features advanced animations, glassmorphism design, and optimized performance.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
            github: "https://github.com/emmaOa/portfolio",
            demo: "https://imane-portfolio.vercel.app",
            category: "frontend",
            status: "completed",
            highlights: ["Modern animations", "Responsive design", "Performance optimized", "Accessibility focused"]
        }
    ]

    const categories = [
        { id: 'all', label: 'All Projects', icon: <FaCode /> },
        { id: 'fullstack', label: 'Full Stack', icon: <FaLaptopCode /> },
        { id: 'frontend', label: 'Frontend', icon: <FaCode /> },
        { id: 'backend', label: 'Backend', icon: <FaServer /> },
        { id: 'devops', label: 'DevOps', icon: <FaRocket /> }
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter)

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-24 bg-gradient-to-br from-surface-50 via-primary-50/30 to-secondary-50/30 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-secondary-400/10 to-accent-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-600 rounded-full text-sm font-medium mb-6 shadow-lg">
                        <FaCode className="w-4 h-4 mr-2 animate-pulse" />
                        Portfolio Showcase
                        <div className="ml-2 w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary-800 to-secondary-800 bg-clip-text text-transparent mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects showcasing my expertise in full-stack development,
                        backend engineering, and DevOps practices. Each project demonstrates clean code,
                        modern architecture, and best practices.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary-600">6+</div>
                            <div className="text-sm text-gray-500">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-secondary-600">4</div>
                            <div className="text-sm text-gray-500">Categories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-accent-600">20+</div>
                            <div className="text-sm text-gray-500">Technologies</div>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    {categories.map((category, index) => {
                        const count = category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length
                        return (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id as any)}
                                className={`group flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 border ${filter === category.id
                                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-xl border-transparent'
                                    : 'bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white hover:shadow-lg hover:border-primary-200'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className={`transition-colors ${filter === category.id ? 'text-white' : 'text-primary-600'}`}>
                                    {category.icon}
                                </span>
                                <span>{category.label}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${filter === category.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-primary-100 text-primary-600'
                                    }`}>
                                    {count}
                                </span>
                                {filter === category.id && (
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${filter}`}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="card-glass rounded-3xl p-8 max-w-2xl mx-auto border border-white/20 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-50"></div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Ready to Build Something Amazing?
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                I&apos;m always excited to take on new challenges and collaborate on innovative projects.
                                Let&apos;s turn your ideas into reality!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact')
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                                >
                                    <span>Let&apos;s Connect</span>
                                    <FaExternalLinkAlt className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a
                                    href="https://github.com/emmaOa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-primary-400 hover:text-primary-600 transition-all duration-300 hover:scale-105 group"
                                >
                                    <FaGithub className="w-4 h-4 mr-2 group-hover:animate-spin" />
                                    <span>View GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
