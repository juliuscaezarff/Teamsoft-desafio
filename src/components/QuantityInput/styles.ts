import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-white"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors["brand-orange-dark"]};
  padding: 0.5rem;
  width: 80px;
  height: 32px;

  > input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors};

    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;

  color: ${({ theme }) => theme.colors["brand-red-dark"]}
`;