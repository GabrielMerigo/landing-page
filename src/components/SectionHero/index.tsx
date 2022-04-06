import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { HeaderProps, LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })


type Props = {
  logo: LogoProps,
  SectionHeader: HeaderProps
}

const SectionHero = ({ logo, SectionHeader }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{SectionHeader.title}</S.Title>
          <S.Description>
            {SectionHeader.description}
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href={SectionHeader.button.url}
              onClick={onClick}
              wide
            >
              {SectionHeader.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(SectionHeader.image.data.attributes.url)}
          alt={SectionHeader.image.data.attributes.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
