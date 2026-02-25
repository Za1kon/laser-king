import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { SettingsSchema } from './sanity/schema/settings'

export default defineConfig({
  name: 'laser-king',
  title: 'Laser King — Settings',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wb3vsem5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: [SettingsSchema],
  },
})
