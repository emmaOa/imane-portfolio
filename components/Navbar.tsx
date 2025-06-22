'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Education', id: 'education' },
        { label: 'Contact', id: 'contact' }
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
            ? 'card-glass border-b border-white/20 shadow-2xl'
            : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div
                        className="cursor-pointer group"
                        onClick={() => scrollToSection('home')}
                    >
                        <div className="relative">
                            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                                Imane Ouazzani
                            </h1>
                            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="nav-link text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 relative group"
                            >
                                {item.label}
                                <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></div>
                            </button>
                        ))}
                    </div>

                    {/* Social Links & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://github.com/imane-ouazzani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon text-gray-600 hover:text-primary-600 p-2 rounded-full hover:bg-primary-50 transition-all duration-300"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/imane-ouazzani-chahdi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon text-gray-600 hover:text-primary-600 p-2 rounded-full hover:bg-primary-50 transition-all duration-300"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:imane.ouazzani@example.com"
                            className="social-icon text-gray-600 hover:text-primary-600 p-2 rounded-full hover:bg-primary-50 transition-all duration-300"
                        >
                            <HiMail size={20} />
                        </a>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary ml-4"
                        >
                            <span>Let&apos;s Talk</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes size={24} className="text-gray-700" />
                        ) : (
                            <FaBars size={24} className="text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-out ${isMobileMenuOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="card-glass mx-4 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="px-6 py-4 space-y-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left py-3 px-4 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200"
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                            <a
                                href="https://github.com/imane-ouazzani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-50 hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-all duration-200"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/imane-ouazzani-chahdi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-50 hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-all duration-200"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="mailto:imane.ouazzani@example.com"
                                className="p-3 rounded-full bg-gray-50 hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-all duration-200"
                            >
                                <HiMail size={20} />
                            </a>
                        </div>

                        {/* Mobile CTA */}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary w-full mt-4"
                        >
                            Let&apos;s Talk
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ top: '64px' }}
                />
            )}
        </nav>
    )
}
