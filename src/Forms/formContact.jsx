import React, {useState} from 'react';
import { Contacto } from '../models/models.contact';
const FormContact = () => {

    const Contact1 = new Contacto('Juana', 'Maria', false)
    const Contact2 = new Contacto('Pia', 'Cuevas', true)

    const [contacs, setContacs] = useState(Contact1, Contact2);

    function addTask(Contacto){
        console.log('Delete this Task: ', Contacto)
        const index = contacs.indexOf(Contacto)
        const tempTasks = [...contacs]
        tempTasks.push(contacs)
        setContacs(tempTasks)
    }

    return (
        <div>
            <div>
                <h2>Contacto</h2>
                <p>{Contact1.nombre}</p>
                <p>{Contact1.apellido}</p>
                <p>{Contact1.conectado ? 'Conectado' : 'desconectado'}</p>
            </div>
            <div>
                <p>{Contact2.nombre}</p>
                <p>{Contact2.apellido}</p>
                <p>{Contact2.conectado ? 'Conectado' : 'desconectado'}</p>
                
            </div>

            <button>Crear contacto</button>
            <button>Eliminar Contacto</button>
            <button>Mostrar Contacto</button>
        </div>
    );
}

export default FormContact;
