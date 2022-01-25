import React, { useState, useEffect } from 'react'


const Cards = ({categorias}) => {
    
   
  return (
  <div>
      <li key={categorias.id}>
        <h3>{categorias.title}</h3>
        <img src={categorias.url} alt=""/>
      </li>

   

  </div>);
}

export default Cards;
