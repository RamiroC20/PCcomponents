import React from 'react'
import { useState } from 'react'
import { Button, Badge, useToast  } from '@chakra-ui/react'


const ItemCount = () => {

const [count, setCount] = useState(0) 

const toast = useToast()

const agregarAlCarrito = () => {
    toast({
        title: 'Felicitaciones',
        description: `Has agregado ${count} productos a tu carrito`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
} 


  return (
    <div>
        <Button colorScheme='green' variant='outline'onClick={() => setCount(count + 1) } >
            +
        </Button>
        <Badge variant='solid' colorScheme='green'>
            {count}
        </Badge>
        <Button colorScheme='green' variant='outline'onClick={() => setCount(count - 1) } >
            -
        </Button>
        <Button colorScheme='green' onClick={agregarAlCarrito}>
            Agregar al carrito
        </Button>
    </div>
  )
}

export default ItemCount