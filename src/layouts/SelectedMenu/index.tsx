import { useState } from 'react'
import { IngredientsMenu } from '../../components/Ingredients'
import { Quantityinput } from '../../components/QuantityInput'

import * as C from './styles'

export function Selectedmenu() {
  const [quantity, setQuantity] = useState(0)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    setQuantity(state => state - 1)
  }

  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)

  function handleCheckbox1Change() {
    setIsChecked1(!isChecked1)
    setIsChecked2(false)
  }

  function handleCheckbox2Change() {
    setIsChecked2(!isChecked2)
    setIsChecked1(false)
  }

  return (
    <C.SelectedMenu>
      <C.SelectedContent>
        <C.BoxText>
          <h2>Adicionar ingredientes</h2>
          <span>até 8 ingredientes</span>
        </C.BoxText>

        <IngredientsMenu text="Queijo cheddar" price="4,99" />
        <IngredientsMenu text="Cebola crispy" price="1,50" />
        <IngredientsMenu text="Molho cheddar" price="3,50" />
        <IngredientsMenu text="Molho picanha" price="3,50" />

        <C.BoxText>
          <h2>Precisa de Talher?</h2>
        </C.BoxText>

        <C.Options>
          <div>
            <p>Sim</p>
            <p>Não</p>
          </div>

          <C.Checkbox>
            <label>
              <C.InputCheckbox
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckbox1Change}
              />
            </label>
            <label>
              <C.InputCheckbox
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckbox2Change}
              />
            </label>
          </C.Checkbox>
        </C.Options>

        <C.AddToCart>
          <Quantityinput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button>Adicionar</button>
        </C.AddToCart>
      </C.SelectedContent>
    </C.SelectedMenu>
  )
}
