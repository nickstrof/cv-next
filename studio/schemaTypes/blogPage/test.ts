import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

export const test = defineType({
  name: 'test',
  title: 'test',
  icon: BookIcon,
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context)
      },
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localeText',
      description: 'Short description for previews'
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'localePortableText'
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required()
    }),

    // Πολλαπλές αναφορές σε Categories
    defineField({
      name: 'articleCategories',
      title: 'Article Categories',
      type: 'array',                            // Είναι array
      of: [{ type: 'reference', to: [{ type: 'articleCategories' }] }], // Με references
      // validation: (rule) => rule.required().min(1), // αν θες να είναι υποχρεωτικό
    }),


    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],

  preview: {
    select: {
      titleEn: 'title.en',
      titleEl: 'title.el',
      author: 'author.name',
      date: 'date',
      media: 'coverImage'
    },
    prepare({ titleEn, titleEl, media, author, date }) {
      const title = titleEn || titleEl || 'Untitled'
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`
      ].filter(Boolean)

      return {
        title,
        media,
        subtitle: subtitles.join(' ')
      }
    }
  }
})