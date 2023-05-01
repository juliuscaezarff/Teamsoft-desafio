import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 110px;
  margin: 24px 0;


  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`
