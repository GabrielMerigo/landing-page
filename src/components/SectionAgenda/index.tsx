import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionAgendaProps } from 'types/api'

type Props = {
  Agenda: SectionAgendaProps
}

const SectionAgenda = ({ Agenda }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{Agenda.title}</Heading>
    <S.Text>
      {Agenda.description}
    </S.Text>
  </Container>
)

export default SectionAgenda
