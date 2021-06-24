import { FC } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { BonusSpan, BonusDiv, BonusNameSpan, BonusAndPassivesDiv } from './BonusAndPassives'

export const BonusAndPassives: FC = () => {
  return (
    <BonusAndPassivesDiv>
      <strong style={{ fontSize: '1rem', marginBottom: '2rem' }}>bônus e passivas</strong>
      <BonusDiv>
        <BonusNameSpan>atributos</BonusNameSpan>

        <span style={{ marginRight: '1rem' }}>
          <RiArrowRightSLine />
        </span>

        <BonusSpan>
          <span className="text-red">+15% de dano</span> em ataques leves de armas corpo a corpo.
          +10 de velocidade de mineração. <span className="text-red">+20% de dano</span> em ataques
          pesados de armas corpo a corpo. +20 pontos de carga.
        </BonusSpan>
      </BonusDiv>

      <BonusDiv>
        <BonusNameSpan>Armadura</BonusNameSpan>

        <span style={{ marginRight: '1rem' }}>
          <RiArrowRightSLine />
        </span>

        <BonusSpan>
          <span className="text-red">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit,
          sed do eslusmod tempor incididunt ut labore et dolore magna aliqua. Ut enin
          <span className="text-red"> minim veniam</span>, quis nostryud exercitation ullamino.
        </BonusSpan>
      </BonusDiv>
    </BonusAndPassivesDiv>
  )
}
