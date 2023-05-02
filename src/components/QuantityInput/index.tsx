import { Minus, Plus } from 'phosphor-react'

import * as C from './styles'

interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Quantityinput({
  onIncrease,
  onDecrease,
  quantity
}: QuantityInputProps) {
  return (
    <C.QuantityInputContainer>
      <C.IconWrapper disabled={quantity <= 0} onClick={onDecrease}>
        <Minus size={15} weight="bold" />
      </C.IconWrapper>
      <input type="number" readOnly value={quantity} />
      <C.IconWrapper onClick={onIncrease}>
        <Plus size={15} weight="bold" />
      </C.IconWrapper>
    </C.QuantityInputContainer>
  )
}
