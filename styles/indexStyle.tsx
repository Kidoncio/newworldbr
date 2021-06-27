import styled from 'styled-components'

export const ContainerDiv = styled.div`
  background: rgba(0, 0, 0, 0.75);

  color: white;

  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  border-radius: 10px;

  width: 100rem;
  height: 70rem;

  padding: 3.2rem 4.8rem;

  text-transform: uppercase;

  button {
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`

export const SeparatorHorizontal = styled.div<{ width?: string }>`
  width: ${({ width }) => width || '100%'};
  height: 1px;

  content: '';

  background-color: #414141;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

export const ItemsDiv = styled.div`
  span {
    font-size: 1.4rem;
  }

  width: 45%;
  height: 60%;

  display: flex;
  flex-direction: column;
`

export const SeparatorVertical = styled.div<{ width?: string }>`
  width: ${({ width }) => width || '10rem'};
  height: 1px;

  content: '';

  background-color: #414141;

  transform: rotate(90deg);

  margin-top: auto;
  margin-bottom: auto;
`

export const IndexAttributesDiv = styled.div`
  display: flex;

  margin-top: auto;
  margin-bottom: auto;

  width: 50%;
`
