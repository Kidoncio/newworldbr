import styled from 'styled-components'

export const WeaponsDiv = styled.div`
  span {
    font-size: 1.4rem;
  }

  -webkit-box-align: center;
  justify-content: space-between;
`

export const WeaponButton = styled.button<{
  borderColor: string
  backgroundColor: string
  gradientColor: string
}>`
  height: 6.5rem;
  width: 13.5rem;

  border: 2px solid #ba2edd;

  background-image: ${({ backgroundColor, gradientColor }) =>
    `linear-gradient(to top left, ${backgroundColor} 0%, ${gradientColor} 100%)`};
  background-image: ${({ backgroundColor, gradientColor }) =>
    `linear-gradient(top left, ${backgroundColor} 0%, ${gradientColor} 100%)`};

  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ShieldButton = styled.button`
  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    object-fit: fill;

    height: 5rem;
    width: 5rem;

    border-radius: 50%;
    border-color: lightgray;

    background-color: darkgray;
  }
  margin-top: 1rem;

  height: 5.3rem;
  width: 5.3rem;

  border-radius: 50%;
  border: 2px solid #5a5a5a;
`

export const GemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WeaponSpan = styled.span`
  height: 60%;

  margin-right: 1rem;

  text-align: center;
  align-items: center;
  display: flex;
`

export const WeaponGemDiv = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: center;
`
export const WeaponsLabel = styled.span`
  margin-bottom: 1rem;

  letter-spacing: 0.2rem;
`
