import styled from 'styled-components'

export const ArmorDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
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
  width: 6.4rem;
  height: 6.4rem;
`

export const ButtonGem = styled.button<{ gemColor: string }>`
  border-radius: 100%;
  background-color: transparent;
  border-color: #707070;
  border-width: 0.3rem;
  width: 3rem;
  height: 3rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.3rem;
  color: ${({ gemColor }) => gemColor};
`
export const ArmorSpanDiv = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
`
