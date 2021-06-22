import ReactAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'

configure({ adapter: new ReactAdapter() })
