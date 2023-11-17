import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    
  return (
    <div>
        { 
          productos.map((p)=>{
          return (
            <div key={p.id}>
              <Item titulo={p.titulo} precio={p.precio} id={p.id} imagen={p.imagen}/>
            </div>
                )    
            })
        }  
    </div>

    
  )
}

export default ItemList