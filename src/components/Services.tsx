'use client'

import styled, { keyframes } from 'styled-components'
import { Theme } from '@/styles/theme'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Section = styled.section`
  padding: 7rem 3rem;
  background: ${Theme.colors.darkGray};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${Theme.colors.cyan}, transparent);
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
  color: ${Theme.colors.cyan};
  display: block;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  font-family: ${Theme.fonts.display};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: ${Theme.colors.white};
  line-height: 1;
`

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${Theme.colors.muted};
  margin-top: 0.8rem;
  font-weight: 300;
`

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 2rem; }
`

const LeftCol = styled.div``
const RightCol = styled.div``

const ColTitle = styled.p`
  font-family: ${Theme.fonts.heading};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${Theme.colors.muted};
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${Theme.colors.border};
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) { grid-template-columns: 1fr; }
`

const ServiceCard = styled.div`
  background: ${Theme.colors.midGray};
  border: 1px solid ${Theme.colors.border};
  padding: 1.8rem 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  animation: ${fadeUp} 0.6s ease both;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 0;
    background: ${Theme.colors.cyan};
    transition: height 0.3s;
  }

  &:hover {
    border-color: ${Theme.colors.border};
    background: ${Theme.colors.lightGray};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,212,255,0.1);
    &::before { height: 100%; }
  }
`

const ServiceIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`

const ServiceName = styled.p`
  font-family: ${Theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${Theme.colors.yellow};
  margin-bottom: 0.6rem;
`

const ServiceDesc = styled.p`
  font-size: 0.88rem;
  color: ${Theme.colors.muted};
  line-height: 1.6;
  font-weight: 300;
`

const DiffList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const DiffCard = styled.div`
  background: ${Theme.colors.midGray};
  border: 1px solid ${Theme.colors.borderWarm};
  padding: 1.4rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  transition: all 0.3s;

  &:hover {
    background: ${Theme.colors.lightGray};
    border-color: ${Theme.colors.yellow};
  }
`

const DiffIcon = styled.div`
  font-size: 1.8rem;
  flex-shrink: 0;
`

const DiffContent = styled.div``

const DiffName = styled.p`
  font-family: ${Theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${Theme.colors.yellow};
  margin-bottom: 0.4rem;
`

const DiffDesc = styled.p`
  font-size: 0.88rem;
  color: ${Theme.colors.muted};
  line-height: 1.5;
  font-weight: 300;
`

const services = [
  { icon: '🔧', name: 'Servicio Técnico', desc: 'Reparamos, limpiamos y mantenemos impresoras para garantizar su óptimo funcionamiento.' },
  { icon: '🖨️', name: 'Venta de Impresoras', desc: 'Ofrecemos impresoras nuevas de las mejores marcas para cubrir tus necesidades.' },
  { icon: '🔄', name: 'Venta y Recarga de Toners', desc: 'Toners originales y alternativos, además de recargas para tus cartuchos.' },
  { icon: '🖋️', name: 'Tintas en Cartuchos', desc: 'Tintas alternativas y originales para todos los modelos de impresoras.' },
]

const diffs = [
  { icon: '📱', name: 'Atención Personalizada', desc: 'Te brindamos asesoría en todo lo que necesites, tanto antes como después de la compra.' },
  { icon: '🚚', name: 'Entrega a Domicilio', desc: 'Realizamos envíos a toda Argentina de forma rápida y eficiente.' },
  { icon: '✅', name: 'Garantía Total', desc: 'Ofrecemos garantía completa en todos nuestros productos por cambio o devolución.' },
]

export default function LKServices() {
  return (
    <Section id="services">
      <Header>
        <Tag>▶ Lo que hacemos</Tag>
        <Title>NUESTROS SERVICIOS</Title>
        <Subtitle>Descubrí todo lo que tenemos para ofrecerte en Laser King</Subtitle>
      </Header>

      <Grid>
        <LeftCol>
          <ColTitle>Tenemos experiencia en diferentes áreas que incluyen:</ColTitle>
          <ServicesGrid>
            {services.map((s) => (
              <ServiceCard key={s.name}>
                <ServiceIcon>{s.icon}</ServiceIcon>
                <ServiceName>{s.name}</ServiceName>
                <ServiceDesc>{s.desc}</ServiceDesc>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </LeftCol>

        <RightCol>
          <ColTitle>¿Qué nos diferencia?</ColTitle>
          <DiffList>
            {diffs.map((d) => (
              <DiffCard key={d.name}>
                <DiffIcon>{d.icon}</DiffIcon>
                <DiffContent>
                  <DiffName>{d.name}</DiffName>
                  <DiffDesc>{d.desc}</DiffDesc>
                </DiffContent>
              </DiffCard>
            ))}
          </DiffList>
        </RightCol>
      </Grid>
    </Section>
  )
}
