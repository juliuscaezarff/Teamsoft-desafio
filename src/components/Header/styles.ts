import styled from 'styled-components'

export const HeaderContainer = styled.div`
  .Content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  background: ${({ theme }) => theme.colors['background-header']};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  @media (min-width: 1024px) {
    height: 3.6rem;
    display: flex;
    align-items: center;
  }
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  @media (min-width: 1024px) {
    margin: 0;
  }

`

export const Arrow = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`

export const HeaderContent = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const BoxAddress = styled.div`
  @media (min-width: 1024px) {
    width: 13rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;

    background: ${({ theme }) => theme.colors['base-white']};
    border-radius: 0.25rem;
  }
`

export const Address = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;

    > h3 {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors['brand-red-dark']};
    }

    > span {
      font-size: 0.75rem;
    }
  }
`

export const ArrowDown = styled.div`
  @media (min-width: 1024px) {
    color: ${({ theme }) => theme.colors['brand-red-dark']};
  }
`

export const HeaderInput = styled.div`
  @media (min-width: 1024px) {
    width: 12rem;
    height: 2.5rem;

    > input {
      width: 12rem;
      height: 100%;
      border-radius: 0.25rem;
      border: 1px solid ${({ theme }) => theme.colors['base-white']};

      &::placeholder {
        font-size: 0.6rem;
      }

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors['brand-red']};
      }
    }
  }
`

export const User = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors['brand-red-dark']};
`

export const Cart = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors['brand-red-dark']};
`
