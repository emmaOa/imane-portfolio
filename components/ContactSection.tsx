'use client'

import { useState, useEffect, useRef } from 'react'
import { 
    FaEnvelope, 
    FaPhone, 
    FaGithub, 
    FaLinkedin, 
    FaRocket,
    FaCode,
    FaUsers,
    FaLightbulb,
    FaArrowRight,
    FaMapMarkerAlt,
    FaClock,
    FaGlobe,
    FaDiscord,
    FaTwitter
} from 'react-icons/fa'

export default function ContactSection() {
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

    const contactMethods = [
        {
            icon: <FaEnvelope />,
            title: "Email Me",
            subtitle: "Let&apos;s discuss your project",
            value: "imaneouazzani.pro@gmail.com",
            href: "mailto:imaneouazzani.pro@gmail.com",
            color: "from-red-500 to-pink-500",
            bgColor: "from-red-50 to-pink-50"
        },
        {
            icon: <FaPhone />,
            title: "Call Me",
            subtitle: "Direct conversation",
            value: "+212 641 323 891",
            href: "tel:+212641323891",
            color: "from-green-500 to-emerald-500",
            bgColor: "from-green-50 to-emerald-50"
        },
        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            subtitle: "Professional network",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/imane-ouazzani-chahdi",
            color: "from-blue-500 to-blue-600",
            bgColor: "from-blue-50 to-blue-100"
        }
    ]

    const collaborationAreas = [
        {
            icon: <FaCode />,
            title: "Full-Stack Development",
            description: "Modern web applications with React, Node.js, and cloud deployment",
            color: "text-blue-600",
            bgGradient: "from-blue-50 to-blue-100",
            iconBg: "from-blue-500 to-blue-600",
            stats: "15+ Projects"
        },
        {
            icon: <FaRocket />,
            title: "DevOps & Infrastructure",
            description: "CI/CD pipelines, containerization, and scalable cloud architecture",
            color: "text-purple-600",
            bgGradient: "from-purple-50 to-purple-100",
            iconBg: "from-purple-500 to-purple-600",
            stats: "99.9% Uptime"
        },
        {
            icon: <FaUsers />,
            title: "Team Collaboration",
            description: "Technical leadership, mentoring, and agile development practices",
            color: "text-green-600",
            bgGradient: "from-green-50 to-green-100",
            iconBg: "from-green-500 to-green-600",
            stats: "10+ Teams"
        },
        {
            icon: <FaLightbulb />,
            title: "Technical Consulting",
            description: "Architecture design, code reviews, and optimization strategies",
            color: "text-orange-600",
            bgGradient: "from-orange-50 to-orange-100",
            iconBg: "from-orange-500 to-orange-600",
            stats: "50+ Solutions"
        }
    ]

    const quickInfo = [
        {
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "Morocco (Remote Available)"
        },
        {
            icon: <FaClock />,
            label: "Response Time",
            value: "Within 24 hours"
        },
        {
            icon: <FaGlobe />,
            label: "Languages",
            value: "English, French, Arabic"
        }
    ]

    const socialLinks = [
        {
            icon: <FaGithub />,
            href: "https://github.com/emmaOa",
            label: "GitHub",
            color: "bg-gray-900 hover:bg-gray-800"
        },
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/imane-ouazzani-chahdi",
            label: "LinkedIn",
            color: "bg-blue-600 hover:bg-blue-700"
        },
        {
            icon: <FaTwitter />,
            href: "#",
            label: "Twitter",
            color: "bg-blue-400 hover:bg-blue-500"
        },
        {
            icon: <FaDiscord />,
            href: "#",
            label: "Discord",
            color: "bg-indigo-600 hover:bg-indigo-700"
        }
    ]

    return (
        <section 
            id="contact" 
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 relative overflow-hidden"
        >
            {/* Enhanced background decorations */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-secondary-400/5 to-accent-400/5 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Simple Section Header */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Contact Me
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Let&apos;s discuss your project and how we can work together
                    </p>
                </div>

                {/* Enhanced Collaboration Areas */}
                <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Can Build Together</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Combining expertise and innovation to deliver exceptional results across multiple domains
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {collaborationAreas.map((area, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${area.bgGradient} p-6 group hover:scale-105 transition-all duration-500 border border-white/40 shadow-lg hover:shadow-2xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${300 + index * 100}ms` }}
                            >
                                {/* Background pattern */}
                                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] opacity-20"></div>
                                
                                {/* Floating elements */}
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 animate-pulse"></div>
                                <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                                
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${area.iconBg} rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                                        {area.icon}
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                            {area.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            {area.description}
                                        </p>
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full bg-white/60 text-xs font-semibold ${area.color}`}>
                                            ✨ {area.stats}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Enhanced Contact Methods */}
                    <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h3>
                            <p className="text-gray-600">Choose your preferred way to connect and start the conversation</p>
                        </div>
                        
                        <div className="space-y-4 mb-8">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.href}
                                    className="block group"
                                    target={method.href.startsWith('http') ? '_blank' : undefined}
                                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <div className={`relative overflow-hidden p-6 rounded-2xl bg-gradient-to-r ${method.bgColor} border border-white/60 group-hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl`}>
                                        {/* Animated background */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                        
                                        {/* Floating particles */}
                                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/40 animate-ping"></div>
                                        <div className="absolute bottom-4 right-8 w-1 h-1 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        
                                        <div className="relative flex items-center">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                                                {method.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary-600 transition-colors duration-300">
                                                    {method.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-2">{method.subtitle}</p>
                                                <p className={`font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                                                    {method.value}
                                                </p>
                                            </div>
                                            <div className="text-gray-400 group-hover:text-primary-600 transition-all duration-300">
                                                <FaArrowRight className="transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Enhanced Quick Info */}
                        <div className="relative overflow-hidden p-6 rounded-2xl card-glass border border-white/20 mb-8 group hover:scale-[1.02] transition-all duration-300">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-xl"></div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">
                                    ℹ️
                                </div>
                                Quick Info
                            </h4>
                            <div className="space-y-4">
                                {quickInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200">
                                        <div className="text-primary-600 text-lg">{info.icon}</div>
                                        <div className="flex-1">
                                            <span className="text-gray-500 text-sm block">{info.label}</span>
                                            <span className="text-gray-900 font-semibold">{info.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Social Links */}
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">
                                    🌐
                                </div>
                                Connect on Social
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`relative group w-14 h-14 ${social.color} text-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-rotate-6 overflow-hidden`}
                                        aria-label={social.label}
                                    >
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10">
                                            {social.icon}
                                        </div>
                                        {/* Hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Call to Action Card */}
                    <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                        <div className="relative overflow-hidden card-glass rounded-3xl p-8 border border-white/20 h-full flex flex-col justify-center group hover:scale-[1.02] transition-all duration-500">
                            {/* Enhanced background decorations */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                            
                            {/* Floating particles */}
                            <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-primary-400/30 animate-bounce"></div>
                            <div className="absolute top-16 right-16 w-2 h-2 rounded-full bg-secondary-400/40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-12 right-12 w-4 h-4 rounded-full bg-accent-400/30 animate-bounce" style={{ animationDelay: '1s' }}></div>
                            
                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <div className="relative inline-block mb-8">
                                        <div className="w-28 h-28 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <FaRocket />
                                        </div>
                                        {/* Enhanced pulse rings */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-ping opacity-20"></div>
                                        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 animate-ping opacity-15" style={{ animationDelay: '0.5s' }}></div>
                                    </div>
                                    <h3 className="text-4xl font-bold text-gray-900 mb-6">
                                        Let&apos;s{' '}
                                        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                            Collaborate
                                        </span>
                                    </h3>
                                    <div className="max-w-md mx-auto mb-8">
                                        <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                            Ready to work together on your next project? Let&apos;s discuss how we can turn your ideas into exceptional digital solutions.
                                        </p>
                                        <p className="text-primary-600 font-semibold">
                                            I'm excited to hear about your project! �
                                        </p>
                                    </div>
                                    
                                    {/* Feature highlights */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"></div>
                                            <span>Fast Response</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                            <span>Expert Guidance</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                            <span>Quality Delivery</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
                                            <span>Long-term Support</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <a
                                        href="mailto:imaneouazzani.pro@gmail.com?subject=🚀 Project Collaboration Opportunity&body=Hi Imane,%0D%0A%0D%0AI'm excited to explore a collaboration opportunity with you! Here are the project details:%0D%0A%0D%0A📋 Project Type: [Web App / Mobile App / DevOps / Consulting / Other]%0D%0A⏰ Timeline: [Urgent / 1-3 months / 3-6 months / Flexible]%0D%0A💰 Budget Range: [Please specify]%0D%0A🎯 Main Goals: [What do you want to achieve?]%0D%0A%0D%0A📝 Project Description:%0D%0A[Please provide details about your project, target audience, key features, technical requirements, etc.]%0D%0A%0D%0A🔧 Technical Preferences:%0D%0A- Frontend: [React, Vue, Angular, etc.]%0D%0A- Backend: [Node.js, Python, etc.]%0D%0A- Database: [PostgreSQL, MongoDB, etc.]%0D%0A- Hosting: [AWS, Google Cloud, etc.]%0D%0A%0D%0A💬 Additional Notes:%0D%0A[Any specific requirements, challenges, or questions?]%0D%0A%0D%0AThank you for your time! Looking forward to creating something amazing together.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]%0D%0A[Your Contact Information]"
                                        className="btn-primary w-full group justify-center relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                                        <span>Send Message</span>
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                    
                                    <a
                                        href="https://www.linkedin.com/in/imane-ouazzani-chahdi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary w-full group justify-center relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        <FaLinkedin className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                                        <span>Connect on LinkedIn</span>
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </div>

                                {/* Enhanced tip section */}
                                <div className="relative overflow-hidden p-6 bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 rounded-2xl border-2 border-primary-100">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0 shadow-lg">
                                            💡
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-primary-800 mb-2">Get a Faster Response!</h5>
                                            <div className="space-y-2 text-sm text-primary-700">
                                                <p className="flex items-center space-x-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                                    <span>Mention your project type and timeline</span>
                                                </p>
                                                <p className="flex items-center space-x-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-500"></span>
                                                    <span>Include your budget range if possible</span>
                                                </p>
                                                <p className="flex items-center space-x-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                                                    <span>Share any specific technical requirements</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Availability indicator */}
                                <div className="mt-6 flex items-center justify-center space-x-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="relative">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-50"></div>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">Available for new projects</span>
                                    </div>
                                    <div className="w-px h-4 bg-gray-300"></div>
                                    <span className="text-sm text-gray-600">Response within 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
