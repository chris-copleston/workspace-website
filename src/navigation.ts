import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
    {
      text: 'Solutions',
      links: [
        {
          text: 'Banking',
          icon: 'tabler:bank',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Legal',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Universities',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Hospitality',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Healthcare',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Enterprise',
          href: getPermalink('/homes/personal'),
        },
      ],
    },

    {
      text: 'Modules',
      href: '#',
    },

    {
      text: 'Integrations',
      links: [
        {
          text: 'Video Conferencing',
          href: getPermalink('/#features'),
        },
        {
          text: 'Access Control',
          href: getPermalink('/services'),
        },
        {
          text: 'HAVC / Electricity',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Building Management Systems',
          href: getPermalink('/about'),
        },
        {
          text: 'Smart Lockers',
          href: getPermalink('/contact'),
        },
        {
          text: 'ITSM',
          href: getPermalink('/terms'),
        },
        {
          text: 'IoT Sensors',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Book a Demo', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Banking', href: '#' },
        { text: 'Legal', href: '#' },
        { text: 'Universities', href: '#' },
        { text: 'Hospitality', href: '#' },
        { text: 'Healthcare', href: '#' },
        { text: 'Enterprise', href: '#' },
        
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Modules', href: '#' },
        { text: 'Video Conferencing', href: '#' },
        { text: 'Access Control', href: '#' },
        { text: 'HAVC / Electricity', href: '#' },
        { text: 'BMS', href: '#' },
        { text: 'Smart Lockers', href: '#' },
        { text: 'ITSM', href: '#' },
        { text: 'IoT Sensors', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Hive Concierge Support', href: '#' },
        { text: 'Partner Portal', href: '#' },
        { text: 'API Docs', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Become a Partner', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/newwaveworkspace' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: '',
};
