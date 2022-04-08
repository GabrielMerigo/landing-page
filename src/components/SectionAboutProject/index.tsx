import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({ description, photo, title }: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(photo.data.attributes.url)}
          alt={photo.data.attributes.alternativeText}
          loading="lazy"
        />

        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
