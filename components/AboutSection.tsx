'use client'

import { useState, useRef } from 'react'
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
    FaLightbulb,
    FaGamepad,
    FaCamera,
    FaPlane,
    FaMusic,
    FaBook,
    FaDatabase,
    FaLayerGroup
} from 'react-icons/fa'

export default function AboutSection() {
    // Helper function to get consistent hero-style gradient classes
    const getHeroGradientClass = (variant: 'background' | 'text' | 'subtle' = 'background', customClasses: string = '') => {
        const base = customClasses ? `${customClasses} ` : '';
        
        switch (variant) {
            case 'background':
                return `${base}bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900`;
            case 'text':
                return `${base}bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent`;
            case 'subtle':
                return `${base}bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20`;
            default:
                return `${base}bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900`;
        }
    };

    const [activeTab, setActiveTab] = useState('overview')
    const sectionRef = useRef<HTMLElement>(null)

    const tabs = [
        {
            id: 'overview',
            label: 'Overview',
            icon: <FaUsers />
        },
        {
            id: 'skills',
            label: 'Skills',
            icon: <FaCode />
        },
        {
            id: 'experience',
            label: 'Journey',
            icon: <FaBriefcase />
        },
        {
            id: 'interests',
            label: 'Interests',
            icon: <FaHeart />
        }
    ]

    const coreCompetencies = [
        {
            name: 'Full-Stack Development',
            icon: <FaCode />,
            description: 'End-to-end web application development',
            level: 92
        },
        {
            name: 'DevOps & Cloud',
            icon: <FaCloud />,
            description: 'Infrastructure automation and deployment',
            level: 88
        },
        {
            name: 'System Architecture',
            icon: <FaRocket />,
            description: 'Scalable system design and optimization',
            level: 85
        },
        {
            name: 'Database Design',
            icon: <FaDatabase />,
            description: 'Data modeling and performance tuning',
            level: 82
        },
        {
            name: 'API Development',
            icon: <FaLayerGroup />,
            description: 'RESTful and GraphQL API design',
            level: 90
        },
        {
            name: 'Team Leadership',
            icon: <FaUsers />,
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
            label: 'Years'
        },
        {
            icon: <FaRocket />,
            title: '50+ Projects',
            description: 'Successfully delivered applications and infrastructure',
            metric: '50+',
            label: 'Projects'
        },
        {
            icon: <FaCloud />,
            title: 'Cloud Architecture',
            description: 'AWS certified solutions architect',
            metric: '99.9%',
            label: 'Uptime'
        },
        {
            icon: <FaUsers />,
            title: 'Team Leadership',
            description: 'Led cross-functional development teams',
            metric: '15+',
            label: 'Developers'
        }
    ]

    const journey = [
        {
            year: '2024',
            role: 'Senior DevOps Engineer',
            company: 'Tech Innovations Corp',
            description: 'Leading cloud infrastructure and CI/CD pipelines',
            type: 'work'
        },
        {
            year: '2023',
            role: 'AWS Solutions Architect',
            company: 'Certification Achievement',
            description: 'Earned AWS Solutions Architect Professional certification',
            type: 'achievement'
        },
        {
            year: '2022',
            role: 'Full-Stack Developer',
            company: 'Digital Solutions Ltd',
            description: 'Built scalable web applications and microservices',
            type: 'work'
        },
        {
            year: '2021',
            role: 'DevOps Transformation Lead',
            company: 'TechStartup Inc',
            description: 'Implemented complete CI/CD infrastructure reducing deployment time by 80%',
            type: 'achievement'
        },
        {
            year: '2020',
            role: 'Software Engineer',
            company: 'StartupTech',
            description: 'Developed core platform features and optimized performance',
            type: 'work'
        },
        {
            year: '2019',
            role: 'Computer Science Graduate',
            company: 'University of Technology',
            description: 'Bachelor\'s degree with focus on software engineering',
            type: 'education'
        }
    ]

    const interests = [
        { name: 'Open Source', icon: <FaCode /> },
        { name: 'Cloud Computing', icon: <FaCloud /> },
        { name: 'AI & Machine Learning', icon: <FaLightbulb /> },
        { name: 'Technical Writing', icon: <FaBook /> },
        { name: 'Gaming', icon: <FaGamepad /> },
        { name: 'Photography', icon: <FaCamera /> },
        { name: 'Travel', icon: <FaPlane /> },
        { name: 'Music Production', icon: <FaMusic /> }
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
                            <p className="text-white/90 leading-relaxed text-lg">
                                I&apos;m a passionate software engineer and DevOps specialist with over 5 years of experience
                                building scalable applications and robust infrastructure. I love solving complex problems
                                and transforming ideas into reality through clean, efficient code.
                            </p>
                            <p className="text-white/80 leading-relaxed">
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
                                    className="relative overflow-hidden p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`text-3xl ${getHeroGradientClass('text')} group-hover:scale-110 transition-transform duration-300`}>
                                                {achievement.icon}
                                            </div>
                                            <div className="text-right">
                                                <div className={`text-2xl font-bold ${getHeroGradientClass('text')}`}>
                                                    {achievement.metric}
                                                </div>
                                                <div className="text-xs text-white/60 uppercase tracking-wide">
                                                    {achievement.label}
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                            {achievement.title}
                                        </h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Personal Info */}
                        <div className="mt-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Info</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {personalInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="text-cyan-300">{info.icon}</div>
                                        <div>
                                            <div className="text-xs text-white/60 uppercase tracking-wide">{info.label}</div>
                                            <div className="text-white font-medium">{info.value}</div>
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
                            <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
                            <p className="text-white/80">Key areas of expertise and professional skills</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {coreCompetencies.map((competency, index) => (
                                <div
                                    key={competency.name}
                                    className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className="text-3xl text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                                            {competency.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                                                {competency.name}
                                            </h4>
                                            <p className="text-white/70 text-sm">{competency.description}</p>
                                        </div>
                                        <span className="text-sm font-semibold text-white/80">{competency.level}%</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                                            style={{ width: `${competency.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                            <h4 className="text-lg font-semibold text-white mb-4 text-center">Technical Approach</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                        ⚡
                                    </div>
                                    <h5 className="font-medium text-white mb-2">Performance First</h5>
                                    <p className="text-white/70 text-sm">Optimized code and efficient architectures</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                        🔒
                                    </div>
                                    <h5 className="font-medium text-white mb-2">Security Focused</h5>
                                    <p className="text-white/70 text-sm">Best practices and secure development</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                        📱
                                    </div>
                                    <h5 className="font-medium text-white mb-2">Mobile First</h5>
                                    <p className="text-white/70 text-sm">Responsive and accessible design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'experience':
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
                            <p className="text-white/80">My career path and key milestones</p>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>

                            <div className="space-y-8">
                                {journey.map((item, index) => (
                                    <div key={index} className="relative flex items-start space-x-6">
                                        {/* Timeline dot */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full ring-4 ring-white/20 shadow-lg flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            {item.type === 'achievement' && (
                                                <div className="absolute -top-1 -right-1">
                                                    <FaStar className="text-yellow-400 text-sm" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 group hover:bg-white/15 transition-all duration-300">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`text-sm font-semibold ${getHeroGradientClass('text')} px-3 py-1 rounded-full border border-cyan-300/30`}>
                                                    {item.year}
                                                </span>
                                                <div className="flex items-center space-x-2">
                                                    {item.type === 'work' && <FaBriefcase className="text-blue-400 text-sm" />}
                                                    {item.type === 'achievement' && <FaAward className="text-yellow-400 text-sm" />}
                                                    {item.type === 'education' && <FaGraduationCap className="text-green-400 text-sm" />}
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                                                {item.role}
                                            </h4>
                                            <p className={`font-medium mb-3 ${getHeroGradientClass('text')}`}>{item.company}</p>
                                            <p className="text-white/70">{item.description}</p>
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
                            <h3 className="text-2xl font-bold text-white mb-4">Beyond Code</h3>
                            <p className="text-white/80">What drives my passion and creativity</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {interests.map((interest, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center group hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="text-3xl mb-3 text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                                        {interest.icon}
                                    </div>
                                    <p className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300 text-sm">
                                        {interest.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                                <p className="text-white/80 leading-relaxed mb-6">
                                    When I&apos;m not coding, you&apos;ll find me contributing to open source projects, exploring new technologies,
                                    or sharing knowledge through technical articles. I believe in giving back to the community that has
                                    helped shape my career.
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaLinkedin className="text-sm" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaGithub className="text-sm" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaEnvelope className="text-sm" />
                                    </button>
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
            className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden"
        >
            {/* Background decoration with hero-style elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About{' '}
                        <span className={getHeroGradientClass('text')}>
                            Me
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Passionate software engineer crafting digital experiences with modern technologies
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 sticky top-24 relative overflow-hidden">
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
                                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
                                        👨‍💻
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Imane Ouazzani</h3>
                                <p className={`text-lg ${getHeroGradientClass('text')} mb-4`}>
                                    Software Engineer & DevOps
                                </p>
                                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30 text-green-300 text-sm mb-6">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                    Available for hire
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                                        activeTab === tab.id
                                            ? 'bg-white/20 text-white shadow-lg scale-105'
                                            : 'text-white/70 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {activeTab === tab.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl"></div>
                                    )}
                                    <span className={`text-lg relative z-10 ${activeTab === tab.id ? getHeroGradientClass('text') : ''}`}>
                                        {tab.icon}
                                    </span>
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[600px] relative">
                            <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm"></div>
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
