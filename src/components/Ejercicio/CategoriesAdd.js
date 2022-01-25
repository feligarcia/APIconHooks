import React from 'react';
import { useState, useRef, useEffect } from 'react';

const CategoriesAdd =({setNombre}) => {

        const [search, setSearch] = useState('');
        
        const searchref = useRef()
        

        const handleSubmit = (e) =>{
                e.preventDefault()
                setNombre(nombre=> search)
                setSearch('')            
            }
            

        const handleInputChange = (e) =>{
            setSearch(e.target.value)
            
        }

        useEffect(() => {
          searchref.current.focus()
        }, []);
        

        return (
        
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    ref={searchref}
                    name="search"
                    placeholder="categorias"
                    value={search}
                    onChange={handleInputChange}
                />


                </form>
            
            </div>


        );
}

export default CategoriesAdd;
