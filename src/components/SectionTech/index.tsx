import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, tecnologies }: SectionTechProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {tecnologies.map(({ title, icon }) => (
            <S.Icon key={title}>
              <S.Icons
                src={getImageUrl(icon.data.attributes.url)}
                alt={icon.data.attributes.alternativeText}
                loading="lazy"
              />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  )
}

export default SectionTech