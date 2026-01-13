import {defineField, defineType} from 'sanity'

export const articleCategories = defineType({
  name: 'articleCategories',
  title: 'Article Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title', 
      title: 'Title', 
      type: 'string'
    }),
  ],
})
