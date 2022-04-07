import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  SectionProject: SectionAboutProps
}

const SectionAboutProject = ({ SectionProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={getImageUrl(SectionProject.photo.data.attributes.url)}
            type="image/webp"
          />
          <source srcSet={getImageUrl(SectionProject.photo.data.attributes.url)} type="image/png" />
          <img
            src={getImageUrl(SectionProject.photo.data.attributes.url)}
            loading="lazy"
            alt={SectionProject.photo.data.attributes.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{SectionProject.title}</Heading>
          <S.Text>
            <p>
              {SectionProject.description}
            </p>
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
