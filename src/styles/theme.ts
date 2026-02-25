'use client'

import { createGlobalStyle } from 'styled-components'

export const Theme = {
  colors: {
    black: '#0c0c0e',
    darkGray: '#131318',
    midGray: '#1e1e28',
    lightGray: '#2a2a38',
    cyan: '#00d4ff',
    cyanDim: '#0099bb',
    yellow: '#f5c400',
    yellowDim: '#c49a00',
    white: '#f0f2f5',
    cream: '#d8dce6',
    muted: 'rgba(216,220,230,0.5)',
    border: 'rgba(0,212,255,0.15)',
    borderWarm: 'rgba(245,196,0,0.2)',
  },
  fonts: {
    display: "'Bebas Neue', sans-serif",
    heading: "'Barlow Condensed', sans-serif",
    body: "'Barlow', sans-serif",
  },
}

export type Theme = typeof Theme

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    background: ${Theme.colors.black};
    color: ${Theme.colors.cream};
    font-family: ${Theme.fonts.body};
    overflow-x: hidden;
  }

  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; }
  img { max-width: 100%; display: block; }
`
