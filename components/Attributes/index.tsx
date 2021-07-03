import { FC, useState } from 'react'
import {
  PointsDiv,
  PointsSpanName,
  PointsSpanValue,
  PointsInput,
  PointsSpanStr,
  InputSlider,
} from './InputRangeStyle'
import { useEffect } from 'react'

export const Attributes: FC = () => {
  const [valueStr, setValueStr] = useState<number>(5)
  const [valueDex, setValueDex] = useState<number>(5)
  const [valueInt, setValueInt] = useState<number>(5)
  const [valueFoc, setValueFoc] = useState<number>(5)
  const [valueCon, setValueCon] = useState<number>(5)
  const [availablePoints, setAvailablePoints] = useState<number>(190)

  useEffect(() => {
    setAvailablePoints(190 - valueStr - valueDex - valueInt - valueFoc - valueCon)
  }, [availablePoints, valueCon, valueDex, valueFoc, valueInt, valueStr])

  return (
    <PointsDiv>
      <div>
        <PointsSpanName>Pontos disponíveis</PointsSpanName>

        <PointsSpanValue>{availablePoints}</PointsSpanValue>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput
          type="text"
          value={valueStr}
          onChange={(event: any) => {
            const valueRegexNumber = event.target.value.replace(/[^.0-9]+/gm, '')
            const valueParseToNumber = Number(valueRegexNumber)

            if (valueParseToNumber < 5) {
              setValueStr(5)
            } else if (valueParseToNumber > 300) {
              setValueStr(300)
            } else {
              setValueStr(valueParseToNumber)
            }
          }}
        />

        <div className="flex flex-col w-full">
          <PointsSpanStr>força</PointsSpanStr>

          <InputSlider
            value={valueStr}
            onChange={(_event, value: number) => {
              const valueAvailable = availablePoints - value

              if (valueAvailable < 0) return

              setValueStr(value)
            }}
            step={50}
            marks
            min={5}
            max={300}
          />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput
          type="text"
          value={valueDex}
          onChange={(event: any) => {
            const valueRegexNumber = event.target.value.replace(/[^.0-9]+/gm, '')
            const valueParseToNumber = Number(valueRegexNumber)

            if (valueParseToNumber < 5) {
              setValueDex(5)
            } else if (valueParseToNumber > 300) {
              setValueDex(300)
            } else {
              setValueDex(valueParseToNumber)
            }
          }}
        />

        <div className="flex flex-col w-full">
          <PointsSpanStr>destreza</PointsSpanStr>

          <InputSlider
            value={valueDex}
            onChange={(_event, value: number) => setValueDex(value)}
            step={50}
            marks
            min={5}
            max={300}
          />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput
          type="text"
          value={valueInt}
          onChange={(event: any) => {
            const valueRegexNumber = event.target.value.replace(/[^.0-9]+/gm, '')
            const valueParseToNumber = Number(valueRegexNumber)

            if (valueParseToNumber < 5) {
              setValueInt(5)
            } else if (valueParseToNumber > 300) {
              setValueInt(300)
            } else {
              setValueInt(valueParseToNumber)
            }
          }}
        />

        <div className="flex flex-col w-full">
          <PointsSpanStr>inteligência</PointsSpanStr>

          <InputSlider
            value={valueInt}
            onChange={(_event, value: number) => setValueInt(value)}
            step={50}
            marks
            min={5}
            max={300}
          />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput
          type="text"
          value={valueFoc}
          onChange={(event: any) => {
            const valueRegexNumber = event.target.value.replace(/[^.0-9]+/gm, '')
            const valueParseToNumber = Number(valueRegexNumber)

            if (valueParseToNumber < 5) {
              setValueFoc(5)
            } else if (valueParseToNumber > 300) {
              setValueFoc(300)
            } else {
              setValueFoc(valueParseToNumber)
            }
          }}
        />

        <div className="flex flex-col w-full">
          <PointsSpanStr>foco</PointsSpanStr>

          <InputSlider
            value={valueFoc}
            onChange={(_event, value: number) => setValueFoc(value)}
            step={50}
            marks
            min={5}
            max={300}
          />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput
          type="text"
          value={valueCon}
          onChange={(event: any) => {
            const valueRegexNumber = event.target.value.replace(/[^.0-9]+/gm, '')
            const valueParseToNumber = Number(valueRegexNumber)

            if (valueParseToNumber < 5) {
              setValueCon(5)
            } else if (valueParseToNumber > 300) {
              setValueCon(300)
            } else {
              setValueCon(valueParseToNumber)
            }
          }}
        />

        <div className="flex flex-col w-full">
          <PointsSpanStr>constituição</PointsSpanStr>

          <InputSlider
            value={valueCon}
            onChange={(_event, value: number) => setValueCon(value)}
            step={50}
            marks
            min={5}
            max={300}
          />
        </div>
      </div>
    </PointsDiv>
  )
}
