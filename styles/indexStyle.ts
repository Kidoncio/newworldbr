import styled from 'styled-components'

export const ContainerDiv = styled.div`
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  min-width: 500px;
  min-height: 500px;
  color: white;
`
export const SeparatorDiv = styled.div`
  width: 1px;
  content: '';
  height: 1px;
  background-color: red;
  transform: rotate(90deg);
`
