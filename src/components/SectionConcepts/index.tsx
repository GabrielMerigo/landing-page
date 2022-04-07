import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptProps } from 'types/api'

type Props = {
  SectionConception: SectionConceptProps
}

const SectionConcepts = ({ SectionConception }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{SectionConception.title}</Heading>
      <S.List>
        {SectionConception.concepts.map(({ concept }) => (
          <S.Item key={concept}>{concept}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
