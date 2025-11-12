import React from 'react'
import Spline from '@splinetool/react-spline'
import { Bot, Plug, ArrowLeftRight, Mail, Wrench } from 'lucide-react'

function Header() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          {/* Workyaan Logo - clean wordmark */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-sm">W</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">Workyaan</span>
          </div>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md shadow transition-colors">
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            <Bot className="h-3.5 w-3.5" /> n8n Automation Services
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Connect your apps. Automate repetitive tasks. Work smarter with n8n.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            n8n is a powerful workflow automation tool that links your favorite apps and services, so you can save time and eliminate manual busywork.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow transition-colors">
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-gray-800 border border-gray-200 hover:border-gray-300 bg-white/80 backdrop-blur">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            n8n Automation Services helps businesses and individuals streamline their processes by connecting different apps and automating routine workflows — without the need for coding. Whether it’s integrating CRMs, managing data between Google Sheets and APIs, automating emails, or building custom triggers and actions, we make your operations faster and more efficient. Our goal is to save you time, reduce manual errors, and help your systems work together seamlessly.
          </p>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: 'Workflow Automation Setup',
    icon: Bot,
    desc: 'Design, build, and launch automated workflows tailored to your processes.'
  },
  {
    title: 'Custom Integration Development',
    icon: Plug,
    desc: 'Connect niche tools and APIs to n8n with reliable, maintainable nodes.'
  },
  {
    title: 'Data Synchronization Between Apps',
    icon: ArrowLeftRight,
    desc: 'Keep your data consistent across CRMs, spreadsheets, and databases.'
  },
  {
    title: 'Automated Email and Notification Systems',
    icon: Mail,
    desc: 'Send timely emails and alerts triggered by events and conditions.'
  },
  {
    title: 'Maintenance & Optimization',
    icon: Wrench,
    desc: 'Audit, scale, and improve existing n8n workflows for performance.'
  }
]

function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What we do</h2>
          <p className="mt-4 text-gray-700">Practical automation services to streamline your operations using n8n.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">{f.desc}</p>
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-100 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-700">Have a project in mind or need help with automation? Reach out and we’ll respond shortly.</p>
          <a href="mailto:mandharemeghraj@gmail.com" className="mt-6 inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold shadow">
            <Mail className="h-5 w-5" /> mandharemeghraj@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-orange-500 flex items-center justify-center">
            <span className="text-white font-black text-xs">W</span>
          </div>
          <span className="font-semibold text-gray-800">Workyaan</span>
        </div>
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Workyaan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
