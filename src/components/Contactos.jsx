import React, { useEffect, useReducer, useState } from 'react'

import { ContactosReducer } from '../reducers/ContactosReducer'
import FormularioAdd from './FormularioAdd'
import TablaContactos from './TablaContactos'

const init = () => {
    const contactos = JSON.parse(localStorage.getItem('contactos'))
    return contactos ? contactos : []
}

const Contactos = () => {
    
    const [state, dispatch] = useReducer(ContactosReducer, [], init)
    const [formView, setFormView] = useState(false)

    useEffect(() => {
        localStorage.setItem('contactos', JSON.stringify(state))
    }, [state])

    
    
    return (
        <div className='container mt-3'>
        <button className='btn btn-success mb-3' onClick={() => setFormView(!formView)}>{!formView ? "Agregar Contacto" : "Cerrar Formulario"} </button>
        {
            formView &&  <FormularioAdd dispatch={dispatch} />
        }
            <TablaContactos contactos={state} dispatch={dispatch} />

        </div>
    )
}

export default Contactos
