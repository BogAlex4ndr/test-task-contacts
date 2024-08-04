import { Form, Formik } from 'formik'
import React from 'react'
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

import styles from './TagsForm.module.scss'

const TagsForm = () => {
  return (
    <Formik
        initialValues={{
            tags: '',  
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
    >
        {({ isSubmitting, values, isValid }) => (
            <Form className={styles['wrapper']}>
                <TextField
                    name='tags' 
                    id='tags' 
                    placeholder='Add new Tag'
                    value={values.tags}
                    inputClassName='w-full rounded-xl h-12 px-2'
                />
            <Button text={`Add Tags`} isDisabled={isValid} type='submit'/>
            </Form>
        )}
    </Formik>
  )
}

export default TagsForm