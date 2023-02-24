import React from 'react';

import { Task } from '../models/task';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const TaskFormik = () => {

    let task = new Task()
    const initialvalues = {
        nombre: '',
        description: '',
        level: ''
    }

    const registerSchema = Yup.object().shape(
        {
            nombre: Yup.string().required,
            description: Yup.string().required,
            level: Yup.string().required
        }
    )

    return (
        <div>
            <Formik
        initialValues={initialvalues}
        validationSchema={registerSchema}
        onSubmit={async(values)=>{
            await new Promise((r)=> setTimeout(r, 1000))
            alert(JSON.stringify(values, null, 2))
        }}>
            {({values, errors})=>{
                <Form>
                <label htmlFor='task'>Ingrese el nombre de la tarea</label>
                <Field id="task" type="text" name="task" placeholder="Ingresa tu tarea"></Field>
                {errors.nombre(<ErrorMessage name='task' component='div'></ErrorMessage> )}
                

                <label htmlFor='description'>Ingrese una breve descripcion de la tarea</label>
                <Field id="description" type="text" name="description" placeholder="Ingresa la descripcion"></Field>
                {errors.description(<ErrorMessage name='description' component='div'></ErrorMessage> )}

                <label htmlFor='level'>Ingrese la importancia de la tarea</label>
                <Field id="level" type="text" name="level" placeholder="Ingresa la importancia"></Field>
                {errors.level(<ErrorMessage name='level' component='div'></ErrorMessage> )}

                
            </Form>
            }}
        </Formik>
        </div>
    );
}

export default TaskFormik;
