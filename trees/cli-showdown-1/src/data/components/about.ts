import type { ComponentShowcase } from '../types';

export const aboutShowcase: ComponentShowcase = {
  id: 'about',
  name: 'About',
  description: 'Versatile about sections with statistics display and glass morphism effects',
  component: 'About',
  groups: [
    {
      id: 'layouts',
      title: 'Layout Variants',
      description: 'Different about section layouts',
      examples: [
        {
          id: 'default',
          label: 'Default Layout',
          props: {
            title: 'About Our Company',
            subtitle: 'Building the future of web development',
            content:
              'We are passionate about creating beautiful, accessible, and performant web experiences. Our team combines years of expertise with cutting-edge technology to deliver exceptional results for our clients.',
            stats: [
              { label: 'Years of Experience', value: '10+' },
              { label: 'Happy Clients', value: '500+' },
              { label: 'Projects Completed', value: '1.2k' },
              { label: 'Team Members', value: '50+' },
            ],
            variant: 'default',
          },
          code: 'variant="default"',
        },
        {
          id: 'split',
          label: 'Split Layout',
          props: {
            title: 'Our Mission',
            subtitle: 'Empowering developers worldwide',
            content:
              'We believe in the power of great design and clean code. Our mission is to provide developers with the tools they need to create amazing web experiences quickly and efficiently.',
            image:
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
            stats: [
              { label: 'Downloads', value: '100k+' },
              { label: 'GitHub Stars', value: '15k' },
              { label: 'Contributors', value: '200+' },
            ],
            variant: 'split',
          },
          code: 'variant="split"',
        },
        {
          id: 'centered',
          label: 'Centered Layout',
          props: {
            title: 'Why Choose Us',
            subtitle: 'Excellence in every pixel',
            content:
              "Our commitment to quality, performance, and accessibility sets us apart. We don't just build components; we craft experiences that delight users and empower developers.",
            stats: [
              { label: 'Performance Score', value: '99/100' },
              { label: 'Accessibility', value: 'AAA' },
              { label: 'Customer Satisfaction', value: '98%' },
            ],
            variant: 'centered',
          },
          code: 'variant="centered"',
        },
      ],
    },
    {
      id: 'content-variations',
      title: 'Content Variations',
      description: 'Different content configurations',
      examples: [
        {
          id: 'no-stats',
          label: 'Without Statistics',
          props: {
            title: 'Simple About Section',
            subtitle: 'Focus on the content',
            content:
              'Sometimes less is more. This about section focuses purely on the message without the distraction of statistics. Perfect for when you want to tell your story without numbers.',
            variant: 'default',
          },
          code: 'About section without stats',
        },
        {
          id: 'stats-only',
          label: 'Statistics Focus',
          props: {
            title: 'By The Numbers',
            content: 'Let our results speak for themselves.',
            stats: [
              { label: 'Countries', value: '50+' },
              { label: 'Languages', value: '12' },
              { label: 'Active Users', value: '1M+' },
              { label: 'Uptime', value: '99.9%' },
              { label: 'Support Response', value: '<2hrs' },
              { label: 'Bug Fix Time', value: '<24hrs' },
            ],
            variant: 'centered',
          },
          code: 'Stats-focused about section',
        },
        {
          id: 'with-image',
          label: 'With Hero Image',
          props: {
            title: 'Our Story',
            content:
              'Founded in 2020, we set out to revolutionize how developers approach UI development. Today, thousands of teams rely on our components to build their products faster and better.',
            image:
              'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop',
            variant: 'default',
          },
          code: 'About section with full-width image',
        },
      ],
    },
    {
      id: 'use-cases',
      title: 'Common Use Cases',
      description: 'Practical about section examples',
      examples: [
        {
          id: 'startup',
          label: 'Startup About',
          props: {
            title: 'Disrupting the Industry',
            subtitle: 'One component at a time',
            content:
              "We're a team of passionate developers and designers on a mission to make web development more accessible and enjoyable for everyone.",
            stats: [
              { label: 'Founded', value: '2023' },
              { label: 'Team Size', value: '12' },
              { label: 'Funding', value: '$2.5M' },
            ],
            variant: 'split',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
          },
          code: 'Startup-style about section',
        },
        {
          id: 'agency',
          label: 'Agency About',
          props: {
            title: 'Creative Excellence',
            subtitle: 'Where design meets development',
            content:
              "With over a decade of experience, we've helped hundreds of brands transform their digital presence. Our award-winning team combines creativity with technical expertise to deliver exceptional results.",
            stats: [
              { label: 'Awards Won', value: '25+' },
              { label: 'Client Retention', value: '95%' },
              { label: 'Projects Delivered', value: '500+' },
              { label: 'Team Experts', value: '30+' },
            ],
            variant: 'default',
          },
          code: 'Agency-style about section',
        },
      ],
    },
  ],
};

export default aboutShowcase;
