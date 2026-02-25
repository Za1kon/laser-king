import { client, settingsQuery, SiteSettings } from '@/lib/sanity'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Brands from '@/components/Brands'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const revalidate = 60

async function getSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(settingsQuery)
  } catch {
    return null
  }
}

export default async function Home() {
  const settings = await getSettings()

  return (
    <>
      <Nav />
      <main>
        <Hero storeUrl={settings?.storeUrl} />
        <Services />
        <Brands />
        <About settings={settings} />
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
    </>
  )
}
