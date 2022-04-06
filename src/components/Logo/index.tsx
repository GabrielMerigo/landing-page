import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ data }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(data.attributes.url)} alt={data.attributes.alternativeText} />
)


export default Logo