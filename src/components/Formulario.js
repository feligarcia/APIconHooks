import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const Formulario =() => {
    const [data, setData] = useState({
        nombre:'',
        email:''


    });

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

const handleInputChange = ({target}) =>{
    console.log(target)
    setData({
        ...data,
        [target.name]: target.value
    })
}

useEffect(() => {
  console.log('el component se monto')

  return () => {
    console.log('el componente se desmonto');
  };
},[data.nombre]);





    return(
    <div>
    <h1>Formulario de registro</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
         
<Form.Control type="text" placeholder="Enter name" name="nombre" value={data.nombre} onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="button">
            Enviar
        </Button>
    </Form>
</div>
);
}

export default Formulario;
