import styled from 'styled-components'

export const ContainerDiv = styled.div`
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  width: 80rem;
  height: 55rem;
  color: white;
  padding: 3.2rem 4.8rem;
`
export const SeparatorDiv = styled.div`
  width: 1.5rem;
  content: '';
  height: 1px;
  background-color: red;
  transform: rotate(90deg);
`
export const DirectoryDiv = styled.div`
  svg {
    width: auto;
  }
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    width: auto;
  }

  input {
    width: 40%;
    margin-right: 0.8rem;
    background-color: transparent;
  }
`

export const SaveButton = styled.button`
  background-color: #fdf063;
  border: 0;
  border-radius: 0.32rem;
  padding: 0 0.8rem;
  margin-left: 0.6rem;
`

export const IconButton = styled.button<{ marginRight?: string }>`
  background-color: black;
  width: fit-content;
  padding: 0.4rem;
  margin-right: ${({ marginRight }) => marginRight};
`
export const AxeDiv = styled.div`
  svg {
    margin-right: 1.5rem;
  }
`
