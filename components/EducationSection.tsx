'use client'

import { FaGraduationCap, FaUsers, FaTrophy, FaProjectDiagram, FaUserGraduate, FaCode, FaLightbulb } from 'react-icons/fa'

export default function EducationSection() {
    const features = [
        {
            icon: <FaUsers className="text-2xl" />,
            title: "Peer-to-Peer Learning",
            description: "Emphasis on collaborative learning and problem-solving among students.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaTrophy className="text-2xl" />,
            title: "Coding Challenges",
            description: "Students engage in hands-on coding challenges, projects, and real-world simulations.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <FaProjectDiagram className="text-2xl" />,
            title: "Project-Based Curriculum",
            description: "Focus on practical application of coding skills through projects rather than traditional lectures.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <FaUserGraduate className="text-2xl" />,
            title: "Self-Directed Learning",
            description: "Absence of traditional teachers; students rely on self-directed learning and collaboration.",
            color: "from-purple-500 to-pink-500"
        }
    ]

    return (
        <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 animate-in-up">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-6">
                        Education
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Innovative learning experience at one of the world's most unique coding schools
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="card-glass rounded-3xl p-12 text-center animate-in-up relative overflow-hidden" style={{ animationDelay: '200ms' }}>
                        {/* School header */}
                        <div className="relative z-10">
                            <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 relative group">
                                <FaGraduationCap className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            </div>

                            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent mb-3">
                                1337 Coding School
                            </h3>
                            <p className="text-gray-600 text-lg mb-12">
                                A revolutionary approach to software engineering education
                            </p>
                        </div>

                        {/* Features grid */}
                        <div className="grid md:grid-cols-2 gap-8 text-left relative z-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-500 hover:scale-105 animate-in-up"
                                    style={{ animationDelay: `${400 + index * 100}ms` }}
                                >
                                    <div className="flex items-start">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                            <div className="text-white">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-700 transition-colors">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional info */}
                        <div className="mt-12 pt-8 border-t border-gray-200/50 relative z-10">
                            <div className="flex items-center justify-center space-x-8 text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <FaCode className="text-indigo-500" />
                                    <span className="font-medium">Project-Based</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaLightbulb className="text-yellow-500" />
                                    <span className="font-medium">Innovation-Driven</span>
                                </div>
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
