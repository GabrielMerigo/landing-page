import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'
import { SectionModulesProps } from 'types/api'

type Props = {
  Modules: SectionModulesProps
}

const SectionModules = ({ Modules }: Props) => (
  <Container>
    <Heading reverseColor>{Modules.title}</Heading>

    <S.Content>
      {Modules.modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
