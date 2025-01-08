import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: 'var(--aw-color-text-default)',
            h1: { color: 'var(--aw-color-text-heading)' },
            h2: { color: 'var(--aw-color-text-heading)' },
            h3: { color: 'var(--aw-color-text-heading)' },
            h4: { color: 'var(--aw-color-text-heading)' },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--aw-color-text-heading)',
            },
          },
        },
        dark: {
          css: {
            color: 'var(--aw-color-text-default)',
            h1: { color: 'var(--aw-color-text-heading)' },
            h2: { color: 'var(--aw-color-text-heading)' },
            h3: { color: 'var(--aw-color-text-heading)' },
            h4: { color: 'var(--aw-color-text-heading)' },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--aw-color-text-heading)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
