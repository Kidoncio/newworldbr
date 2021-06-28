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
    height: 5,
    alignItems: 'center',
    display: 'flex',
  },
  rail: {
    color: 'gray',
    backgroundColor: '#333333',
    height: '0.3rem',
  },
  mark: {
    backgroundColor: '#000',
    width: '0.8rem',
    height: '0.8rem',
    borderRadius: '100%',
    border: '2px solid #333333',
  },
  markActive: {
    backgroundColor: '#be993e',
    border: 'none',
  },
  thumb: {
    backgroundColor: '#be993e !important',
    color: '#be993e !important',
    margin: '0',
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
