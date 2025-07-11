import type { ComponentShowcase } from '../types';

export const testimonialsShowcase: ComponentShowcase = {
  id: 'testimonials',
  name: 'Testimonials',
  description: 'Beautiful testimonial sections with ratings and glass morphism effects',
  component: 'Testimonials',
  groups: [
    {
      id: 'layouts',
      title: 'Layout Variants',
      description: 'Different testimonial layout options',
      examples: [
        {
          id: 'cards',
          label: 'Card Layout',
          props: {
            title: 'What Our Customers Say',
            subtitle: 'Real experiences from real people',
            testimonials: [
              {
                quote:
                  'This component library has transformed how we build our applications. The attention to detail and modern design patterns are exceptional.',
                author: 'Sarah Chen',
                role: 'Lead Developer',
                company: 'TechCorp',
                rating: 5,
                image: 'https://i.pravatar.cc/150?img=1',
              },
              {
                quote:
                  'The glass morphism effects and animations are stunning. Our users love the new interface we built with these components.',
                author: 'Michael Rodriguez',
                role: 'Product Designer',
                company: 'DesignHub',
                rating: 5,
                image: 'https://i.pravatar.cc/150?img=3',
              },
              {
                quote:
                  'Outstanding performance and accessibility. Finally, a component library that takes both seriously.',
                author: 'Emily Watson',
                role: 'Frontend Engineer',
                company: 'StartupXYZ',
                rating: 4,
                image: 'https://i.pravatar.cc/150?img=5',
              },
            ],
            variant: 'cards',
          },
          code: 'variant="cards"',
        },
        {
          id: 'carousel',
          label: 'Carousel Layout',
          props: {
            testimonials: [
              {
                quote:
                  'Incredible component library! The development experience is smooth and the results are professional.',
                author: 'Alex Johnson',
                role: 'CTO',
                company: 'InnovateTech',
                rating: 5,
              },
              {
                quote: 'We shipped our MVP 3x faster using these components. Highly recommended!',
                author: 'Lisa Park',
                role: 'Founder',
                company: 'FastTrack',
                rating: 5,
              },
              {
                quote:
                  'The best component library we have ever used. Clean code, great documentation.',
                author: 'David Kim',
                role: 'Senior Developer',
                rating: 5,
              },
            ],
            variant: 'carousel',
          },
          code: 'variant="carousel"',
        },
        {
          id: 'masonry',
          label: 'Masonry Layout',
          props: {
            testimonials: [
              {
                quote: 'Short and sweet! Love it.',
                author: 'Tom Brief',
                rating: 5,
              },
              {
                quote:
                  'These components have revolutionized our development workflow. The attention to accessibility and performance is unmatched in the industry.',
                author: 'Jennifer Long',
                role: 'Engineering Manager',
                company: 'BigCorp',
                rating: 5,
              },
              {
                quote: 'Exactly what we needed for our modern web app.',
                author: 'Chris Medium',
                role: 'Developer',
                rating: 4,
              },
              {
                quote:
                  'The glass morphism effects are beautiful and the performance is outstanding. Our lighthouse scores improved significantly after switching to these components.',
                author: 'Patricia Extended',
                role: 'Performance Engineer',
                company: 'SpeedyWeb',
                rating: 5,
              },
            ],
            variant: 'masonry',
          },
          code: 'variant="masonry"',
        },
      ],
    },
    {
      id: 'content-variations',
      title: 'Content Variations',
      description: 'Different testimonial content configurations',
      examples: [
        {
          id: 'minimal',
          label: 'Minimal Testimonials',
          props: {
            testimonials: [
              {
                quote: 'Simply amazing!',
                author: 'Jane Doe',
              },
              {
                quote: 'Best investment for our team.',
                author: 'John Smith',
              },
              {
                quote: 'Highly recommended!',
                author: 'Alice Johnson',
              },
            ],
          },
          code: 'Minimal testimonials without ratings or images',
        },
        {
          id: 'with-ratings',
          label: 'With Ratings Only',
          props: {
            testimonials: [
              {
                quote: 'Excellent component library with great documentation.',
                author: 'Robert Brown',
                rating: 5,
              },
              {
                quote: 'Very good, but could use more animation options.',
                author: 'Maria Garcia',
                rating: 4,
              },
              {
                quote: 'Solid foundation for any project.',
                author: 'James Wilson',
                rating: 4,
              },
            ],
          },
          code: 'Testimonials with star ratings',
        },
        {
          id: 'detailed',
          label: 'Detailed Testimonials',
          props: {
            testimonials: [
              {
                quote:
                  'This library has become an essential part of our tech stack. The components are well-thought-out and save us countless hours.',
                author: 'Amanda Chen',
                role: 'VP of Engineering',
                company: 'TechGiant',
                rating: 5,
                image: 'https://i.pravatar.cc/150?img=9',
              },
              {
                quote:
                  'From prototyping to production, these components deliver. The accessibility features are particularly impressive.',
                author: 'Carlos Mendez',
                role: 'UI/UX Lead',
                company: 'DesignFirst',
                rating: 5,
                image: 'https://i.pravatar.cc/150?img=11',
              },
            ],
          },
          code: 'Full testimonials with all details',
        },
      ],
    },
  ],
};

export default testimonialsShowcase;
