'use client'

import { useState, useEffect, useRef } from 'react'
import {
    FaCode,
    FaServer,
    FaGitAlt,
    FaPython,
    FaReact,
    FaDocker,
    FaDatabase,
    FaTerminal,
    FaEnvelope,
    FaRobot,
    FaLayerGroup,
    FaCloud,
    FaTools,
    FaMobile,
    FaChartBar,
    FaShieldAlt,
    FaFire,
    FaStar,
    FaTrophy,
    FaRocket
} from 'react-icons/fa'
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiAngular,
    SiNodedotjs,
    SiNestjs,
    SiExpress,
    SiFastapi,
    SiDjango,
    SiPython,
    SiCplusplus,
    SiC,
    SiRust,
    SiGo,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiMysql,
    SiSqlite,
    SiFirebase,
    SiDocker,
    SiKubernetes,
    SiAmazon,
    SiGooglecloud,
    SiTerraform,
    SiJenkins,
    SiGithubactions,
    SiGit,
    SiGithub,
    SiGitlab,
    SiPostman,
    SiInsomnia,
    SiFigma,
    SiSlack,
    SiNotion,
    SiGrafana,
    SiPrometheus,
    SiElasticsearch,
    SiNginx,
    SiLinux,
    SiUbuntu
} from 'react-icons/si'

interface Skill {
    name: string
    icon: JSX.Element
    color: string
    level: number
    category: string
    featured?: boolean
}

interface SkillCategory {
    name: string
    icon: JSX.Element
    color: string
    gradient: string
    description: string
}

interface SkillCardProps {
    skill: Skill
    index: number
    isVisible: boolean
}

