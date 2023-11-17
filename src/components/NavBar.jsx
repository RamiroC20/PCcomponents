import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex backgroundColor='green.500' p={2}>
            <Box ml={2} >
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices-2" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
                        <path d="M13 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                        <path d="M7 19l3 0" />
                        <path d="M17 8l0 .01" />
                        <path d="M17 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M9 15l0 4" />
                    </svg>
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton mt={1} color='white' fontSize='xl'>
                            Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to={`/categoria/${'Procesadores'}`}>
                                Procesadores
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${'Memoria RAM'}`}>
                                Memoria RAM
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${'Motherboard'}`}>
                                Motherboard
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box mr={2}>
                <Link to={'/cart'}>
                    <CartWidget/>
                </Link>
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar