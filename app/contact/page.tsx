'use client'

import React from "react"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <Navigation />

      <main className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Header */}
          <section className="text-center space-y-6 animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-bold gradient-text">
              Contact Us
            </h1>
            <p className="text-xl text-gray-400">
              Let's discuss your next big marketing challenge
            </p>
          </section>

          {/* Contact Info */}
          <section className="grid md:grid-cols-2 gap-6 animate-slideIn">
            {[
              {
                title: 'Email',
                content: 'sales@dmkvhouseofmarketing.com',
                href: 'mailto:sales@dmkvhouseofmarketing.com',
              },
              {
                title: 'Phone',
                content: '+91 8861771361',
                href: 'tel:+918861771361',
              },
              {
                title: 'Office',
                content: 'Bangalore, KA',
                href: 'https://www.google.com/maps/search/?api=1&query=Bangalore,+KA',
              },
              {
                title: 'Response Time',
                content: '24-48 hours',
                href: null,
              },
            ].map((info, idx) => {
              const Content = () => (
                <>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-white">
                    {info.content}
                  </p>
                </>
              )

              return info.href ? (
                <a
                  key={idx}
                  href={info.href}
                  target={info.title === 'Office' ? '_blank' : undefined}
                  rel={info.title === 'Office' ? 'noopener noreferrer' : undefined}
                  className="glass p-6 rounded-2xl text-center block hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Content />
                </a>
              ) : (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl text-center"
                >
                  <Content />
                </div>
              )
            })}
          </section>

          {/* Contact Form */}
          <section className="glass p-8 md:p-12 rounded-3xl animate-fadeInUp">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </section>

          {/* Social Links */}
          <section className="text-center space-y-6 animate-slideIn">
            <p className="text-gray-400">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/dmkv-hom' },
                { name: 'Twitter', href: '#' },
                { name: 'Instagram', href: '#' },
                { name: 'Facebook', href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === 'LinkedIn' ? '_blank' : undefined}
                  rel={social.name === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="glass px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/15 transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
