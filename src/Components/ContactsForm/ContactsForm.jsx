import { Form, Formik } from 'formik';
import React from 'react';
import validationSchema from './validationSchema';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

import styles from './ContactsForm.module.scss'

const ContactsForm = () => {

    console.log(validationSchema);

    return (
        <div className={styles['wrapper']}> 
            <h1 className='text-xl font-bold'>Create Contact</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ isSubmitting, values, isValid }) => (
                    <Form className={styles['form-container']}>
                        <TextField 
                            name='firstName' 
                            id='firstName' 
                            label='First Name' 
                            value={values.firstName}
                            inputClassName={`px-2 h-12`}
                        />
                        <TextField 
                            id='lastName' 
                            name='lastName' 
                            label='Last Name' 
                            value={values.lastName}
                            inputClassName={`px-2 h-12`}
                        />
                        <TextField
                            id='email'
                            name='email'
                            label='Email'
                            value={values.email}
                            type='email'
                            inputClassName={`px-2 h-12`}
                        />
                        <Button text={`Add Contact`} isDisabled={isValid} type='submit'/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactsForm;
