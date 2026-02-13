'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Navigation() {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/digital-marketing-faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8">
      <div className="glass-dark px-8 py-4 rounded-full">
        <div className="flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setIsHovered(item.href)}
                onMouseLeave={() => setIsHovered(null)}
                className={`relative text-sm font-medium transition-all duration-300 ${isActive
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.label}
                {(isActive || isHovered === item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full animate-fadeInUp" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
