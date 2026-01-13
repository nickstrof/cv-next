// schemas/socials.js
import { defineField, defineType } from 'sanity'

export const socialType = defineType({
  name: 'socials',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter/X', value: 'twitter' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'GitHub', value: 'github' },
          { title: 'Dribbble', value: 'dribbble' },
          { title: 'Behance', value: 'behance' },
          { title: 'Discord', value: 'discord' },
          { title: 'Telegram', value: 'telegram' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'Snapchat', value: 'snapchat' },
          { title: 'Reddit', value: 'reddit' },
          { title: 'Medium', value: 'medium' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Full URL to your social media profile',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show this social media link on the website',
      initialValue: true
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'Open link in new tab/window',
      initialValue: true
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this appears (lower numbers first)',
      initialValue: 0
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
      customTitle: 'customPlatform',
      media: 'icon',
      isActive: 'isActive'
    },
    prepare({ title, subtitle, customTitle, media, isActive }) {
      return {
        title: customTitle || title || 'Social Media',
        subtitle: `${subtitle} ${isActive ? '✅' : '❌'}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Platform A-Z',
      name: 'platformAsc', 
      by: [{ field: 'platform', direction: 'asc' }]
    }
  ]
})