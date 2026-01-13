import { defineType } from 'sanity'
export const localePortableText = defineType({
  name: 'localePortableText',
  type: 'object',
  title: 'Localized Content',
  fields: [
    { 
      name: 'en', 
      type: 'array', 
      title: 'English',
      of: [{ type: 'block' }]
    },
    { 
      name: 'el', 
      type: 'array', 
      title: 'Greek',
      of: [{ type: 'block' }]
    },
  ],
})