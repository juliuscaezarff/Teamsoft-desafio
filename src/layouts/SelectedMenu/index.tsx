import { IngredientsMenu } from '../../components/Ingredients'
import { Quantityinput } from '../../components/QuantityInput'
import {
  AddToCart,
  BoxText,
  Checkbox,
  Options,
  SelectedContent,
  SelectedMenu
} from './styles'

export function Selectedmenu() {
  return (
    <SelectedMenu>
      <SelectedContent>
        <BoxText>
          <h2>Adicionar ingredientes</h2>
          <span>até 8 ingredientes</span>
        </BoxText>

        <IngredientsMenu />
        <IngredientsMenu />
        <IngredientsMenu />
        <IngredientsMenu />

        <BoxText>
          <h2>Precisa de Talher?</h2>
        </BoxText>

        <Options>
          <div>
            <p>Sim</p>
            <p>Não</p>
          </div>

          <Checkbox>
            <input type="checkbox" />
            <input type="checkbox" />
          </Checkbox>
        </Options>

        <AddToCart>
          <Quantityinput />
          <button>Adicionar</button>
        </AddToCart>
      </SelectedContent>
    </SelectedMenu>
  )
}
