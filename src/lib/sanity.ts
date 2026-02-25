import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export interface SiteSettings {
  storeUrl: string
  whatsapp: string
  phone1?: string
  phone2?: string
  email: string
  instagram?: string
  facebook?: string
  address: string
  mapLat: number
  mapLng: number
}

export const settingsQuery = `*[_type == "Settings"][0] {
  storeUrl,
  whatsapp,
  phone1,
  phone2,
  email,
  instagram,
  facebook,
  address,
  mapLat,
  mapLng
}`
