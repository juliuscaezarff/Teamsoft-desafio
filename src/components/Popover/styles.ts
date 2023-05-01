import * as Popover from '@radix-ui/react-popover'
import styled from 'styled-components'

export const PopoverIcon = styled(Popover.Trigger)`
  border: none;
  color: ${({ theme }) => theme.colors['brand-red-dark']};
`

export const PopoverContent = styled(Popover.Content)`
  width: 238px;
  height: 210px;
  background: ${({ theme }) => theme.colors['background-popover']};
  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  @media(max-width: 1024px){
    display: none;
  }

  > h1 {
    font-weight: 700;
    font-size: 18px;
    background: ${({ theme }) => theme.colors['brand-orange-dark']};
    color: ${({ theme }) => theme.colors['base-white']};
    padding: 0.5rem;
    border-radius: 0px 0px 4px 4px;
   
  }

  > h2 {
    font-weight: 700;
    font-size: 18px;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors['brand-red-dark']};
  }

  > p {
    margin: 0 0.5rem;
  }

  > ul {
    margin: 0 1.3rem;
  }
`