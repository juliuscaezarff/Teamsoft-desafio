import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer, IconWrapper } from './styles'

export function Quantityinput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus size={15} weight="bold" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={15} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
