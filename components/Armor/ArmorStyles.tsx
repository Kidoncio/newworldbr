import { Dialog } from '@material-ui/core'
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
  color: white;

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
export const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    background: rgba(32, 30, 30, 0.86);
    color: white;

    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    padding: 2.3rem 1.5rem;

    width: 63rem;
    height: 46rem;
  }

  .separator {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    div {
      margin-top: 0;
    }
  }

  .tier-input-div {
    justify-content: space-between;
    align-items: center;

    button {
      text-transform: uppercase;
    }
  }

  & .MuiDialogContent-root {
    overflow: hidden;
  }

  & .MuiTypography-root {
    letter-spacing: 0.1rem;
    font-weight: 700;
  }

  .div-buttons-gems {
    gap: 2rem;
    width: 100%;
    flex-wrap: wrap;
    padding: 3rem 0 1rem 0;
    overflow: auto;
  }
`

export const ButtonModalGem = styled.button`
  background-color: transparent;

  border-radius: 100%;
  border-color: #707070;
  border-width: 0.2rem;

  width: 4.15rem;
  height: 4.15rem;

  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

  padding: 0.3rem;
`

export const CancelButton = styled.button`
  background-color: #f6f6f6;
  color: black;

  border: 0;
  border-radius: 0.32rem;

  padding: 0.5rem 1rem;
  margin-left: 0.6rem;

  text-transform: uppercase;
`
