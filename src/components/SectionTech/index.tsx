import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import * as S from './styles'
import icons from './content'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  SectionTecnologies: SectionTechProps
}

const SectionTech = ({ SectionTecnologies }: Props) => {
  SectionTecnologies.tecnologies.map(({ title, icon }) => {
    console.log(title)
  })

  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{SectionTecnologies.title}</Heading>
        <S.IconsContainer>
          {SectionTecnologies.tecnologies.map(({ title, icon }) => (
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