import styled from 'styled-components'

export const AccessoriesDiv = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
`
export const AccessoriesSpanDiv = styled.div`
  margin-bottom: 0.5rem;

  font-size: 1.4rem;
  letter-spacing: 0.2rem;
`
export const ButtonItem = styled.button<{
  borderColor: string
  backgroundColor: string
  gradientColor: string
}>`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border-width: 0.3rem;

  background-image: ${({ backgroundColor, gradientColor }) =>
    `linear-gradient(to top left, ${backgroundColor} 0%, ${gradientColor} 100%)`};
  background-image: ${({ backgroundColor, gradientColor }) =>
    `linear-gradient(top left, ${backgroundColor} 0%, ${gradientColor} 100%)`};

  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  width: 4.4rem;
  height: 4.4rem;
`
