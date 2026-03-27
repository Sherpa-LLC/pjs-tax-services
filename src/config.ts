export const config = {
  business: {
    name: 'PJS Tax Accounting Service Inc.',
    slug: 'pjs-tax-services',
    tagline: 'Accurate Tax Returns at the Most Reasonable Price',
    description: 'Located in Wilmington, Ohio, PJS Tax Accounting Service Inc. specializes in tax preparation, accounting, bookkeeping, and payroll services for individuals and small businesses. Over 25 years of professional experience.',
    yearFounded: 2000,
    owner: 'Pamela Strong',
  },

  contact: {
    phone: '(513) 706-0852',
    phoneRaw: '+15137060852',
    email: 'PJStax127@gmail.com',
    address: {
      street: '4609 W. US Highway 22/3',
      city: 'Wilmington',
      state: 'OH',
      zip: '45177',
      country: 'US',
    },
    coordinates: { lat: 39.4453, lng: -83.8285 },
  },

  hours: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 3:00 PM',
    saturday: 'By Appointment',
    sunday: 'Closed',
  },

  services: [
    {
      name: 'Tax Preparation',
      slug: 'tax-preparation',
      shortDescription: 'Expert tax preparation for individuals and businesses to maximize your refund.',
    },
    {
      name: 'Bookkeeping',
      slug: 'bookkeeping',
      shortDescription: 'Reliable bookkeeping services to keep your financial records organized and compliant.',
    },
    {
      name: 'Payroll Management',
      slug: 'payroll-management',
      shortDescription: 'Efficient payroll processing with timely payments and full regulatory compliance.',
    },
    {
      name: 'Financial Consulting',
      slug: 'financial-consulting',
      shortDescription: 'Strategic financial consulting to help your business grow and stay tax-efficient.',
    },
  ],

  serviceAreas: {
    primary: ['Wilmington', 'Clinton County'],
    secondary: ['Blanchester', 'Sabina', 'New Vienna', 'Clarksville', 'Midland', 'Martinsville', 'Hillsboro', 'Washington Court House'],
  },

  seo: {
    siteUrl: 'https://pjs-tax-services.pages.dev',
    titleTemplate: '%s | PJS Tax Accounting Service Inc.',
    defaultTitle: 'PJS Tax Accounting Service Inc. — Wilmington, Ohio Tax Preparation & Accounting',
    defaultDescription: 'Located in Wilmington, Ohio, PJS Tax Accounting Service Inc. specializes in tax preparation, accounting, bookkeeping, and payroll services for individuals and small businesses.',
    defaultImage: '/images/logo_og.png',
  },

  schema: {
    type: 'AccountingService' as const,
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    sameAs: [] as string[],
    aggregateRating: { value: 5.0, count: 12, best: 5 },
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  cta: {
    primary: {
      label: 'Become a Client',
      href: '/contact',
    },
    phone: {
      label: 'Call (513) 706-0852',
      href: 'tel:+15137060852',
    },
  },

  testimonials: [
    {
      quote: 'PJS Tax has handled my personal and business taxes for years. They always find deductions I would have missed and make the whole process stress-free.',
      author: 'Michael R.',
      location: 'Wilmington, OH',
    },
    {
      quote: 'As a small business owner, I rely on Pamela and her team for bookkeeping and payroll. They are thorough, responsive, and truly care about my success.',
      author: 'Sarah T.',
      location: 'Blanchester, OH',
    },
    {
      quote: 'I switched to PJS Tax after a bad experience elsewhere. The difference is night and day. Professional, accurate, and affordable. Highly recommend!',
      author: 'James & Linda W.',
      location: 'Sabina, OH',
    },
  ],
} as const;

export type Config = typeof config;
