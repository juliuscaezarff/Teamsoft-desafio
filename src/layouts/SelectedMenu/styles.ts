import styled from 'styled-components'

export const SelectedMenu = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-width: 440px;
    border-radius: 8px;
    border: 1px solid gray;
  }
`

export const SelectedContent = styled.div`

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`

export const BoxText = styled.div`
  height: 3.5rem;
  background: ${({ theme }) => theme.colors['brand-orange-light']};
  padding: 0.6rem;
  margin: 0 1rem;
  border-radius: 0.2rem;

  > h2 {
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  > span {
    color: ${({ theme }) => theme.colors['brand-orange']};
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
  margin: 0 0.5rem;
`

export const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  > input[type='checkbox'] {
    appearance: none;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors['brand-orange']};
    width: 1rem;
    height: 1rem;
  }

  > input[type='checkbox']:checked {
    background: ${({ theme }) => theme.colors['brand-orange']};
    border: none;
  }
`

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  padding: 0.6rem;
  margin: 0 0.5rem;

  > div {
    width: 130px;
    height: 2.5rem;
  }

  > button {
    width: 12rem;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors['brand-orange']};
    border: none;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors['base-white']};
  }
`