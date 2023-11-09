import React from 'react'
import { Badge, Button } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
        <Button colorScheme='blackAlpha'>Carrito</Button>
        <Badge ml={5}>3</Badge>
    </div>
  )
}

export default CartWidget