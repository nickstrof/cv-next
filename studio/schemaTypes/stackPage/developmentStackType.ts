import {defineField, defineType} from 'sanity'

export const developmentStackType = defineType({
  name: 'developmentStack',
  title: 'Development Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: Rule => Rule.required(), //<-- υποχρεωτικό πεδίο 
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(), 
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required(), 
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      // media: 'icon'
    }
  }
})