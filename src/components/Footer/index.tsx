import React from 'react'

import Container from 'components/Container'

import * as S from './styles'
import { FooterProps } from 'types/api'

type Props = {
  FooterSection: FooterProps
}

const Footer = ({ FooterSection }: Props) => (
  <S.Wrapper>
    <Container>
      <p>
        {FooterSection.description}
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
