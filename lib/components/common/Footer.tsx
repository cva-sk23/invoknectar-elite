import Link from 'next/link'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'GOresolve', href: '/products/goresolve' },
      { label: 'PursuerAI', href: '/products/pursuerai' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Status', href: 'https://status.invoknectar.com' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://docs.invoknectar.com' },
      { label: 'API Reference', href: 'https://api.invoknectar.com' },
      { label: 'Support', href: '/contact' },
      { label: 'Community', href: 'https://community.invoknectar.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
    ],
  },
]

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/invoknectar', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/invoknectar', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/invoknectar', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@invoknectar.com', label: 'Email' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 dark:bg-black text-white border-t border-dark-700">
      <div className="section-padding">
        <div className="container-max">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-300 to-amber-500 rounded-xl flex items-center justify-center">
                  <span className="font-outfit font-black text-white">IN</span>
                </div>
                <span className="font-outfit font-bold text-lg">Invok Nectar</span>
              </div>
              <p className="text-gray-400 text-sm">
                Enterprise SaaS solutions for fintech, collections, and data intelligence.
              </p>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-700 hover:bg-gold-300/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-gold-300 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-dark-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {year} Invok Nectar. All rights reserved. | DPIIT Recognised Startup
              </p>
              <p className="text-gray-500 text-xs">
                Made with ❤️ in India • Built for Global Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
