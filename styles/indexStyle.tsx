import styled from 'styled-components'

export const ContainerDiv = styled.div`
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  width: 100rem;
  height: 60rem;
  color: white;
  padding: 3.2rem 4.8rem;
  text-transform: uppercase;

  button {
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`

export const SeparatorHorizontal = styled.div`
  width: 100%;
  content: '';
  height: 1px;
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
export const WeaponsDiv = styled.div`
  span {
    font-size: 1.4rem;
  }
  -webkit-box-align: center;
  justify-content: space-between;
`
export const ShieldButton = styled.button`
  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    height: 5rem;
    width: 5rem;
    object-fit: fill;
    border-radius: 50%;
    border-color: lightgray;
    background-color: darkgray;
  }
  height: 5.3rem;
  width: 5.3rem;
  border-radius: 50%;
  border: 2px solid #5a5a5a;
`

export const WeaponButton = styled.button<{
  borderColor: string
  backgroundColor: string
  gradientColor: string
}>`
  height: 5rem;
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

export const GemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WeaponGemDiv = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: center;
`

export const WeaponSpan = styled.span`
  height: 50%;
  margin-right: 1rem;
  text-align: center;
  align-items: center;
  display: flex;
`
export const SeparatorVertical = styled.div`
  width: 10rem;
  content: '';
  height: 1px;
  background-color: #414141;
  transform: rotate(90deg);
  margin-top: auto;
  margin-bottom: auto;
`
