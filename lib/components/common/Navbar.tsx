'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/hooks'
import { Button } from '../ui/Button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-900/80 blur-glass border-b border-gray-200 dark:border-dark-700">
      <div className="container-max px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-gold-300 to-amber-500 rounded-xl flex items-center justify-center">
            <span className="font-outfit font-black text-white text-xl">IN</span>
          </div>
          <span className="font-outfit font-bold text-lg hidden sm:block text-dark-900 dark:text-white">
            Invok Nectar
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-dark-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-amber-500" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>

          {/* CTA Button */}
          <Button size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700"
        >
          <div className="container-max px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-600 hover:text-dark-900 dark:text-gray-400 dark:hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full mt-4" size="md">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
