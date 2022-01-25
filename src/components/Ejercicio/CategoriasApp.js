import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import CategoriasList from './CategoriasList';
import CategoriesAdd from './CategoriesAdd';

const CategoriasApp = () => {
        const [categorias, setCategorias] = useState(['Horror']);
        
        //const [stateImages, setStateImages] = useState ([]);
        const imgGif = async () =>{
            const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=10&api_key=EORuBCNTur03nFTrrJn2P7VOe0wBQUEd`
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
          imgGif(categorias)
          .then(imgDat=>setCategorias(imgDat))
      }, [categorias]);
    



  return (
  <div>
    <h1>Componentes con hooks</h1>
      <ol>
        <CategoriesAdd setCategorias={setCategorias} />
        <CategoriasList  categorias={categorias} />
      </ol>
      {/* <Button variant="warning" type='button' onClick={handledAdd}>Agregar</Button> */}

  </div>);
}

export default CategoriasApp;
