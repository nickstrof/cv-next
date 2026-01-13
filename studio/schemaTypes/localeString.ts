import { defineType } from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  type: 'object',
  title: 'Localized String',
  fields: [
    { name: 'en', type: 'string', title: 'English' },
    { name: 'el', type: 'string', title: 'Greek' },
  ],
})