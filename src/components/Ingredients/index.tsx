import { Quantityinput } from "../QuantityInput";
import { IngredientsContainer, IngredientsContent, Ingredients } from "./styles";

export function IngredientsMenu() {
  return(
    <IngredientsContainer>
    <IngredientsContent>
      <Ingredients>
        <h3>Queijo cheddar</h3>
        <span>+ R$4,99</span>
      </Ingredients>

      <div>
        <Quantityinput />
      </div>
    </IngredientsContent>
    <hr color="#E8A634" />
  </IngredientsContainer>
  )
}