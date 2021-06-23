import { Slider, withStyles } from '@material-ui/core'

const InputRange = withStyles({
  root: {
    color: '#fdf063',
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
    backgroundColor: '#dbd055',
  },
  thumb: {
    backgroundColor: '#fdf063 !important',
    color: '#fdf063 !important',
  },
})(Slider)

export default InputRange
