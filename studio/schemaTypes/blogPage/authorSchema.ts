// schemas/author.js
import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const authorSchema = defineType({
  name: 'author',           // Το όνομα που θα χρησιμοποιούμε για reference
  title: 'Author',          // Αυτό βλέπει ο χρήστης στο Studio
  icon: UserIcon,           // Εικονίδιο στο sidebar
  type: 'document',         // Είναι document = μπορεί να σωθεί μόνο του
  
  fields: [
    defineField({
      name: 'name',           // Το field name στη βάση
      title: 'Name',          // Label που βλέπει ο χρήστης
      type: 'string',         // Τύπος δεδομένων
      validation: (rule) => rule.required()  // Υποχρεωτικό πεδίο
    }),
    
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',          // Τύπος εικόνας
      options: { 
        hotspot: true         // Δυνατότητα crop/focus point
      },
      // validation: (rule) => rule.required()
    })
  ]
})