import * as C from './styles'

import Hamburguer from '../../assets/foto.png'

export function Description() {
  return (
   
    <C.DescriptionContainer>
    <C.DescriptionContent>
      <img src={Hamburguer} />
      <h2>Oferta picanha cheddar bacon</h2>
      <div>
        <C.DescriptionText>
          Delicioso hambúrguer de picanha, molho de picanha, cebola
          crispy, bacon, queijo cheddar, molho cheddar e pão mix de
          gergelim, acompanhamento e bebida.
        </C.DescriptionText>
      </div>
      <C.Price>
        <span>R$31,99</span>
        <span>R$34,95</span>
      </C.Price>
    </C.DescriptionContent>
  </C.DescriptionContainer>
 
  )
}