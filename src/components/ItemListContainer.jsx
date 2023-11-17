import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'

const ItemListContainer = () => {
const {categoria} = useParams();
const productos = [
  {id: 1, titulo: 'Intel i5 10400f', descripcion: 'desripcion del producto A', precio: 1000, categoria: 'Procesadores', imagen:'../src/assets/img/Inteli510400f.webp'},
  {id: 2, titulo: 'Ryzen 5 5600G', descripcion: 'desripcion del producto B', precio: 1500, categoria: 'Procesadores', imagen:'../src/assets/img/Ryzen-5-5600G.jpg'},
  {id: 3, titulo: 'Kingston fury 8gb', descripcion: 'desripcion del producto C', precio: 2000, categoria: 'Memoria RAM', imagen:'../src/assets/img/KingstonFury8gb.jpg'},
  {id: 4, titulo: 'Gygabyte B550M K', descripcion: 'desripcion del producto D', precio: 2500, categoria: 'Motherboard', imagen:'../src/assets/img/gigabyte_b550m_h.jpg'},
  {id: 5, titulo: 'ASUS A320M-K', descripcion: 'desripcion del producto E', precio: 3000, categoria: 'Motherboard', imagen:'../src/assets/img/ASUSA320MK.jpg'}
]

const mostrarProductos = new Promise ((resolve,rejected) => {
  if(productos.length > 0) {
    setTimeout(()=> {
      resolve(productos)
    },2000)
  } else {
    rejected("No se encontaron productos")
  }
})

mostrarProductos
.then((resultado) => {
  console.log(resultado)
})
.catch((error) => {
  console.log(error)  
})

const filteredProducts = productos.filter((producto)=> producto.categoria === categoria)

  return (
    <div>
      <Center>
        <ItemList productos={categoria === undefined ? productos : filteredProducts} /> 
      </Center>
    </div>
  )
}

export default ItemListContainer