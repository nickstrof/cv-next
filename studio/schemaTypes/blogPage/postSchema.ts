import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

export const postSchema = defineType({
  name: 'blog',
  title: 'Blog',
  icon: BookIcon,
  type: 'document',
  
  fields: [
    // Βασικά πεδία πρώτα
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    
    // Slug - αυτόματα από τον τίτλο
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',              // Παίρνει από το title
        maxLength: 96,                // Μέγιστα 96 χαρακτήρες
        isUnique: (value, context) => context.defaultIsUnique(value, context)
      },
      validation: (rule) => rule.required()
    }),
    
    // Σύντομη περιγραφή
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',                   // text = multiline string
      description: 'Short description for previews'
    }),
    
    // Εικόνα εξωφύλλου
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true               // Crop/focus functionality
      }
    }),
    
    // Το κυρίως περιεχόμενο - rich text
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',                // Array of blocks
      of: [{ type: 'block' }]       // Portable Text blocks
    }),
    
    // Reference στον Author - ΕΔΩ ΕΙΝΑΙ ΤΟ ΚΛΕΙΔΙ!
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',            // Αναφορά σε άλλο document
      to: [{ type: 'author' }],     // Ποιο type μπορεί να επιλέξει
      validation: (rule) => rule.required()
    }),

    
    // Ημερομηνία
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()  // Σημερινή ημερομηνία default
    })
  ],
  
  // Πώς θα φαίνεται στη λίστα (πολύ χρήσιμο!)
  preview: {
    select: {
      title: 'title',              // Παίρνει το title
      author: 'author.name',       // Παίρνει το name από τον linked author
      date: 'date',
      media: 'coverImage'          // Εικόνα για preview
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`
      ].filter(Boolean)              // Αφαιρεί τα null/undefined
      
      return { 
        title, 
        media, 
        subtitle: subtitles.join(' ') 
      }
    }
  }
})



// import { BookIcon } from '@sanity/icons'
// import { format, parseISO } from 'date-fns'
// import { defineField, defineType } from 'sanity'

// export const postSchema = defineType({
//   name: 'blog',
//   title: 'Blog',
//   icon: BookIcon,
//   type: 'document',

//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'localeString',
//       validation: (rule) => rule.required(),
//     }),

//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title.en',
//         maxLength: 96,
//         isUnique: (value, context) => context.defaultIsUnique(value, context)
//       },
//       validation: (rule) => rule.required()
//     }),

//     defineField({
//       name: 'excerpt',
//       title: 'Excerpt',
//       type: 'localeText',
//       description: 'Short description for previews'
//     }),

//     defineField({
//       name: 'coverImage',
//       title: 'Cover Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     }),

//     defineField({
//       name: 'content',
//       title: 'Content',
//       type: 'localePortableText'
//     }),

//     defineField({
//       name: 'author',
//       title: 'Author',
//       type: 'reference',
//       to: [{ type: 'author' }],
//       validation: (rule) => rule.required()
//     }),
//     defineField({
//       name: 'date',
//       title: 'Date',
//       type: 'datetime',
//       initialValue: () => new Date().toISOString()
//     })
//   ],

//   preview: {
//     select: {
//       title: 'title.en',
//       author: 'author.name',
//       date: 'date',
//       media: 'coverImage'
//     },
//     prepare({ title, media, author, date }) {
//       const subtitles = [
//         author && `by ${author}`,
//         date && `on ${format(parseISO(date), 'LLL d, yyyy')}`
//       ].filter(Boolean)

//       return {
//         title,
//         media,
//         subtitle: subtitles.join(' ')
//       }
//     }
//   }
// })