const SkillCard = ({ skill, index, isVisible }: SkillCardProps) => {
    const [showLevel, setShowLevel] = useState(false)

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => setShowLevel(true), index * 100)
        }
    }, [isVisible, index])

    return (
        <div
            className={`skill-card group relative overflow-hidden rounded-2xl card-glass border border-white/20 p-6 hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                } ${skill.featured ? 'ring-2 ring-primary-400/30' : ''}`}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {/* Background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color?.includes('yellow') ? 'from-yellow-400/5 to-yellow-600/5' :
                skill.color?.includes('blue') ? 'from-blue-400/5 to-blue-600/5' :
                skill.color?.includes('green') ? 'from-green-400/5 to-green-600/5' :
                skill.color?.includes('red') ? 'from-red-400/5 to-red-600/5' :
                skill.color?.includes('purple') ? 'from-purple-400/5 to-purple-600/5' :
                'from-gray-400/5 to-gray-600/5'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Featured badge */}
            {skill.featured && (
                <div className="absolute top-3 right-3">
                    <FaStar className="text-yellow-500 text-sm animate-pulse" />
                </div>
            )}

            <div className="relative z-10">
                {/* Icon */}
                <div className={`text-4xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                </div>

                {/* Name */}
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {skill.name}
                </h3>

                {/* Level indicator */}
                <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Proficiency</span>
                        <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                            className={`h-full bg-gradient-to-r ${skill.color?.includes('yellow') ? 'from-yellow-400 to-yellow-600' :
                                skill.color?.includes('blue') ? 'from-blue-400 to-blue-600' :
                                skill.color?.includes('green') ? 'from-green-400 to-green-600' :
                                skill.color?.includes('red') ? 'from-red-400 to-red-600' :
                                skill.color?.includes('purple') ? 'from-purple-400 to-purple-600' :
                                skill.color?.includes('orange') ? 'from-orange-400 to-orange-600' :
                                skill.color?.includes('cyan') ? 'from-cyan-400 to-cyan-600' :
                                'from-gray-400 to-gray-600'
                                } rounded-full transition-all duration-1000 ease-out`}
                            style={{
                                width: showLevel ? `${skill.level}%` : '0%'
                            }}
                        ></div>
                    </div>
                </div>

                {/* Category badge */}
                <div className="flex justify-between items-center">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {skill.category}
                    </span>
                    {skill.level >= 90 && (
                        <FaTrophy className="text-yellow-500 text-sm" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const categories: SkillCategory[] = [
        {
            name: 'All',
            icon: <FaRocket />,
            color: 'text-gray-600',
            gradient: 'from-gray-500 to-gray-700',
            description: 'Complete technology stack'
        },
        {
            name: 'Frontend',
            icon: <FaMobile />,
            color: 'text-blue-600',
            gradient: 'from-blue-500 to-blue-700',
            description: 'User interface technologies'
        },
        {
            name: 'Backend',
            icon: <FaServer />,
            color: 'text-green-600',
            gradient: 'from-green-500 to-green-700',
            description: 'Server-side development'
        },
        {
            name: 'DevOps',
            icon: <FaCloud />,
            color: 'text-purple-600',
            gradient: 'from-purple-500 to-purple-700',
            description: 'Infrastructure & deployment'
        },
        {
            name: 'Database',
            icon: <FaDatabase />,
            color: 'text-indigo-600',
            gradient: 'from-indigo-500 to-indigo-700',
            description: 'Data storage solutions'
        },
        {
            name: 'Tools',
            icon: <FaTools />,
            color: 'text-orange-600',
            gradient: 'from-orange-500 to-orange-700',
            description: 'Development tools'
        }
    ]

    const skills: Skill[] = [
        // Frontend
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500', level: 95, category: 'Frontend', featured: true },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600', level: 92, category: 'Frontend', featured: true },
        { name: 'React', icon: <SiReact />, color: 'text-cyan-500', level: 90, category: 'Frontend', featured: true },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-900', level: 88, category: 'Frontend' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500', level: 75, category: 'Frontend' },
        { name: 'Angular', icon: <SiAngular />, color: 'text-red-600', level: 70, category: 'Frontend' },

        // Backend
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600', level: 90, category: 'Backend', featured: true },
        { name: 'NestJS', icon: <SiNestjs />, color: 'text-red-600', level: 85, category: 'Backend' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-700', level: 88, category: 'Backend' },
        { name: 'Python', icon: <SiPython />, color: 'text-blue-500', level: 85, category: 'Backend', featured: true },
        { name: 'FastAPI', icon: <SiFastapi />, color: 'text-green-500', level: 80, category: 'Backend' },
        { name: 'Django', icon: <SiDjango />, color: 'text-green-700', level: 75, category: 'Backend' },

        // Languages
        { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-700', level: 80, category: 'Backend' },
        { name: 'C', icon: <SiC />, color: 'text-blue-600', level: 78, category: 'Backend' },
        { name: 'Rust', icon: <SiRust />, color: 'text-orange-600', level: 65, category: 'Backend' },
        { name: 'Go', icon: <SiGo />, color: 'text-cyan-600', level: 70, category: 'Backend' },

        // Database
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700', level: 88, category: 'Database', featured: true },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', level: 85, category: 'Database' },
        { name: 'Redis', icon: <SiRedis />, color: 'text-red-600', level: 80, category: 'Database' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600', level: 82, category: 'Database' },
        { name: 'SQLite', icon: <SiSqlite />, color: 'text-blue-500', level: 85, category: 'Database' },
        { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500', level: 78, category: 'Database' },

        // DevOps
        { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500', level: 92, category: 'DevOps', featured: true },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-600', level: 85, category: 'DevOps' },
        { name: 'AWS', icon: <SiAmazon />, color: 'text-orange-500', level: 88, category: 'DevOps', featured: true },
        { name: 'Google Cloud', icon: <SiGooglecloud />, color: 'text-blue-500', level: 80, category: 'DevOps' },
        { name: 'Terraform', icon: <SiTerraform />, color: 'text-purple-600', level: 82, category: 'DevOps' },
        { name: 'Jenkins', icon: <SiJenkins />, color: 'text-red-600', level: 78, category: 'DevOps' },
        { name: 'GitHub Actions', icon: <SiGithubactions />, color: 'text-gray-900', level: 85, category: 'DevOps' },
        { name: 'Nginx', icon: <SiNginx />, color: 'text-green-600', level: 80, category: 'DevOps' },
        { name: 'Linux', icon: <SiLinux />, color: 'text-yellow-600', level: 90, category: 'DevOps', featured: true },

        // Tools
        { name: 'Git', icon: <SiGit />, color: 'text-red-500', level: 95, category: 'Tools', featured: true },
        { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-900', level: 92, category: 'Tools' },
        { name: 'GitLab', icon: <SiGitlab />, color: 'text-orange-600', level: 85, category: 'Tools' },
        { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500', level: 90, category: 'Tools' },
        { name: 'Insomnia', icon: <SiInsomnia />, color: 'text-purple-600', level: 85, category: 'Tools' },
        { name: 'Figma', icon: <SiFigma />, color: 'text-purple-500', level: 75, category: 'Tools' },
        { name: 'Slack', icon: <SiSlack />, color: 'text-purple-600', level: 88, category: 'Tools' },
        { name: 'Notion', icon: <SiNotion />, color: 'text-gray-900', level: 85, category: 'Tools' },
        { name: 'Grafana', icon: <SiGrafana />, color: 'text-orange-600', level: 78, category: 'Tools' },
        { name: 'Prometheus', icon: <SiPrometheus />, color: 'text-orange-500', level: 75, category: 'Tools' }
    ]

    const filteredSkills = activeCategory === 'All' 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory)

    const featuredSkills = skills.filter(skill => skill.featured)
    const skillStats = {
        total: skills.length,
        avgLevel: Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length),
        expert: skills.filter(skill => skill.level >= 90).length,
        categories: categories.length - 1
    }

    return (
        <section 
            id="skills" 
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 relative overflow-hidden"
        >
            {/* Enhanced background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-secondary-400/5 to-accent-400/5 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Technical{' '}
                        <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive toolkit of technologies and frameworks I use to build modern applications
                    </p>
                </div>

                {/* Skills Statistics */}
                <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>

                </div>

                

                {/* Category Filter */}
                <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                    <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.name
                                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                                    : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-white/40'
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span>{category.name}</span>
                                {activeCategory === category.name && (
                                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                                        {category.name === 'All' ? skills.length : filteredSkills.length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
                    {filteredSkills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
                    <div className="card-glass p-8 rounded-3xl border border-white/20 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Build Something Amazing?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Let's collaborate and bring your ideas to life using these cutting-edge technologies
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="btn-primary group">
                                <span>Start a Project</span>
                                <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="btn-secondary group">
                                <span>View Portfolio</span>
                                <FaChartBar className="ml-2 group-hover:scale-110 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
