
import { NavItem, Project, ServicePackage } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'bow-sewing',
    title: 'Bow Sewing Centre',
    description: 'School uniforms, professional alterations, and embroidery services in Bow, London. Use this site to view services and location.',
    imageUrl: 'https://picsum.photos/seed/bow-sewing/800/600',
    liveUrl: 'https://bow-sewing-centre.vercel.app/',
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$500',
    features: [
      'Up to 4 pages',
      'Clean static design',
      'Fully mobile-friendly',
      'Integrated contact form',
      'Basic SEO setup',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$750',
    features: [
      '5–6 pages',
      'Custom professional design',
      'Booking / Email integration',
      'Mobile-first responsiveness',
      'Fast deployment',
    ],
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$1,000',
    features: [
      '6+ pages',
      'Blog or full booking setup',
      'Advanced custom styling',
      'Third-party tool integration',
      'Priority support',
    ],
  },
];
