import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: [
        {
          text: 'Banking',
          icon: 'tabler:pig-money',
          href: getPermalink('/solutions/banking'),
        },
        {
          text: 'Legal',
          icon: 'tabler:gavel',
          href: getPermalink('/solutions/legal'),
        },
        {
          text: 'Universities',
          icon: 'tabler:school',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Hospitality',
          icon: 'tabler:coffee',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Health and Life Sciences',
          icon: 'tabler:heartbeat',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Enterprise',
          icon: 'tabler:buildings',
          href: getPermalink('/homes/personal'),
        },
      ],
    },

    {
      text: 'Features',
      href: '#',
      links: [
        {
          text: 'Digital Services',
          icon: 'tabler:automation',
          href: getPermalink('/services'),
        },
        {
          text: 'Resource Booking',
          icon: 'tabler:calendar',
          href: getPermalink('/booking'),
        },
        {
          text: 'ESG' ,
          icon: 'tabler:leaf',
          href: getPermalink('/esg'),
        },
        {
          text: 'Smart Analytics',
          icon: 'tabler:chart-histogram',
          href: getPermalink('/analytics'),
        },
        {
          text: 'Catering',
          icon: 'tabler:tools-kitchen-2',
          href: getPermalink('/catering'),
        },
        {
          text: 'Ticket Tracker',
          icon: 'tabler:ticket',
          href: getPermalink('/ticket-tracker'),
        },
        {
          text: 'Visitor Management',
          icon: 'tabler:users',
          href: getPermalink('/vms'),
        },
        {
          text: 'Integrations',
          icon: 'tabler:plug',
          href: getPermalink('/integrations'),
        }

      ]
    },

    {
      text: 'Integrations',
      links: [
        {
          text: 'Video Conferencing',
          icon: 'tabler:video',
          href: getPermalink('/#features'),
        },
        {
          text: 'Access Control',
          icon: 'tabler:door-off',
          href: getPermalink('/services'),
        },
        {
          text: 'HVAC / Electricity',
          icon: 'tabler:air-conditioning',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Building Management Systems',
          icon: 'tabler:home-hand',
          href: getPermalink('/about'),
        },
        {
          text: 'Smart Lockers',
          icon: 'tabler:cooker',
          href: getPermalink('/contact'),
        },
        {
          text: 'ITSM',
          icon: 'tabler:server',
          href: getPermalink('/terms'),
        },
        {
          text: 'IoT Sensors',
          icon: 'tabler:alarm-smoke',
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
        { text: 'Health and Life Sciences', href: '#' },
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
