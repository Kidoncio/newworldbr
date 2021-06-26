import styled from 'styled-components'

export const BonusSpan = styled.span`
  text-transform: none;
  font-size: 1.15rem;
  color: #9c9b9b;

  span.text-red {
    color: red;
  }
`

export const BonusDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const BonusNameSpan = styled.span`
  margin-right: 1rem;
  font-size: 1.25rem;
  color: #9c9b9b;
`

export const BonusAndPassivesDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.3rem;
  width: 45%;
  height: 12.75rem;

  .div-overflow {
    overflow: auto;
  }

  .span-margin {
    margin-right: 1rem;
    padding-top: 0.37rem;
  }
`
