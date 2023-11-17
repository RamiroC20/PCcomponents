import React from 'react'
import { Card,CardBody,Image,Stack,Heading,Text,ButtonGroup,Button,Divider,CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({titulo,precio,id,imagen}) => {
  return (
          <Card maxW='sm'>
            <CardBody>
              <Image
                maxW='300px'
                src={imagen}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{titulo} </Heading>
                <Text color='blue.600' fontSize='2xl'>
                  ${precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  <Link to={`/item/${id}`}>
                    Detalle
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
  )
}

export default Item