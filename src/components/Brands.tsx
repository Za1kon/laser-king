'use client'

import styled, { keyframes } from 'styled-components'
import { Theme } from '@/styles/theme'

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`

const Section = styled.section`
  padding: 3rem 0;
  background: ${Theme.colors.midGray};
  border-top: 1px solid ${Theme.colors.border};
  border-bottom: 1px solid ${Theme.colors.border};
  overflow: hidden;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 120px;
    z-index: 2;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, ${Theme.colors.midGray}, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, ${Theme.colors.midGray}, transparent);
  }
`

const Track = styled.div`
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: ${scroll} 20s linear infinite;

  &:hover { animation-play-state: paused; }
`

const BrandName = styled.span`
  font-family: ${Theme.fonts.display};
  font-size: 1.6rem;
  letter-spacing: 0.1em;
  color: rgba(216,220,230,0.25);
  white-space: nowrap;
  transition: color 0.3s;
  cursor: default;

  &:hover { color: ${Theme.colors.cyan}; }
`

const brands = ['EPSON', 'HP', 'XEROX', 'LEXMARK', 'SAMSUNG', 'BROTHER', 'RICOH', 'CANON']

export default function LKBrands() {
  const doubled = [...brands, ...brands]

  return (
    <Section>
      <Track>
        {doubled.map((b, i) => (
          <BrandName key={i}>{b}</BrandName>
        ))}
      </Track>
    </Section>
  )
}
