import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { AboutUsProps } from 'types/api'

type Props = {
  AboutUs: AboutUsProps
}

const SectionAboutUs = ({ AboutUs }: Props) => {

  return (
    <Container>
    <Heading reverseColor>{AboutUs.title}</Heading>

    <S.Content>
      {AboutUs.authors.data.map((author) => (
        <ProfileCard
          key={author.attributes.name}
          name={author.attributes.name}
          role={author.attributes.rule}
          image={author.attributes.photo.data.attributes.url}
          socialLinks={author.attributes.links}
          description={author.attributes.description}
        />
      ))}
    </S.Content>
  </Container>
  )
}

export default SectionAboutUs
