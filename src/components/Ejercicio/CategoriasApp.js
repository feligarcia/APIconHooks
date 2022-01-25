import React, {useEffect, useState, useRef} from 'react';
import { Button } from 'react-bootstrap';
import CategoriasList from './CategoriasList';
import CategoriesAdd from './CategoriesAdd';

const CategoriasApp = () => {
        const [categorias, setCategorias] = useState([]);
        const searchref = useRef()
        const [nombre, setNombre] = useState('Horror')
        //const [stateImages, setStateImages] = useState ([]);
        const imgGif = async (nombre) =>{
          
            const url = `https://api.giphy.com/v1/gifs/search?q=${nombre}&limit=10&api_key=EORuBCNTur03nFTrrJn2P7VOe0wBQUEd`
            
            const resp = await fetch(url)
            const {data} = await resp.json()
    
            const imgData = data.map(img=>{
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })
    
            return imgData
        }
        useEffect(() => {
          imgGif(nombre)
          .then(imgDat=>setCategorias(imgDat))
          console.log(nombre)
      }, [nombre]);
    
      const handleAdd = ()=>{
        setNombre( 'Risas' )
    }


  return (
  <div>
    <h1>Componentes con hooks</h1>
      <ol>
        <CategoriesAdd setNombre={setNombre} />
        <CategoriasList  categorias={categorias} />
      </ol>
      {/* <Button variant="warning" type='button' onClick={handledAdd}>Agregar</Button> */}

  </div>);
}

export default CategoriasApp;
