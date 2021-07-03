import { Slider, withStyles } from '@material-ui/core'
import styled from 'styled-components'

export const PointsDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  margin-right: 2rem;
`

export const PointsSpanName = styled.span`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;

  margin-right: 0.7rem;
`
export const PointsSpanValue = styled.span`
  font-size: 2.4rem;

  color: #be993e;
`
export const PointsInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 4.5rem;

  background-color: rgba(0, 0, 0, 0.3);

  text-align: center;
  font-size: 1.4rem;

  margin-right: 1rem;

  padding: 0.3rem 0.6rem;
`
export const PointsSpanStr = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
`
export const InputSlider = withStyles({
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
