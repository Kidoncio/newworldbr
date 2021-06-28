import styled from 'styled-components'

export const ArmorDiv = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;

  margin-bottom: 1.2rem;
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
  color: #d8d8d8;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  width: 5.8rem;
  height: 5.8rem;
`

export const ButtonGem = styled.button`
  background-color: transparent;

  border-radius: 100%;
  border-color: #707070;
  border-width: 0.2rem;

  width: 2.7rem;
  height: 2.7rem;

  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

  padding: 0.3rem;
`
export const ArmorSpanDiv = styled.div`
  margin-bottom: 0.5rem;

  font-size: 1.4rem;
  letter-spacing: 0.2rem;
`
