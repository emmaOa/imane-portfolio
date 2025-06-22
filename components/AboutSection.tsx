'use client'

import { useState, useEffect, useRef } from 'react'
import {
    FaCode,
    FaCloud,
    FaRocket,
    FaUsers,
    FaGraduationCap,
    FaBriefcase,
    FaAward,
    FaHeart,
    FaDownload,
    FaArrowRight,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaStar,
    FaFire,
    FaLightbulb,
    FaGamepad,
    FaCamera,
    FaPlane,
    FaMusic,
    FaBook,
    FaDatabase,
    FaLayerGroup
} from 'react-icons/fa'
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiDocker,
    SiKubernetes,
    SiAmazon,
    SiGit,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiTerraform,
    SiJenkins,
    SiGrafana,
    SiPrometheus
} from 'react-icons/si'

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState('overview')
    const [isVisible, setIsVisible] = useState(false)
    const [animateElements, setAnimateElements] = useState(false)
    const [skillBarsAnimated, setSkillBarsAnimated] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    setTimeout(() => setAnimateElements(true), 200)
                    setTimeout(() => setSkillBarsAnimated(true), 800)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const tabs = [
        { 
            id: 'overview', 
            label: 'Overview', 
            icon: <FaUsers />, 
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50'
        },
        { 
            id: 'skills', 
            label: 'Skills', 
            icon: <FaCode />, 
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50'
        },
        { 
            id: 'experience', 
            label: 'Journey', 
            icon: <FaBriefcase />, 
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50'
        },
        { 
            id: 'interests', 
            label: 'Interests', 
            icon: <FaHeart />, 
            color: 'from-red-500 to-rose-500',
            bgColor: 'bg-red-50'
        }
    ]

    const coreCompetencies = [
        {
            name: 'Full-Stack Development',
            icon: <FaCode />,
            color: 'text-blue-600',
            description: 'End-to-end web application development',
            level: 92
        },
        {
            name: 'DevOps & Cloud',
            icon: <FaCloud />,
            color: 'text-purple-600',
            description: 'Infrastructure automation and deployment',
            level: 88
        },
        {
            name: 'System Architecture',
            icon: <FaRocket />,
            color: 'text-green-600',
            description: 'Scalable system design and optimization',
            level: 85
        },
        {
            name: 'Database Design',
            icon: <FaDatabase />,
            color: 'text-indigo-600',
            description: 'Data modeling and performance tuning',
            level: 82
        },
        {
            name: 'API Development',
            icon: <FaLayerGroup />,
            color: 'text-orange-600',
            description: 'RESTful and GraphQL API design',
            level: 90
        },
        {
            name: 'Team Leadership',
            icon: <FaUsers />,
            color: 'text-red-600',
            description: 'Technical mentoring and project management',
            level: 80
        }
    ]

    const achievements = [
        {
            icon: <FaAward />,
            title: '5+ Years Experience',
            description: 'Full-stack development and DevOps expertise',
            metric: '5+',
            label: 'Years',
            color: 'from-blue-500 to-blue-600',
            count: 5
        },
        {
            icon: <FaRocket />,
            title: '50+ Projects',
            description: 'Successfully delivered applications and infrastructure',
            metric: '50+',
            label: 'Projects',
            color: 'from-green-500 to-green-600',
            count: 50
        },
        {
            icon: <FaCloud />,
            title: 'Cloud Architecture',
            description: 'AWS certified solutions architect',
            metric: '99.9%',
            label: 'Uptime',
            color: 'from-orange-500 to-orange-600',
            count: 99.9
        },
        {
            icon: <FaUsers />,
            title: 'Team Leadership',
            description: 'Led cross-functional development teams',
            metric: '15+',
            label: 'Developers',
            color: 'from-purple-500 to-purple-600',
            count: 15
        }
    ]

    const journey = [
        {
            year: '2024',
            role: 'Senior DevOps Engineer',
            company: 'Tech Innovations Corp',
            description: 'Leading cloud infrastructure and CI/CD pipelines',
            type: 'work',
            color: 'from-blue-500 to-blue-600'
        },
        {
            year: '2023',
            role: 'AWS Solutions Architect',
            company: 'Certification Achievement',
            description: 'Earned AWS Solutions Architect Professional certification',
            type: 'achievement',
            color: 'from-orange-500 to-orange-600'
        },
        {
            year: '2022',
            role: 'Full-Stack Developer',
            company: 'Digital Solutions Ltd',
            description: 'Built scalable web applications and microservices',
            type: 'work',
            color: 'from-green-500 to-green-600'
        },
        {
            year: '2021',
            role: 'DevOps Transformation Lead',
            company: 'TechStartup Inc',
            description: 'Implemented complete CI/CD infrastructure reducing deployment time by 80%',
            type: 'achievement',
            color: 'from-purple-500 to-purple-600'
        },
        {
            year: '2020',
            role: 'Software Engineer',
            company: 'StartupTech',
            description: 'Developed core platform features and optimized performance',
            type: 'work',
            color: 'from-cyan-500 to-cyan-600'
        },
        {
            year: '2019',
            role: 'Computer Science Graduate',
            company: 'University of Technology',
            description: 'Bachelor\'s degree with focus on software engineering',
            type: 'education',
            color: 'from-indigo-500 to-indigo-600'
        }
    ]

    const interests = [
        { name: 'Open Source', icon: <FaCode />, color: 'text-blue-600' },
        { name: 'Cloud Computing', icon: <FaCloud />, color: 'text-sky-600' },
        { name: 'AI & Machine Learning', icon: <FaLightbulb />, color: 'text-yellow-600' },
        { name: 'Technical Writing', icon: <FaBook />, color: 'text-green-600' },
        { name: 'Gaming', icon: <FaGamepad />, color: 'text-purple-600' },
        { name: 'Photography', icon: <FaCamera />, color: 'text-pink-600' },
        { name: 'Travel', icon: <FaPlane />, color: 'text-indigo-600' },
        { name: 'Music Production', icon: <FaMusic />, color: 'text-red-600' }
    ]

    const personalInfo = [
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Morocco' },
        { icon: <FaCalendarAlt />, label: 'Experience', value: '5+ Years' },
        { icon: <FaEnvelope />, label: 'Email', value: 'imane@example.com' }
    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 leading-relaxed text-lg">
                                I&apos;m a passionate software engineer and DevOps specialist with over 5 years of experience
                                building scalable applications and robust infrastructure. I love solving complex problems
                                and transforming ideas into reality through clean, efficient code.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                My expertise spans full-stack development, cloud architecture, and modern DevOps practices.
                                I believe in continuous learning and staying at the forefront of technology to deliver
                                innovative solutions that make a real impact.
                            </p>
                        </div>

                        {/* Achievement Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`achievement-card relative overflow-hidden p-6 rounded-2xl card-glass border border-white/20 group hover:scale-105 transition-all duration-500 ${animateElements ? 'animate-fade-in-up' : 'opacity-0'
                                        }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    
                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`text-3xl bg-gradient-to-br ${achievement.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                                {achievement.icon}
                                            </div>
                                            <div className="text-right">
                                                <div className={`text-2xl font-bold bg-gradient-to-br ${achievement.color} bg-clip-text text-transparent`}>
                                                    {achievement.metric}
                                                </div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wide">
                                                    {achievement.label}
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                            {achievement.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Personal Info */}
                        <div className="mt-8 p-6 rounded-2xl card-glass border border-white/20">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {personalInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="text-primary-600">{info.icon}</div>
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide">{info.label}</div>
                                            <div className="text-gray-900 font-medium">{info.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )

            case 'skills':
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Competencies</h3>
                            <p className="text-gray-600">Key areas of expertise and professional skills</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {coreCompetencies.map((competency, index) => (
                                <div
                                    key={competency.name}
                                    className={`competency-card p-6 rounded-xl card-glass border border-white/20 group hover:scale-105 transition-all duration-300 ${animateElements ? 'animate-fade-in-up' : 'opacity-0'
                                        }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className={`text-3xl ${competency.color} group-hover:scale-110 transition-transform duration-300`}>
                                            {competency.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                                                {competency.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm">{competency.description}</p>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-600">{competency.level}%</span>
                                    </div>
                                    
                                    {/* Animated Progress Bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div 
                                            className={`h-full bg-gradient-to-r ${competency.color?.includes('blue') ? 'from-blue-400 to-blue-600' :
                                                competency.color?.includes('purple') ? 'from-purple-400 to-purple-600' :
                                                competency.color?.includes('green') ? 'from-green-400 to-green-600' :
                                                competency.color?.includes('indigo') ? 'from-indigo-400 to-indigo-600' :
                                                competency.color?.includes('orange') ? 'from-orange-400 to-orange-600' :
                                                competency.color?.includes('red') ? 'from-red-400 to-red-600' :
                                                'from-gray-400 to-gray-600'
                                                } rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: skillBarsAnimated ? `${competency.level}%` : '0%',
                                                transitionDelay: `${index * 100}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-2xl card-glass border border-white/20">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Technical Approach</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                        ⚡
                                    </div>
                                    <h5 className="font-medium text-gray-900 mb-2">Performance First</h5>
                                    <p className="text-gray-600 text-sm">Optimized code and efficient architectures</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                        🔒
                                    </div>
                                    <h5 className="font-medium text-gray-900 mb-2">Security Focused</h5>
                                    <p className="text-gray-600 text-sm">Best practices and secure development</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                        📱
                                    </div>
                                    <h5 className="font-medium text-gray-900 mb-2">Mobile First</h5>
                                    <p className="text-gray-600 text-sm">Responsive and accessible design</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-600 mb-6">
                                Want to see the complete technology stack I work with?
                            </p>
                            <button className="btn-secondary group">
                                <FaDownload className="mr-2 group-hover:animate-bounce" />
                                View Full Tech Stack
                            </button>
                        </div>
                    </div>
                )

            case 'experience':
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
                            <p className="text-gray-600">My career path and key milestones</p>
                        </div>

                        <div className="relative">
                            {/* Enhanced Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full"></div>

                            <div className="space-y-8">
                                {journey.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex items-start space-x-6 ${animateElements ? 'animate-fade-in-up' : 'opacity-0'
                                            }`}
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        {/* Enhanced Timeline dot */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full ring-4 ring-white shadow-lg flex items-center justify-center`}>
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            {item.type === 'achievement' && (
                                                <div className="absolute -top-1 -right-1">
                                                    <FaStar className="text-yellow-500 text-sm" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Enhanced Content */}
                                        <div className="flex-1 card-glass p-6 rounded-2xl border border-white/20 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                                            {/* Background gradient on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                            
                                            <div className="relative">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent px-3 py-1 rounded-full border border-current border-opacity-20`}>
                                                        {item.year}
                                                    </span>
                                                    <div className="flex items-center space-x-2">
                                                        {item.type === 'work' && <FaBriefcase className="text-blue-500 text-sm" />}
                                                        {item.type === 'achievement' && <FaAward className="text-yellow-500 text-sm" />}
                                                        {item.type === 'education' && <FaGraduationCap className="text-green-500 text-sm" />}
                                                    </div>
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                                                    {item.role}
                                                </h4>
                                                <p className={`font-medium mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.company}</p>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )

            case 'interests':
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Beyond Code</h3>
                            <p className="text-gray-600">What drives my passion and creativity</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {interests.map((interest, index) => (
                                <div
                                    key={index}
                                    className={`interest-card p-6 rounded-xl card-glass border border-white/20 text-center group hover:scale-105 transition-all duration-300 ${animateElements ? 'animate-fade-in-up' : 'opacity-0'
                                        }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`text-3xl mb-3 ${interest.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {interest.icon}
                                    </div>
                                    <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300 text-sm">
                                        {interest.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center prose prose-lg max-w-none">
                            <div className="p-8 rounded-2xl card-glass border border-white/20">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    When I&apos;m not coding, you&apos;ll find me contributing to open source projects, exploring new technologies,
                                    or sharing knowledge through technical articles. I believe in giving back to the community that has
                                    helped shape my career.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                                        🚀 Always Learning
                                    </span>
                                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                        🌍 Global Mindset
                                    </span>
                                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                                        💡 Innovation Driven
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About{' '}
                        <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Passionate software engineer crafting digital experiences with modern technologies
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Enhanced Profile Card */}
                    <div className={`lg:col-span-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <div className="card-glass rounded-3xl p-8 border border-white/20 sticky top-24 relative overflow-hidden">
                            {/* Background decorations */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-400/10 to-primary-400/10 rounded-full blur-xl"></div>
                            
                            <div className="text-center relative z-10">
                                <div className="relative inline-block mb-6">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-1 shadow-2xl">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                                                <span className="text-4xl font-bold bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-transparent">IO</span>
                                                {/* Subtle animation overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Status indicator */}
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Imane Ouazzani Chahdi</h3>
                                <p className="text-primary-600 font-medium mb-2">Software Engineer & DevOps</p>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Building the future, one line of code at a time
                                </p>

                                {/* Social Links */}
                                <div className="flex justify-center space-x-3 mb-6">
                                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaLinkedin className="text-sm" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaGithub className="text-sm" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaEnvelope className="text-sm" />
                                    </button>
                                </div>

                                <button className="btn-primary w-full group">
                                    <span>Let&apos;s Connect</span>
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className={`lg:col-span-3 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        {/* Enhanced Tab Navigation */}
                        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${activeTab === tab.id
                                        ? 'bg-white text-primary-600 shadow-lg scale-105'
                                        : 'text-gray-600 hover:text-primary-600 hover:bg-white/50'
                                        }`}
                                >
                                    {activeTab === tab.id && (
                                        <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-5 rounded-xl`}></div>
                                    )}
                                    <span className={`text-lg relative z-10 ${activeTab === tab.id ? `bg-gradient-to-r ${tab.color} bg-clip-text text-transparent` : ''}`}>
                                        {tab.icon}
                                    </span>
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Enhanced Tab Content */}
                        <div className="min-h-[600px] relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm"></div>
                            <div className="relative z-10 p-6">
                                {renderTabContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
