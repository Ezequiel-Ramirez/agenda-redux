import React, { useState } from 'react'

const FormularioAdd = ({ dispatch }) => {
    const [data, setData] = useState({ nombre: '', telefono: '' })
    const { nombre, telefono } = data;

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const actionAdd = {
        type: 'add',
        payload: {
            id: new Date().getTime(),
            nombre,
            telefono,
        }
    }

    const handleAdd = () => {
        if (nombre === '' || telefono === '') {
            return
        }
        dispatch(actionAdd);
        setData({ nombre: '', telefono: '' })
    }

    return (
        <div className='container'>
            <label className='mx-1 d-grid gap-2'>Nombre: {" "} <input onChange={handleChange} name='nombre' value={nombre} type="text" className='form-control' autoComplete='off' placeholder='Ingrese un Nombre' /> </label>
            <label className='mx-1 d-grid gap-2'>Numero: {" "} <input onChange={handleChange} name='telefono' value={telefono} type="text" className='form-control' autoComplete='off' placeholder='Ingrese un Teléfono' /> </label>
            <div className='mx-1 d-grid gap-2'> <button  className='btn btn-info mt-2' onClick={handleAdd}>Agregar</button> </div>

        </div>
    )
}

export default FormularioAdd
