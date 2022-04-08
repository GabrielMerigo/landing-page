import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { SectionPrincingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ 
  totalPrice, 
  installments, 
  priceInstallment,
  description,
  button
}: SectionPrincingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{installments}x de</span> 
        R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: description }} />

    <Button
      href={button.url}
      onClick={onClick}
      withPrice
    >
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${installments * priceInstallment}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
