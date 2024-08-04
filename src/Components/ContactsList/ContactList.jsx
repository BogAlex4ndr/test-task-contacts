import React, { useEffect } from 'react'

import { useState } from 'react'
import { api, useGetContactsQuery } from '../../services/api'
import Contact from '../Contact/Contact'

const ContactList = () => {

  const {data} = useGetContactsQuery()

console.log(data && data.resources)

  return (
    <div className='flex flex-col gap-2 px-4 w-full md:w-8/12'>
      <h1 className='text-xl font-bold'>Contacts</h1>
      {
      data && data.resources.map((person) => ( <Contact key={person.id} person={person}/> ))
      }
    </div>
  )
}

export default ContactList