'use client'

import styled from 'styled-components'
import { Theme } from '@/styles/theme'
import { SiteSettings } from '@/lib/sanity'

const Section = styled.section`
  padding: 7rem 3rem;
  background: ${Theme.colors.black};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${Theme.colors.yellow}, transparent);
  }

  @media (max-width: 768px) { padding: 5rem 1.5rem; }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`

const Tag = styled.span`
  font-family: ${Theme.fonts.heading};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: ${Theme.colors.yellow};
  display: block;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  font-family: ${Theme.fonts.display};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: ${Theme.colors.white};
  line-height: 1;
`

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`

const TextCol = styled.div`
  background: ${Theme.colors.midGray};
  border: 1px solid ${Theme.colors.borderWarm};
  padding: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 3px;
    background: linear-gradient(to right, ${Theme.colors.yellow}, transparent);
  }
`

const AboutText = styled.p`
  font-size: 1rem;
  color: ${Theme.colors.cream};
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 1.2rem;

  &:last-of-type { margin-bottom: 2rem; }

  strong { color: ${Theme.colors.yellow}; font-weight: 500; }
`

const AddressBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem 1.2rem;
  background: rgba(245,196,0,0.06);
  border: 1px solid ${Theme.colors.borderWarm};
  margin-top: 1.5rem;
`

const AddressIcon = styled.span`
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 2px;
`

const AddressText = styled.div`
  p {
    font-family: ${Theme.fonts.heading};
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${Theme.colors.yellow};
    margin-bottom: 0.3rem;
  }
  span {
    font-size: 0.95rem;
    color: ${Theme.colors.cream};
  }
`

const MapCol = styled.div`
  position: relative;
`

const MapWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  border: 1px solid ${Theme.colors.border};
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid ${Theme.colors.cyan};
    pointer-events: none;
    opacity: 0.3;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(0.3) invert(0.05);
  }
`

const MapLabel = styled.div`
  position: absolute;
  top: -1px; left: -1px;
  background: ${Theme.colors.cyan};
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.heading};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
`

interface Props {
  settings: SiteSettings | null
}

export default function LKAbout({ settings }: Props) {
  const lat = settings?.mapLat ?? -32.9468
  const lng = settings?.mapLng ?? -60.6393
  const address = settings?.address ?? 'Rosario, Santa Fe, Argentina'

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.008}%2C${lng + 0.01}%2C${lat + 0.008}&layer=mapnik&marker=${lat}%2C${lng}`

  return (
    <Section id="about">
      <Header>
        <Tag>▶ Quiénes somos</Tag>
        <Title>SOBRE NOSOTROS</Title>
      </Header>

      <Grid>
        <TextCol>
          <AboutText>
            Somos una empresa con <strong>más de 20 años de experiencia</strong>, especializada
            en atención personalizada y asesoramiento en insumos informáticos para ayudarte a
            reducir costos.
          </AboutText>
          <AboutText>
            Ofrecemos tóners originales, alternativos y remanufacturados de todas las marcas,
            con <strong>garantía y envíos gratis en Rosario</strong>.
          </AboutText>
          <AboutText>
            Tenemos un taller para reciclado de tóners y reparación de impresoras.
          </AboutText>

          <AddressBox>
            <AddressIcon>📍</AddressIcon>
            <AddressText>
              <p>Nuestra ubicación</p>
              <span>{address}</span>
            </AddressText>
          </AddressBox>
        </TextCol>

        <MapCol>
          <MapLabel>📍 Ubicación</MapLabel>
          <MapWrapper>
            <iframe
              src={mapSrc}
              title="Laser King ubicación"
              loading="lazy"
            />
          </MapWrapper>
        </MapCol>
      </Grid>
    </Section>
  )
}
