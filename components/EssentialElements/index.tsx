import { FC } from 'react'
import {
  EssentialElementsDiv,
  Strong,
  Width70Div,
  GearDiv,
  GearSeparator,
  GearNameSpan,
  GearValueSpan,
  AttributesDiv,
  ElementsDiv,
} from './EssentialElements'

import { SeparatorVertical } from '../../styles/indexStyle'

export const EssentialElement: FC = () => {
  return (
    <EssentialElementsDiv className="flex flex-col">
      <Strong>elementos essenciais</Strong>

      <div className="flex w-full">
        <GearDiv className="flex flex-col mr-4 items-center text-center">
          <GearNameSpan>gear score</GearNameSpan>
          <GearSeparator />
          <GearValueSpan>237</GearValueSpan>
        </GearDiv>

        <Width70Div className="flex flex-col">
          <AttributesDiv className="flex w-full justify-between">
            <div className="flex flex-col items-center attribute  str">
              <span>str</span>

              <span className="value-attribute">85</span>
            </div>

            <SeparatorVertical width="4rem" />

            <div className="flex flex-col items-center attribute  dex">
              <span>dex</span>

              <span className="value-attribute">37</span>
            </div>

            <SeparatorVertical width="4rem" />

            <div className="flex flex-col items-center attribute  int">
              <span>int</span>

              <span className="value-attribute">32</span>
            </div>

            <SeparatorVertical width="4rem" />

            <div className="flex flex-col items-center attribute  foc">
              <span>foc</span>

              <span className="value-attribute">0</span>
            </div>

            <SeparatorVertical width="4rem" />

            <div className="flex flex-col items-center attribute  con">
              <span>con</span>

              <span className="value-attribute">74</span>
            </div>
          </AttributesDiv>

          <div className="flex flex-col w-full">
            <ElementsDiv className="flex justify-between">
              <span className="element-spacing">Saúde</span>
              <span>3245</span>
            </ElementsDiv>

            <ElementsDiv className="flex justify-between">
              <span className="element-spacing">Regeneração de Mana</span>
              <span>100%</span>
            </ElementsDiv>

            <ElementsDiv className="flex justify-between">
              <span className="element-spacing">Redução de Tempo de Recarga</span>
              <span>0%</span>
            </ElementsDiv>
          </div>
        </Width70Div>
      </div>
    </EssentialElementsDiv>
  )
}
