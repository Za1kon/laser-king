'use client'

import styled from 'styled-components'
import { Theme } from '@/styles/theme'
import { SiteSettings } from '@/lib/sanity'

const Section = styled.section`
  padding: 7rem 3rem;
  background: ${Theme.colors.darkGray};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${Theme.colors.cyan}, transparent);
  }

  @media (max-width: 768px) { padding: 5rem 1.5rem; }
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

const Grid = styled.div<{ $cols: number }>`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols === 2 ? '1fr 1.4fr' : '1fr'};
  gap: 3rem;
  max-width: ${({ $cols }) => $cols === 2 ? '1000px' : '600px'};
  margin: 0 auto;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const InfoCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.5rem;
  background: ${Theme.colors.midGray};
  border: 1px solid ${Theme.colors.border};
  color: ${Theme.colors.cream};
  transition: all 0.3s;

  &:hover {
    border-color: ${Theme.colors.cyan};
    background: ${Theme.colors.lightGray};
    transform: translateX(4px);
  }
`

const InfoIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`

const InfoContent = styled.div``

const InfoLabel = styled.p`
  font-family: ${Theme.fonts.heading};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${Theme.colors.cyan};
  margin-bottom: 0.2rem;
`

const InfoValue = styled.p`
  font-size: 0.95rem;
  color: ${Theme.colors.cream};
  font-weight: 300;
`

const FormCol = styled.div``

const Form = styled.form`
  background: ${Theme.colors.midGray};
  border: 1px solid ${Theme.colors.border};
  padding: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 3px;
    background: linear-gradient(to right, ${Theme.colors.cyan}, transparent);
  }
`

const FormTitle = styled.h3`
  font-family: ${Theme.fonts.display};
  font-size: 1.8rem;
  color: ${Theme.colors.white};
  margin-bottom: 0.4rem;
`

const FormSubtitle = styled.p`
  font-size: 0.88rem;
  color: ${Theme.colors.muted};
  margin-bottom: 2rem;
  font-weight: 300;
`

const FormGroup = styled.div`
  margin-bottom: 1rem;

  input, textarea {
    width: 100%;
    background: ${Theme.colors.black};
    border: 1px solid ${Theme.colors.border};
    color: ${Theme.colors.cream};
    padding: 0.85rem 1rem;
    font-family: ${Theme.fonts.body};
    font-size: 0.95rem;
    font-weight: 300;
    outline: none;
    transition: border-color 0.3s;

    &::placeholder { color: rgba(216,220,230,0.3); }
    &:focus { border-color: ${Theme.colors.cyan}; }
  }

  textarea { resize: vertical; min-height: 110px; }
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) { grid-template-columns: 1fr; }
`

const SubmitBtn = styled.button<{ $sent: boolean }>`
  width: 100%;
  padding: 1rem;
  background: ${({ $sent }) => $sent ? '#2ecc71' : Theme.colors.cyan};
  color: ${Theme.colors.black};
  border: none;
  font-family: ${Theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  transition: all 0.3s;
  margin-top: 0.5rem;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));

  &:hover:not(:disabled) {
    background: ${({ $sent }) => $sent ? '#27ae60' : Theme.colors.white};
    box-shadow: 0 0 30px rgba(0,212,255,0.3);
  }

  &:disabled { opacity: 0.7; cursor: not-allowed; }
`

interface Props {
  settings: SiteSettings | null
}

export default function LKContact({ settings }: Props) {
  const waLink = settings?.whatsapp ? `https://wa.me/${settings.whatsapp}` : '#'
  const fbLink = settings?.facebook || '#'

  const hasInfo = !!(settings?.whatsapp || settings?.phone1 || settings?.phone2 || settings?.email || settings?.facebook || settings?.address)

  return (
    <Section id="contact">
      <Inner>
        <Header>
          <Tag>▶ Hablemos</Tag>
          <Title>CONTACTANOS</Title>
          <Subtitle>
            ¿Tenés preguntas o necesitás una cotización? Comunicate con nosotros.
          </Subtitle>
        </Header>

        <Grid $cols={hasInfo ? 2 : 1}>
          {hasInfo && (
            <InfoCol>
              {settings?.whatsapp && (
                <InfoCard href={waLink} target="_blank" rel="noopener">
                  <InfoIcon>📱</InfoIcon>
                  <InfoContent>
                    <InfoLabel>WhatsApp</InfoLabel>
                    <InfoValue>+{settings.whatsapp}</InfoValue>
                  </InfoContent>
                </InfoCard>
              )}
              {settings?.phone1 && (
                <InfoCard href={`tel:${settings.phone1}`}>
                  <InfoIcon>📞</InfoIcon>
                  <InfoContent>
                    <InfoLabel>Teléfono</InfoLabel>
                    <InfoValue>{settings.phone1}</InfoValue>
                  </InfoContent>
                </InfoCard>
              )}
              {settings?.phone2 && (
                <InfoCard href={`tel:${settings.phone2}`}>
                  <InfoIcon>📞</InfoIcon>
                  <InfoContent>
                    <InfoLabel>Teléfono 2</InfoLabel>
                    <InfoValue>{settings.phone2}</InfoValue>
                  </InfoContent>
                </InfoCard>
              )}
              {settings?.email && (
                <InfoCard href={`mailto:${settings.email}`}>
                  <InfoIcon>✉️</InfoIcon>
                  <InfoContent>
                    <InfoLabel>Email</InfoLabel>
                    <InfoValue>{settings.email}</InfoValue>
                  </InfoContent>
                </InfoCard>
              )}
              {settings?.facebook && (
                <InfoCard href={fbLink} target="_blank" rel="noopener">
                  <InfoIcon>📘</InfoIcon>
                  <InfoContent>
                    <InfoLabel>Facebook</InfoLabel>
                    <InfoValue>Laser King</InfoValue>
                  </InfoContent>
                </InfoCard>
              )}
              {settings?.address && (
                <InfoCard as="div">
                  <InfoIcon>📍</InfoIcon>
                  <InfoContent>
                    <InfoLabel>Dirección</InfoLabel>
                    <InfoValue>{settings.address}</InfoValue>
                  </InfoContent>
                </InfoCard>
              )}
            </InfoCol>
          )}

          <FormCol>
            <Form
              action="https://formsubmit.co/ventas@laserking.com.ar"
              method="POST"
            >
              <input type="hidden" name="_next" value="https://laserking.com.ar/" />
              <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio web" />
              <input type="hidden" name="_captcha" value="true" />

              <FormTitle>ENVIANOS UN MENSAJE</FormTitle>
              <FormSubtitle>Te respondemos a la brevedad</FormSubtitle>

              <FormRow>
                <FormGroup>
                  <input type="text" name="name" placeholder="Nombre" required />
                </FormGroup>
                <FormGroup>
                  <input type="email" name="email" placeholder="Email" required />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <input type="tel" name="phone" placeholder="Teléfono (opcional)" />
              </FormGroup>
              <FormGroup>
                <textarea name="message" placeholder="Tu mensaje..." required />
              </FormGroup>
              <SubmitBtn type="submit" $sent={false}>
                ▶ Enviar mensaje
              </SubmitBtn>
            </Form>
          </FormCol>
        </Grid>
      </Inner>
    </Section>
  )
}