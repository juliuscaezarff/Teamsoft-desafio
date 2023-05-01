import { DescriptionContainer, DescriptionContent, DescriptionText, Price } from "./styles"

import Hamburguer from '../../assets/foto.png'

export function Description() {
  return (
   
    <DescriptionContainer>
    <DescriptionContent>
      <img src={Hamburguer} />
      <h2>Oferta picanha cheddar bacon</h2>
      <div>
        <DescriptionText>
          Delicioso hambúrguer de picanha, molho de picanha, cebola
          crispy, bacon, queijo cheddar, molho cheddar e pão mix de
          gergelim, acompanhamento e bebida.
        </DescriptionText>
      </div>
      <Price>
        <span>R$31,99</span>
        <span>R$34,95</span>
      </Price>
    </DescriptionContent>
  </DescriptionContainer>
 
  )
}