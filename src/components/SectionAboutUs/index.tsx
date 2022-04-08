import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { AboutUsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: AboutUsProps) => {

  return (
    <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.data.map((author) => (
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
