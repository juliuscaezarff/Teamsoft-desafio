import * as C from './styles'

import Logo from '../../assets/logo.svg'
import { CaretLeft, CaretDown, UserCircle } from 'phosphor-react'
import { PopoverContainer } from '../Popover'

export function Header() {
  return (
    <C.HeaderContainer>
      <div className='Content'>
        <C.Arrow>
          <CaretLeft />
        </C.Arrow>
        <C.Image src={Logo} />

        <C.HeaderContent>
          <C.BoxAddress>
            <C.Address>
              <h3>Entrega:</h3>
              <span>R. Antonio Braune, 222</span>
            </C.Address>
            <C.ArrowDown>
              <CaretDown size={15} weight="bold" />
            </C.ArrowDown>
          </C.BoxAddress>

          <C.HeaderInput>
            <input
              type="text"
              placeholder="Busque por estabelecimentos ou produtos"
            />
          </C.HeaderInput>

          <C.User>
            <UserCircle  size={24} weight='bold'/>
            <p>Entrar</p>
          </C.User>

          <C.Cart>
            <span>1</span>
            <PopoverContainer />
            <p>Carrinho</p>
          </C.Cart>
        </C.HeaderContent>
      </div>
    </C.HeaderContainer>
  )
}
