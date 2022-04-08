import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type socialLinks = {
  url: string
  label: string
}

type Review = {
  name: string
  role: string
  image: string
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Review> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(image)} loading="lazy" alt={name} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map(({ label, url }) => (
          <S.Link key={label}>
            <a href={url} title={label}>
              {icons[label]}
            </a>
          </S.Link>
        )
      )}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
