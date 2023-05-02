import { useState } from 'react'
import { Quantityinput } from '../QuantityInput'

import * as C from './styles'

interface IngredientsMenuProps {
  text: string
  price: string
}

export function IngredientsMenu({ text, price }: IngredientsMenuProps) {
  const [quantity, setQuantity] = useState(0)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    setQuantity(state => state - 1)
  }
  return (
    <C.IngredientsContainer>
      <C.IngredientsContent>
        <C.Ingredients>
          <h3>{text}</h3>
          <span>+ R$ {price}</span>
        </C.Ingredients>

        <div>
          <Quantityinput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
        </div>
      </C.IngredientsContent>
      <hr color="#E8A634" />
    </C.IngredientsContainer>
  )
}
