import * as Popover from '@radix-ui/react-popover'
import { ShoppingCart } from 'phosphor-react'
import { PopoverContent, PopoverIcon } from './styles'

export function PopoverContainer() {
  return (
    <Popover.Root>
      <PopoverIcon>
      <ShoppingCart size={24} weight='bold' />
      </PopoverIcon>
      <Popover.Portal>
        <PopoverContent>
          <h1>Adicionado com Sucesso</h1>
          <h2>Oferta cheddar bacon</h2>
          <p>Ingredientes:</p>
          <ul>
            <li>1 Carne 250g</li>
            <li>2 queijo cheddar</li>
            <li>1 bacon</li>
            <li>Molho Especial</li>
          </ul>
          <Popover.Arrow fill='orange' style={{ width:"24px", height:"12px" }}/>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  )
}
