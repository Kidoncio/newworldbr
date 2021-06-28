import { Dialog } from '@material-ui/core'
import styled from 'styled-components'

export const StyledDialog = styled(Dialog)`
  & .gem-title {
    font-weight: 700;
  }

  & .MuiPaper-root {
    background: rgba(32, 30, 30, 0.86);
    color: #d8d8d8;

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
  background-color: #d8d5d0;
  color: black;

  letter-spacing: 0.1rem;

  border: 0;
  border-radius: 0.32rem;

  padding: 0.5rem 1rem;
  margin-left: 0.6rem;

  text-transform: uppercase;
`
