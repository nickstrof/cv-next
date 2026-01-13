import { defineType } from 'sanity'

// Για το excerpt (multiline text)
export const localeText = defineType({
  name: 'localeText',
  type: 'object',
  title: 'Localized Text',
  fields: [
    { name: 'en', type: 'text', title: 'English' },
    { name: 'el', type: 'text', title: 'Greek' },
  ],
})