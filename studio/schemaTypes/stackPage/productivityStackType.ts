import {defineField, defineType} from 'sanity'

export const productivityStackType = defineType({
  name: 'productivityStack',
  title: 'Productivity Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'icon', 
      title: 'icon', 
      type: 'string'
    }),
    defineField({
      name: 'title', 
      title: 'Title', 
      type: 'string'
    }),
    defineField({
      name: 'description', 
      title: 'Description', 
      type: 'string'
    }),
  ],
})
