import React from 'react'

const TablaContactos = ({ contactos = [], dispatch }) => {

    const handleDelete = (id) => {
        console.log('eliminando contacto con id: ', id)
        dispatch({
            type: 'delete',
            payload: {
                id
            }
        })
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Acción</th>

                </tr>
            </thead>
            <tbody>
                {contactos.map(contacto => (
                    <tr key={contacto.id}>
                        <td>{contacto.id}</td>
                        <td>{contacto.nombre}</td>
                        <td>{contacto.telefono}</td>
                        <td>
                            <button onClick={()=>handleDelete(contacto.id)} className='btn btn-danger'>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TablaContactos
