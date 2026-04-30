export interface Product {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  icon: string
  status: 'Live' | 'Beta' | 'Coming Soon' | 'Roadmap'
  features: string[]
  benefits: {
    title: string
    description: string
    icon: string
  }[]
  image?: string
  link: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  annualPrice: number
  period: 'month' | 'year'
  features: string[]
  highlight?: boolean
  cta: string
  link: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  description: string
  content: string
  author: string
  date: Date
  category: string
  image?: string
  readingTime: number
}

export interface Stat {
  label: string
  value: string
  icon?: string
}

export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

export interface DemoRequestData {
  name: string
  email: string
  company: string
  phone: string
  message?: string
}

export interface NewsletterSubscription {
  email: string
  source: string
}
