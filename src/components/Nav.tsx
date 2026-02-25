'use client'

import styled from 'styled-components'
import { Theme } from '@/styles/theme'
import { useState, useEffect } from 'react'

const NavBar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.4s, border-color 0.4s;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(12,12,14,0.97)' : 'transparent'};
  border-bottom: 1px solid ${({ $scrolled }) => $scrolled ? Theme.colors.border : 'transparent'};
  backdrop-filter: blur(8px);

  @media (max-width: 768px) { padding: 1rem 1.5rem; }
`

const Logo = styled.a`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  font-family: ${Theme.fonts.display};
  font-size: 1.8rem;
  letter-spacing: 0.05em;
  color: ${Theme.colors.white};

  span {
    color: ${Theme.colors.cyan};
  }
`

const Links = styled.ul<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: rgba(12,12,14,0.99);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
    transition: opacity 0.3s;
    z-index: 100;
    gap: 2rem;
  }
`

const NavLink = styled.a`
  font-family: ${Theme.fonts.heading};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${Theme.colors.cream};
  transition: color 0.3s;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0;
    width: 0; height: 2px;
    background: ${Theme.colors.cyan};
    transition: width 0.3s;
  }

  &:hover {
    color: ${Theme.colors.cyan};
    &::after { width: 100%; }
  }

  @media (max-width: 768px) { font-size: 1.2rem; }
`

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-right: 1rem;

  @media (max-width: 768px) { display: none; }
`

const IconLink = styled.a`
  width: 34px; height: 34px;
  border: 1px solid ${Theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s;
  border-radius: 4px;

  &:hover {
    border-color: ${Theme.colors.cyan};
    background: rgba(0,212,255,0.1);
  }
`

const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  z-index: 102;
  padding: 4px;
  position: relative;

  span {
    display: block;
    width: 24px; height: 2px;
    background: ${Theme.colors.cyan};
    transition: all 0.3s;
  }

  ${({ $open }) => $open && `
    span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  `}

  @media (max-width: 768px) { display: flex; }
`

const NavRight = styled.div`
  display: flex;
  align-items: center;
`

export default function LKNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <NavBar $scrolled={scrolled}>
      <Logo href="#home">
        LASER <span>KING</span>
      </Logo>

      <NavRight>
        <SocialIcons>
          <IconLink href="https://wa.me/" target="_blank" rel="noopener" title="WhatsApp">📱</IconLink>
          <IconLink href="mailto:" title="Email">✉️</IconLink>
        </SocialIcons>

        <Links $open={open}>
          <li><NavLink href="#services" onClick={() => setOpen(false)}>Servicios</NavLink></li>
          <li><NavLink href="#about" onClick={() => setOpen(false)}>Sobre Nosotros</NavLink></li>
          <li><NavLink href="#contact" onClick={() => setOpen(false)}>Contacto</NavLink></li>
        </Links>

        <Hamburger $open={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </Hamburger>
      </NavRight>
    </NavBar>
  )
}
