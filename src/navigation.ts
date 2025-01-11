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
          text: 'Higher Education',
          icon: 'tabler:school',
          href: getPermalink('/solutions/higher-education'),
        },
        {
          text: 'Hospitality',
          icon: 'tabler:coffee',
          href: getPermalink('/solutions/hospitality'),
        },
        {
          text: 'Healthcare',
          icon: 'tabler:heartbeat',
          href: getPermalink('/solutions/healthcare'),
        },
        {
          text: 'Corporate',
          icon: 'tabler:buildings',
          href: getPermalink('/solutions/corporate'),
        },
      ],
    },

    {
      text: 'Features',
      href: '#',
      links: [
        {
          text: 'Resource Booking',
          icon: 'tabler:calendar-clock',
          href: getPermalink('/features/resource-booking'),
        },
        {
          text: 'Digital Services',
          icon: 'tabler:automation',
          href: getPermalink('/features/digital-services'),
        },
        {
          text: 'Ticket Tracker',
          icon: 'tabler:ticket',
          href: getPermalink('/features/ticket-tracker'),
        },
        {
          text: 'ESG',
          icon: 'tabler:leaf',
          href: getPermalink('/features/esg'),
        },
        {
          text: 'Smart Analytics',
          icon: 'tabler:chart-histogram',
          href: getPermalink('/features/smart-analytics'),
        },
        {
          text: 'Catering',
          icon: 'tabler:tools-kitchen-2',
          href: getPermalink('/features/catering'),
        },
        {
          text: 'Visitor Management',
          icon: 'tabler:users',
          href: getPermalink('/features/visitor-management'),
        },
        {
          text: 'Vendor Integrations',
          icon: 'tabler:plug',
          href: getPermalink('/features/vendor-integrations'),
        }

      ]
    },

    {
      text: 'Integrations',
      links: [
        {
          text: 'Video Conferencing',
          icon: 'tabler:video',
          href: getPermalink('/integrations/video-conferencing'),
        },
        {
          text: 'Access Control',
          icon: 'tabler:door-off',
          href: getPermalink('/integrations/access-control'),
        },
        {
          text: 'HVAC / Electricity',
          icon: 'tabler:air-conditioning',
          href: getPermalink('/integrations/hvac-electricity'),
        },
          // {
          //   text: 'Building Management Systems',
          //   icon: 'tabler:home-hand',
          //   href: getPermalink('/integrations/building-management-systems'),
          // },
        {
          text: 'Smart Lockers',
          icon: 'tabler:cooker',
          href: getPermalink('/integrations/smart-lockers'),
        },
        {
          text: 'ITSM',
          icon: 'tabler:server',
          href: getPermalink('/integrations/itsm'),
        },
        {
          text: 'IoT Sensors',
          icon: 'tabler:alarm-smoke',
          href: getPermalink('/integrations/iot-sensors'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Book a Demo', href: '/contact' }],
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
    { text: 'EULA', href: getPermalink('/eula') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Security', href: getPermalink('/security') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/newwaveworkspace' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/newwaveworkspace' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: 'Copyright &copy; 2025 New Wave Workspace, all rights reserved.',
};
