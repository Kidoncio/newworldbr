import { FC } from 'react'
import { Slider, withStyles } from '@material-ui/core'
import {
  PointsDiv,
  PointsSpanName,
  PointsSpanValue,
  PointsInput,
  PointsSpanStr,
} from './InputRangeStyle'

const InputSlider = withStyles({
  root: {
    color: '#be993e',
    height: 3,
  },
  rail: {
    color: 'gray',
    backgroundColor: 'gray',
  },
  mark: {
    backgroundColor: 'darkgray',
  },
  markActive: {
    backgroundColor: '#be993e',
  },
  thumb: {
    backgroundColor: '#be993e !important',
    color: '#be993e !important',
  },
})(Slider)

export const Attributes: FC = () => {
  return (
    <PointsDiv>
      <div>
        <PointsSpanName>Pontos disponíveis</PointsSpanName>

        <PointsSpanValue>135</PointsSpanValue>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput type="text" defaultValue="10" />

        <div className="flex flex-col w-full">
          <PointsSpanStr>força</PointsSpanStr>

          <InputSlider defaultValue={30} step={50} marks min={0} max={300} />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput type="text" defaultValue="20" />

        <div className="flex flex-col w-full">
          <PointsSpanStr>destreza</PointsSpanStr>

          <InputSlider defaultValue={30} step={50} marks min={0} max={300} />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput type="text" defaultValue="30" />

        <div className="flex flex-col w-full">
          <PointsSpanStr>inteligência</PointsSpanStr>

          <InputSlider defaultValue={30} step={50} marks min={0} max={300} />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput type="text" defaultValue="40" />

        <div className="flex flex-col w-full">
          <PointsSpanStr>foco</PointsSpanStr>

          <InputSlider defaultValue={30} step={50} marks min={0} max={300} />
        </div>
      </div>

      <div className="flex mt-4 items-center">
        <PointsInput type="text" defaultValue="50" />

        <div className="flex flex-col w-full">
          <PointsSpanStr>constituição</PointsSpanStr>

          <InputSlider defaultValue={30} step={50} marks min={0} max={300} />
        </div>
      </div>
    </PointsDiv>
  )
}
