import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { Card,Image,Stack,CardBody,Heading,Text,CardFooter } from '@chakra-ui/react';

const ItemDetail = ({productos}) => {

  const {id} = useParams();

  const filteredProducts = productos.filter((producto)=> producto.id == id)

  return (
    <div>
      {filteredProducts.map((p)=> {
        return (
          <div key={p.id}>
                 <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '300px' }}
                      src={p.imagen}
                      alt='Caffe Latte'
                    />

                    <Stack>
                      <CardBody>
                        <Heading size='md'>{p.titulo} </Heading>

                        <Text py='2'>
                          {p.descripcion}
                        </Text>
                        <Text py='2'>
                          {p.categoria}
                        </Text>
                        <Text py='2'>
                          {p.precio}
                        </Text>
                      </CardBody>

                      <CardFooter>
                        <ItemCount/>
                      </CardFooter>
                    </Stack>
                </Card>     
          </div>
          ) 
      })}
    </div>
  )
}

export default ItemDetail