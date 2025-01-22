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
        { text: 'Banking', href: '/solutions/banking' },
        { text: 'Legal', href: '/solutions/legal' },
        { text: 'Higher Education', href: '/solutions/higher-education' },
        { text: 'Hospitality', href: '/solutions/hospitality' },
        { text: 'Healthcare', href: '/solutions/healthcare' },
        { text: 'Corporate', href: '/solutions/corporate' },
      ],
    },
    {
      title: 'Features',
      links: [
        {
          text: 'Resource Booking',
          href: getPermalink('/features/resource-booking'),
        },
        {
          text: 'Digital Services',
          href: getPermalink('/features/digital-services'),
        },
        {
          text: 'Ticket Tracker',
          href: getPermalink('/features/ticket-tracker'),
        },
        {
          text: 'ESG',
          href: getPermalink('/features/esg'),
        },
        {
          text: 'Smart Analytics',
          href: getPermalink('/features/smart-analytics'),
        },
        {
          text: 'Catering',
          href: getPermalink('/features/catering'),
        },
        {
          text: 'Visitor Management',
          href: getPermalink('/features/visitor-management'),
        },
        {
          text: 'Vendor Integrations',
          href: getPermalink('/features/vendor-integrations'),
        }
      ],
    },
    {
      title: 'Integrations',
      links: [
        {
          text: 'Video Conferencing',
          href: getPermalink('/integrations/video-conferencing'),
        },
        {
          text: 'Access Control',
          href: getPermalink('/integrations/access-control'),
        },
        {
          text: 'HVAC / Electricity',
          href: getPermalink('/integrations/hvac-electricity'),
        },
        {
          text: 'Smart Lockers',
          href: getPermalink('/integrations/smart-lockers'),
        },
        {
          text: 'ITSM',
          href: getPermalink('/integrations/itsm'),
        },
        {
          text: 'IoT Sensors',
          href: getPermalink('/integrations/iot-sensors'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        // { text: 'About', href: '/about' },
        // { text: 'Careers', href: '/careers' },
        { text: 'Become a Partner', href: '/partners' },
        { text: 'Customer Support', href: '#' },
        { text: 'Partner Portal', href: '#' },
        { text: 'API Docs', href: 'https://docs.newwaveworkspace.com', target: '_blank' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'EULA', href: getPermalink('/eula') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Security', href: getPermalink('/security') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@newwaveworkspace', target: '_blank' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/newwaveapps/posts/?feedView=all&viewAsMember=true', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/newwaveworkspace/?hl=en', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: 'Copyright &copy; 2025 New Wave Workspace, all rights reserved.',
};
