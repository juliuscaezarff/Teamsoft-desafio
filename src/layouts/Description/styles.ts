import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  padding: 0.3rem;
  margin: 0 0.3rem;

  @media (min-width: 1024px) {
    max-width: 600px;
  }
`

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h2 {
    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    }
  }
`

export const DescriptionText = styled.div`
  font-size: ${({ theme }) => theme.textSizes['text-regular-description']};
  color: ${({ theme }) => theme.colors['base-text']};

  @media (min-width: 1024px) {
    font-size: 1rem;
    margin: 30px 0;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  font-size: ${({ theme }) => theme.textSizes['title-title-l']};

  > span:first-child {
    color: ${({ theme }) => theme.colors['brand-orange']};
  }

  > span:last-child {
    text-decoration: line-through;
  }
`
