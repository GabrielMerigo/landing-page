import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { SectionPrincingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

type Props = {
  SectionPrincingBox: SectionPrincingBoxProps
}

const PricingBox = ({ SectionPrincingBox }: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${SectionPrincingBox.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{SectionPrincingBox.installments}x de</span> 
        R${SectionPrincingBox.priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>
        {SectionPrincingBox.description}
      </S.BenefitsItem>
    </S.BenefitsList>

    <Button
      href={SectionPrincingBox.button.url}
      onClick={onClick}
      withPrice
    >
      <p>{SectionPrincingBox.button.label}</p>
    </Button>
  </S.Box>
)

export default PricingBox
