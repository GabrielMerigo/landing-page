import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptProps } from 'types/api'

const SectionConcepts = ({ concepts, title }: SectionConceptProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ concept }) => (
          <S.Item key={concept}>{concept}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
