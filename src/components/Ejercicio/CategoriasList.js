import Cards from './Cards'
import React from 'react';


const CategoriasList = ({categorias}) => {
  return (
  <div>
      <h1> Lista de categorias</h1>
      {
          categorias.map((cate,index) => {
            return(
                <Cards categorias={cate} key ={index} />
 
            )
          })
      }



  </div>
  );
  
}

export default CategoriasList;
