import styled from "styled-components"

export const IngredientsContainer = styled.div`

  padding: 0.6rem;
  margin: 0 1rem;
`

export const IngredientsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    color: ${({ theme }) => theme.colors['base-text']};
    margin-bottom: 1.8rem;
  }

  > span {
    color: ${({ theme }) => theme.colors['brand-orange']};
    margin-bottom: 1rem;
  }
`