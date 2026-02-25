import { defineField, defineType } from 'sanity'

export const SettingsSchema = defineType({
  name: 'Settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'storeUrl',
      title: 'Online Store URL (Tienda Online button)',
      type: 'url',
      description: 'URL where the "Tienda Online" button will redirect',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp number',
      type: 'string',
      description: 'Full number with country code, e.g. 5493417483899',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone1',
      title: 'Phone 1',
      type: 'string',
      description: 'e.g. +54 9 341 748-3899',
    }),
    defineField({
      name: 'phone2',
      title: 'Phone 2',
      type: 'string',
      description: 'e.g. +54 9 341 590-1464',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram username',
      type: 'string',
      description: 'Without the @',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      description: 'Full URL e.g. https://facebook.com/laserking',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'e.g. España 2049, Rosario, Santa Fe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapLat',
      title: 'Map latitude',
      type: 'number',
      description: 'e.g. -32.9468',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapLng',
      title: 'Map longitude',
      type: 'number',
      description: 'e.g. -60.6393',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
