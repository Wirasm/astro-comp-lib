import type { ComponentShowcase } from '../types';

export const contactShowcase: ComponentShowcase = {
  id: 'contact',
  name: 'Contact',
  description: 'Beautiful contact forms with glass morphism effects and validation',
  component: 'Contact',
  groups: [
    {
      id: 'layouts',
      title: 'Layout Variants',
      description: 'Different contact form layouts',
      examples: [
        {
          id: 'default',
          label: 'Default Layout',
          props: {
            title: 'Get in Touch',
            subtitle:
              "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            fields: [
              {
                name: 'firstName',
                label: 'First Name',
                type: 'text',
                required: true,
                placeholder: 'John',
              },
              {
                name: 'lastName',
                label: 'Last Name',
                type: 'text',
                required: true,
                placeholder: 'Doe',
              },
              {
                name: 'email',
                label: 'Email',
                type: 'email',
                required: true,
                placeholder: 'john@example.com',
              },
              {
                name: 'phone',
                label: 'Phone',
                type: 'tel',
                placeholder: '+1 (555) 123-4567',
              },
              {
                name: 'message',
                label: 'Message',
                type: 'textarea',
                required: true,
                placeholder: 'Tell us about your project...',
              },
            ],
            submitText: 'Send Message',
            variant: 'default',
          },
          code: 'variant="default"',
        },
        {
          id: 'split',
          label: 'Split Layout',
          props: {
            title: 'Contact Us',
            subtitle: "Reach out and let's discuss how we can help you.",
            fields: [
              {
                name: 'name',
                label: 'Full Name',
                type: 'text',
                required: true,
                placeholder: 'Your name',
              },
              {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                required: true,
                placeholder: 'your@email.com',
              },
              {
                name: 'subject',
                label: 'Subject',
                type: 'text',
                required: true,
                placeholder: 'What is this about?',
              },
              {
                name: 'message',
                label: 'Your Message',
                type: 'textarea',
                required: true,
                placeholder: 'Share your thoughts...',
              },
            ],
            submitText: 'Send Message',
            variant: 'split',
          },
          code: 'variant="split"',
        },
      ],
    },
    {
      id: 'form-variations',
      title: 'Form Variations',
      description: 'Different form configurations',
      examples: [
        {
          id: 'minimal',
          label: 'Minimal Form',
          props: {
            fields: [
              {
                name: 'email',
                label: 'Email',
                type: 'email',
                required: true,
                placeholder: 'your@email.com',
              },
              {
                name: 'message',
                label: 'Message',
                type: 'textarea',
                required: true,
                placeholder: 'Your message...',
              },
            ],
            submitText: 'Submit',
          },
          code: 'Minimal contact form',
        },
        {
          id: 'newsletter',
          label: 'Newsletter Signup',
          props: {
            title: 'Stay Updated',
            subtitle: 'Subscribe to our newsletter for the latest updates',
            fields: [
              {
                name: 'firstName',
                label: 'First Name',
                type: 'text',
                placeholder: 'Your first name',
              },
              {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                required: true,
                placeholder: 'your@email.com',
              },
            ],
            submitText: 'Subscribe',
          },
          code: 'Newsletter signup form',
        },
        {
          id: 'support',
          label: 'Support Request',
          props: {
            title: 'Need Help?',
            subtitle: 'Our support team is here to assist you',
            fields: [
              {
                name: 'name',
                label: 'Your Name',
                type: 'text',
                required: true,
              },
              {
                name: 'email',
                label: 'Email',
                type: 'email',
                required: true,
              },
              {
                name: 'orderNumber',
                label: 'Order Number',
                type: 'text',
                placeholder: 'Optional',
              },
              {
                name: 'issue',
                label: 'Describe Your Issue',
                type: 'textarea',
                required: true,
                placeholder: 'Please provide details about your issue...',
              },
            ],
            submitText: 'Submit Ticket',
            variant: 'split',
          },
          code: 'Support request form',
        },
      ],
    },
    {
      id: 'validation-states',
      title: 'Validation States',
      description: 'Form fields with validation',
      examples: [
        {
          id: 'with-errors',
          label: 'Form with Errors',
          props: {
            title: 'Form Validation Example',
            fields: [
              {
                name: 'email',
                label: 'Email',
                type: 'email',
                required: true,
                value: 'invalid-email',
                error: 'Please enter a valid email address',
              },
              {
                name: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                placeholder: 'Min 8 characters',
                error: 'Password must be at least 8 characters',
              },
              {
                name: 'message',
                label: 'Message',
                type: 'textarea',
                required: true,
                placeholder: 'Your message...',
              },
            ],
            submitText: 'Submit',
          },
          code: 'Form fields with error states',
        },
      ],
    },
  ],
};

export default contactShowcase;
