'use client'

import { Navigation } from '@/components/navigation'

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Navigation />

      <main className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Header */}
          <section className="text-center space-y-6 animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-bold gradient-text">
              About DMKV
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Established in 2024 with a commitment to fair pricing and honest work. We focus completely on delivering value without overpricing, ensuring transparency and dedication in every project.
            </p>
          </section>

          {/* Story */}
          <section className="space-y-8">
            <div className="glass p-8 md:p-12 rounded-3xl animate-slideIn">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Our Story
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded with a vision to revolutionize digital marketing, DMKV House of Marketing started as a small agency with big dreams. Over the years, we've evolved into a powerhouse of creative talent and strategic minds, helping businesses of all sizes unlock their true potential in the digital landscape.
              </p>
            </div>

            <div className="glass p-8 md:p-12 rounded-3xl animate-slideIn">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe in creating marketing solutions that are not just effective, but transformative. Our mission is to partner with brands that dare to dream bigger, helping them reach their audience through innovative strategies, compelling creative, and data-driven execution.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Innovation',
                  description: 'We stay ahead of trends and push creative boundaries.',
                },
                {
                  title: 'Excellence',
                  description: 'Every project receives our full dedication and expertise.',
                },
                {
                  title: 'Integrity',
                  description: 'We build lasting relationships based on trust and transparency.',
                },
                {
                  title: 'Growth',
                  description: 'Your success is our success. We focus on measurable results.',
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fadeInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-white text-center">
              Founder
            </h2>
            <div className="flex justify-center">
              <div className="glass p-8 rounded-2xl text-center animate-float max-w-sm w-full">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src="/images/clients/keertan.jpeg"
                    alt="Keertan Vijaykumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Keertan Vijaykumar
                </h3>
                <p className="text-gray-400 font-medium tracking-wide mb-4">Founder</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  A visionary leader passionate about digital innovation, transforming brands through strategic marketing and creative excellence.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
