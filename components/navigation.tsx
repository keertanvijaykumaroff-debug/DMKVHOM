'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isAboutMegaMenuOpen, setIsAboutMegaMenuOpen] = useState(false)
  const [isServicesMegaMenuOpen, setIsServicesMegaMenuOpen] = useState(false)
  const [isFaqMegaMenuOpen, setIsFaqMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileFaqOpen, setIsMobileFaqOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About', hasMegaMenu: true },
    { href: '/services', label: 'Services', hasMegaMenu: true },
    { href: '/digital-marketing-faq', label: 'FAQ', hasMegaMenu: true },
    { href: '/contact', label: 'Contact' },
  ]

  const aboutSubLinks = [
    {
      title: 'Our Vision',
      links: [
        { label: 'Our Missions', href: '/about/missions' },
        { label: 'Our Core Values', href: '/about/values' },
      ]
    },
    {
      title: 'Our Legacy',
      links: [
        { label: 'Our Story', href: '/about/story' },
        { label: 'Our Journey', href: '/about/journey' },
      ]
    },
    {
      title: 'People',
      links: [
        { label: 'Founder', href: '/about-keertan-vijaykumar' },
      ]
    },
    {
      title: 'Policies',
      links: [
        { label: 'Terms and Conditions', href: '/terms-conditions' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
        { label: 'Refund Policy', href: '/refund-cancellation' },
      ]
    }
  ]

  const servicesSubLinks = [
    {
      title: 'Growth & Search',
      links: [
        { label: 'SEO', href: '/services/seo' },
        { label: 'Performance Marketing', href: '/services/performance' },
        { label: 'Digital Audits', href: '/services/audits' },
      ]
    },
    {
      title: 'Content & Social',
      links: [
        { label: 'Content Marketing', href: '/services/content' },
        { label: 'Social Media', href: '/services/social' },
        { label: 'Influencer Collaboration', href: '/services/influencers' },
      ]
    },
    {
      title: 'Strategy & Insights',
      links: [
        { label: 'Brand Strategy', href: '/services/strategy' },
        { label: 'Data Analytics', href: '/services/analytics' },
      ]
    },
    {
      title: 'Quick Access',
      links: [
        { label: 'View All Services', href: '/services' },
        { label: 'Book a Consultation', href: '/contact' },
      ]
    }
  ]

  const faqSubLinks = [
    {
      title: 'Common FAQ',
      links: [
        { label: 'General Questions', href: '/digital-marketing-faq#General' },
        { label: 'SEO & Strategy', href: '/digital-marketing-faq#SEO' },
      ]
    },
    {
      title: 'Service Specific',
      links: [
        { label: 'Ads & Performance', href: '/digital-marketing-faq#Ads' },
        { label: 'Content & Social', href: '/digital-marketing-faq#Content' },
      ]
    },
    {
      title: 'Business FAQ',
      links: [
        { label: 'Brand Strategy', href: '/digital-marketing-faq#Strategy' },
        { label: 'Marketing Audits', href: '/digital-marketing-faq#Strategy-Audits' },
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Ask a Question', href: '/contact' },
        { label: 'Search All FAQ', href: '/digital-marketing-faq' },
      ]
    }
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-md border-b border-white/10 h-20 md:h-28 flex items-center shadow-2xl transition-all duration-300"
        onMouseLeave={() => {
          setIsAboutMegaMenuOpen(false)
          setIsServicesMegaMenuOpen(false)
          setIsFaqMegaMenuOpen(false)
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex flex-col items-start transition-transform duration-300 group-hover:scale-[1.02]">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-none">
                  DMKV
                </span>
                <span className="text-[10px] md:text-xs font-sans font-black text-white/40 uppercase tracking-[0.4em] mt-1 ml-0.5 whitespace-nowrap">
                  House of Marketing
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex gap-8 items-center h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const isAbout = item.label === 'About'

              return (
                <div
                  key={item.href}
                  className="h-full flex items-center"
                  onMouseEnter={() => {
                    setIsHovered(item.href)
                    if (isAbout) {
                      setIsAboutMegaMenuOpen(true)
                      setIsServicesMegaMenuOpen(false)
                      setIsFaqMegaMenuOpen(false)
                    } else if (item.label === 'Services') {
                      setIsServicesMegaMenuOpen(true)
                      setIsAboutMegaMenuOpen(false)
                      setIsFaqMegaMenuOpen(false)
                    } else if (item.label === 'FAQ') {
                      setIsFaqMegaMenuOpen(true)
                      setIsAboutMegaMenuOpen(false)
                      setIsServicesMegaMenuOpen(false)
                    } else {
                      setIsAboutMegaMenuOpen(false)
                      setIsServicesMegaMenuOpen(false)
                      setIsFaqMegaMenuOpen(false)
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-200 py-1 flex items-center gap-1 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'
                      }`}
                  >
                    {item.label}
                    {item.hasMegaMenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${(isAbout && isAboutMegaMenuOpen) || (item.label === 'Services' && isServicesMegaMenuOpen) || (item.label === 'FAQ' && isFaqMegaMenuOpen) ? 'rotate-180' : ''}`}
                      />
                    )}
                    {(isActive || isHovered === item.href) && !item.hasMegaMenu && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                      />
                    )}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/explore"
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                onMouseEnter={() => {
                  setIsAboutMegaMenuOpen(false)
                  setIsServicesMegaMenuOpen(false)
                  setIsFaqMegaMenuOpen(false)
                }}
              >
                Explore DMKV
              </Link>
              <Link
                href="/digital-marketing-faq"
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                onMouseEnter={() => {
                  setIsAboutMegaMenuOpen(false)
                  setIsServicesMegaMenuOpen(false)
                  setIsFaqMegaMenuOpen(false)
                }}
              >
                Support
              </Link>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Overlay */}
        <AnimatePresence>
          {isAboutMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 md:top-28 left-0 right-0 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl overflow-hidden z-[55] hidden md:block"
              style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 0%, rgba(0,18,10,0.97) 50%, rgba(0,0,0,0.97) 100%)' }}
              onMouseEnter={() => setIsAboutMegaMenuOpen(true)}
              onMouseLeave={() => setIsAboutMegaMenuOpen(false)}
            >
              {/* Violet radial glow backdrop */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(16,185,129,0.13) 0%, transparent 70%)' }} />
              <div className="container mx-auto px-6 py-12 relative">
                <div className="grid md:grid-cols-4 gap-12">
                  {aboutSubLinks.map((section: any, sIdx: number) => {
                    const sectionColors = ['from-emerald-500 to-green-500', 'from-green-500 to-teal-500', 'from-teal-500 to-emerald-400', 'from-lime-500 to-green-400']
                    const dotColors = ['bg-emerald-400', 'bg-green-400', 'bg-teal-400', 'bg-lime-400']
                    return (
                      <div key={section.title} className="space-y-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${sectionColors[sIdx] || sectionColors[0]}`} />
                          <h3 className="text-xs font-bold uppercase tracking-widest" style={{ background: 'linear-gradient(90deg, rgba(52,211,153,0.95), rgba(52,211,153,0.5))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {section.title}
                          </h3>
                        </div>
                        <ul className="space-y-4">
                          {section.links.map((link: any) => (
                            <li key={`${link.href}-${link.label}`}>
                              <Link
                                href={link.href}
                                className="text-lg font-bold text-white hover:text-emerald-200 flex items-center group relative"
                              >
                                <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-emerald-200">
                                  {link.label}
                                </span>
                                <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-transparent transition-all duration-300" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-emerald-500/10 flex justify-between items-center">
                  <p className="text-sm text-white/30 italic">
                    Transforming brands through excellence.
                  </p>
                  <Link href="/about" className="text-sm font-semibold px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition-all duration-200">
                    Explore About Hub →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {isServicesMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 md:top-28 left-0 right-0 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl overflow-hidden z-[55] hidden md:block"
              style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 0%, rgba(20,12,0,0.97) 50%, rgba(0,0,0,0.97) 100%)' }}
              onMouseEnter={() => setIsServicesMegaMenuOpen(true)}
              onMouseLeave={() => setIsServicesMegaMenuOpen(false)}
            >
              {/* Amber radial glow backdrop */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(245,158,11,0.10) 0%, transparent 70%)' }} />
              <div className="container mx-auto px-6 py-12 relative">
                <div className="grid md:grid-cols-4 gap-12">
                  {servicesSubLinks.map((section: any, sIdx: number) => {
                    const sectionColors = ['from-amber-500 to-yellow-500', 'from-orange-500 to-amber-500', 'from-yellow-500 to-orange-400', 'from-orange-400 to-red-400']
                    return (
                      <div key={section.title} className="space-y-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${sectionColors[sIdx] || sectionColors[0]}`} />
                          <h3 className="text-xs font-bold uppercase tracking-widest" style={{ background: 'linear-gradient(90deg, rgba(251,191,36,0.9), rgba(251,191,36,0.4))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {section.title}
                          </h3>
                        </div>
                        <ul className="space-y-4">
                          {section.links.map((link: any) => (
                            <li key={`${link.href}-${link.label}`}>
                              <Link
                                href={link.href}
                                className="text-lg font-medium text-white/75 hover:text-white flex items-center group relative"
                              >
                                <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-amber-200">
                                  {link.label}
                                </span>
                                <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-amber-400 to-transparent transition-all duration-300" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-amber-500/10 flex justify-between items-center">
                  <p className="text-sm text-white/30 italic">
                    Comprehensive digital solutions for your brand.
                  </p>
                  <Link href="/services" className="text-sm font-semibold px-4 py-2 rounded-full border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 transition-all duration-200">
                    View All Services →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {isFaqMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 md:top-28 left-0 right-0 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl overflow-hidden z-[55] hidden md:block"
              style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 0%, rgba(0,15,20,0.97) 50%, rgba(0,0,0,0.97) 100%)' }}
              onMouseEnter={() => setIsFaqMegaMenuOpen(true)}
              onMouseLeave={() => setIsFaqMegaMenuOpen(false)}
            >
              {/* Cyan radial glow backdrop */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(6,182,212,0.10) 0%, transparent 70%)' }} />
              <div className="container mx-auto px-6 py-12 relative">
                <div className="grid md:grid-cols-4 gap-12">
                  {faqSubLinks.map((section: any, sIdx: number) => {
                    const sectionColors = ['from-cyan-500 to-teal-500', 'from-teal-500 to-emerald-500', 'from-sky-500 to-cyan-500', 'from-emerald-400 to-teal-400']
                    return (
                      <div key={section.title} className="space-y-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${sectionColors[sIdx] || sectionColors[0]}`} />
                          <h3 className="text-xs font-bold uppercase tracking-widest" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.9), rgba(34,211,238,0.4))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {section.title}
                          </h3>
                        </div>
                        <ul className="space-y-4">
                          {section.links.map((link: any) => (
                            <li key={`${link.href}-${link.label}`}>
                              <Link
                                href={link.href}
                                className="text-lg font-medium text-white/75 hover:text-white flex items-center group relative"
                              >
                                <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-cyan-200">
                                  {link.label}
                                </span>
                                <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-300" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-cyan-500/10 flex justify-between items-center">
                  <p className="text-sm text-white/30 italic">
                    Answers to your digital growth questions.
                  </p>
                  <Link href="/digital-marketing-faq" className="text-sm font-semibold px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200">
                    View FAQ Overview →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-black/95 backdrop-blur-2xl z-[80] md:hidden border-l border-white/10 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/5">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/60">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="space-y-6">
                  {navItems.map((item, idx) => {
                    const isAbout = item.label === 'About'
                    const isServices = item.label === 'Services'
                    const isFaq = item.label === 'FAQ'
                    const isActive = pathname === item.href

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between group">
                          <Link
                            href={item.href}
                            onClick={() => !item.hasMegaMenu && setIsMobileMenuOpen(false)}
                            className={`text-3xl font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}
                          >
                            {item.label}
                          </Link>
                          {item.hasMegaMenu && (
                            <button
                              onClick={() => {
                                if (isAbout) setIsMobileAboutOpen(!isMobileAboutOpen)
                                if (isServices) setIsMobileServicesOpen(!isMobileServicesOpen)
                                if (isFaq) setIsMobileFaqOpen(!isMobileFaqOpen)
                              }}
                              className="p-3 bg-white/5 rounded-2xl border border-white/5"
                            >
                              <ChevronDown className={`transition-transform duration-500 ${(isAbout && isMobileAboutOpen) || (isServices && isMobileServicesOpen) || (isFaq && isMobileFaqOpen) ? 'rotate-180' : ''}`} size={18} />
                            </button>
                          )}
                        </div>

                        {/* Submenus with enhanced glass effect */}
                        {isAbout && isMobileAboutOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 pr-2 space-y-6 pt-2 border-l border-white/10 ml-2"
                          >
                            {aboutSubLinks.map((section: any) => (
                              <div key={section.title} className="space-y-4">
                                <h4 className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">
                                  {section.title}
                                </h4>
                                <div className="grid gap-4">
                                  {section.links.map((link: any) => (
                                    <Link
                                      key={`${link.href}-${link.label}`}
                                      href={link.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-base text-white/60 hover:text-white flex items-center justify-between group/link"
                                    >
                                      <span className="group-hover/link:translate-x-1 transition-transform">{link.label}</span>
                                      <ChevronRight size={14} className="text-white/10 group-hover/link:text-white/30 transition-colors" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}

                        {isServices && isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 pr-2 space-y-6 pt-2 border-l border-white/10 ml-2"
                          >
                            {servicesSubLinks.map((section: any) => (
                              <div key={section.title} className="space-y-4">
                                <h4 className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">
                                  {section.title}
                                </h4>
                                <div className="grid gap-4">
                                  {section.links.map((link: any) => (
                                    <Link
                                      key={`${link.href}-${link.label}`}
                                      href={link.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-base text-white/60 hover:text-white flex items-center justify-between group/link"
                                    >
                                      <span className="group-hover/link:translate-x-1 transition-transform">{link.label}</span>
                                      <ChevronRight size={14} className="text-white/10 group-hover/link:text-white/30 transition-colors" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}

                        {isFaq && isMobileFaqOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 pr-2 space-y-6 pt-2 border-l border-white/10 ml-2"
                          >
                            {faqSubLinks.map((section: any) => (
                              <div key={section.title} className="space-y-4">
                                <h4 className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">
                                  {section.title}
                                </h4>
                                <div className="grid gap-4">
                                  {section.links.map((link: any) => (
                                    <Link
                                      key={`${link.href}-${link.label}`}
                                      href={link.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-base text-white/60 hover:text-white flex items-center justify-between group/link"
                                    >
                                      <span className="group-hover/link:translate-x-1 transition-transform">{link.label}</span>
                                      <ChevronRight size={14} className="text-white/10 group-hover/link:text-white/30 transition-colors" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </nav>
              </div>

              <div className="p-8 border-t border-white/5 bg-white/[0.02]">
                <div className="grid gap-4">
                  <Link href="/explore" className="text-white/60 flex items-center justify-between group">
                    Explore DMKV <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/digital-marketing-faq" className="text-white/60 flex items-center justify-between group">
                    Support <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Background Dimmer when Desktop Mega Menu is open */}
      <AnimatePresence>
        {(isAboutMegaMenuOpen || isServicesMegaMenuOpen || isFaqMegaMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 pointer-events-none hidden md:block"
          />
        )}
      </AnimatePresence>
    </>
  )
}
