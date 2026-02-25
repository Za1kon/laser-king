'use client'

import styled, { keyframes } from 'styled-components'
import { Theme } from '@/styles/theme'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`

const scanLine = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: ${Theme.colors.black};
`

const BgStripes = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    height: 100%;
    &:nth-child(1) { background: rgba(245,196,0,0.06); }
    &:nth-child(2) { background: rgba(220,0,120,0.06); }
    &:nth-child(3) { background: rgba(0,180,240,0.06); }
    &:nth-child(4) { background: rgba(20,20,25,0.8); }
  }
`

const ScanLine = styled.div`
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, ${Theme.colors.cyan}, transparent);
  animation: ${scanLine} 6s ease-in-out infinite;
  opacity: 0.3;
  z-index: 2;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 70% 50%, rgba(0,212,255,0.08) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 20% 50%, rgba(245,196,0,0.06) 0%, transparent 60%),
    linear-gradient(to bottom, rgba(12,12,14,0.3) 0%, rgba(12,12,14,0.7) 100%);
  z-index: 1;
`

const Content = styled.div`
  position: relative;
  z-index: 3;
  padding: 0 3rem;
  max-width: 800px;

  @media (max-width: 768px) { padding: 0 1.5rem; }
`

const Eyebrow = styled.p`
  font-family: ${Theme.fonts.heading};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.6em;
  text-transform: uppercase;
  color: ${Theme.colors.cyan};
  margin-bottom: 1.5rem;
  animation: ${fadeUp} 0.8s 0.1s ease both;

  &::before {
    content: '▶ ';
    font-size: 0.6rem;
  }
`

const Title = styled.h1`
  font-family: ${Theme.fonts.display};
  font-size: clamp(4rem, 10vw, 9rem);
  line-height: 0.9;
  color: ${Theme.colors.white};
  margin-bottom: 1.5rem;
  animation: ${fadeUp} 0.8s 0.2s ease both;

  span {
    color: ${Theme.colors.cyan};
    display: block;
    -webkit-text-stroke: 2px ${Theme.colors.cyan};
    color: transparent;
  }
`

const Subtitle = styled.p`
  font-family: ${Theme.fonts.body};
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 300;
  color: ${Theme.colors.muted};
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 3rem;
  animation: ${fadeUp} 0.8s 0.3s ease both;
`

const CTAs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.8s 0.4s ease both;
`

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 2.2rem;
  background: ${Theme.colors.cyan};
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all 0.3s;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));

  &:hover {
    background: ${Theme.colors.white};
    box-shadow: 0 0 40px rgba(0,212,255,0.4);
    transform: translateY(-2px);
  }
`

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 2.2rem;
  background: transparent;
  color: ${Theme.colors.cream};
  font-family: ${Theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: 1px solid ${Theme.colors.border};
  transition: all 0.3s;

  &:hover {
    border-color: ${Theme.colors.cyan};
    color: ${Theme.colors.cyan};
    background: rgba(0,212,255,0.05);
  }
`

const Stats = styled.div`
  position: absolute;
  bottom: 3rem; right: 3rem;
  display: flex;
  gap: 3rem;
  z-index: 3;
  animation: ${fadeUp} 0.8s 0.6s ease both;

  @media (max-width: 768px) { display: none; }
`

const Stat = styled.div`
  text-align: right;
  border-right: 2px solid ${Theme.colors.border};
  padding-right: 1.5rem;

  strong {
    display: block;
    font-family: ${Theme.fonts.display};
    font-size: 2.5rem;
    color: ${Theme.colors.cyan};
    line-height: 1;
  }

  span {
    font-family: ${Theme.fonts.heading};
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${Theme.colors.muted};
  }
`

interface Props {
  storeUrl?: string
}

export default function LKHero({ storeUrl }: Props) {
  return (
    <Section id="home">
      <BgStripes>
        <div /><div /><div /><div />
      </BgStripes>
      <ScanLine />
      <Overlay />

      <Content>
        <Eyebrow>Insumos Informáticos · Rosario</Eyebrow>
        <Title>
          LASER
          <span>KING</span>
        </Title>
        <Subtitle>
          Toners, tintas y servicio técnico de impresoras.
          Más de 20 años de experiencia con atención personalizada
          y envíos a toda Argentina.
        </Subtitle>
        <CTAs>
          <PrimaryBtn href={storeUrl || '#'} target="_blank" rel="noopener">
            ▶ Tienda Online
          </PrimaryBtn>
          <SecondaryBtn href="#services">
            Ver Servicios
          </SecondaryBtn>
        </CTAs>
      </Content>

      <Stats>
        <Stat>
          <strong>20+</strong>
          <span>Años de experiencia</span>
        </Stat>
        <Stat>
          <strong>6</strong>
          <span>Marcas líderes</span>
        </Stat>
      </Stats>
    </Section>
  )
}
