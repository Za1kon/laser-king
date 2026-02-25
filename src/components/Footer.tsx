'use client'

import styled from 'styled-components'
import { Theme } from '@/styles/theme'
import { SiteSettings } from '@/lib/sanity'

const FooterEl = styled.footer`
  background: ${Theme.colors.black};
  border-top: 1px solid ${Theme.colors.border};
  padding: 2.5rem 3rem;

  @media (max-width: 768px) { padding: 2rem 1.5rem; }
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`

const Left = styled.div``

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const ContactLine = styled.a`
  font-family: ${Theme.fonts.heading};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${Theme.colors.muted};
  transition: color 0.3s;

  &:hover { color: ${Theme.colors.cyan}; }
`

const Center = styled.div`
  text-align: center;
`

const Logo = styled.p`
  font-family: ${Theme.fonts.display};
  font-size: 2rem;
  color: ${Theme.colors.white};
  letter-spacing: 0.05em;

  span { color: ${Theme.colors.cyan}; }
`

const Copyright = styled.p`
  font-size: 0.72rem;
  color: rgba(216,220,230,0.3);
  letter-spacing: 0.1em;
  margin-top: 0.3rem;
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 768px) { justify-content: center; }
`

const SocialBtn = styled.a`
  width: 38px; height: 38px;
  border: 1px solid ${Theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all 0.3s;
  border-radius: 4px;

  &:hover {
    border-color: ${Theme.colors.cyan};
    background: rgba(0,212,255,0.1);
    transform: translateY(-2px);
  }
`

interface Props {
  settings: SiteSettings | null
}

export default function LKFooter({ settings }: Props) {
  const waLink = settings?.whatsapp ? `https://wa.me/${settings.whatsapp}` : '#'
  const fbLink = settings?.facebook || '#'
  const igLink = settings?.instagram ? `https://instagram.com/${settings.instagram}` : '#'
  const mailLink = settings?.email ? `mailto:${settings.email}` : '#'

  return (
    <FooterEl>
      <Inner>
        <Left>
          <ContactInfo>
            {settings?.phone1 && <ContactLine href={`tel:${settings.phone1}`}>{settings.phone1}</ContactLine>}
            {settings?.phone2 && <ContactLine href={`tel:${settings.phone2}`}>{settings.phone2}</ContactLine>}
            {settings?.email && <ContactLine href={mailLink}>{settings.email}</ContactLine>}
          </ContactInfo>
        </Left>

        <Center>
          <Logo>LASER <span>KING</span></Logo>
          <Copyright>© {new Date().getFullYear()} Laser King. Todos los derechos reservados.</Copyright>
        </Center>

        <Right>
          {settings?.whatsapp && (
            <SocialBtn href={waLink} target="_blank" rel="noopener" title="WhatsApp">📱</SocialBtn>
          )}
          {settings?.facebook && (
            <SocialBtn href={fbLink} target="_blank" rel="noopener" title="Facebook">📘</SocialBtn>
          )}
          {settings?.instagram && (
            <SocialBtn href={igLink} target="_blank" rel="noopener" title="Instagram">📷</SocialBtn>
          )}
          {settings?.email && (
            <SocialBtn href={mailLink} title="Email">✉️</SocialBtn>
          )}
        </Right>
      </Inner>
    </FooterEl>
  )
}
