import React from 'react'

import styles from './Contact.module.scss';
import { Link } from 'react-router-dom';

import deleteIcon from '../../assets/delete.svg'

const Contact = ({person}) => {

    const firstName = person.fields && person.fields['first name'] && person.fields['first name'][0] && person.fields['first name'][0]['value']
        ? person.fields['first name'][0]['value']
        : null;
    const lastName = person.fields && person.fields['last name'] && person.fields['last name'][0] && person.fields['last name'][0]['value']
        ? person.fields['last name'][0]['value']
        : null;

    const email = person.fields && person.fields.email && person.fields.email[0] 
        ? person.fields.email[0].value 
        : null;

    const avatar = person.avatar_url
    const tags = person.tags.map((item) => <p className={styles['tags']} key={item.id}>{item.tag}</p>)

    const handleClick = (event) => {
        event.stopPropagation();
      };

  return (
<Link to={`/${person.id}`}>
        <div key={person.id} className={styles['wrapper']}>
            <button className={styles['delete-button']}><img src={deleteIcon} alt="Delete" onClick={handleClick} /></button>
                <img className={styles['avatar']} src={avatar} alt="" />
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <h2 className={styles['user-name']}>{firstName} {lastName}</h2>
                        <Link onClick={(e) => e.stopPropagation()} to={`mailto:${email}`} className={styles['email-link']}>{email}</Link>
                    </div>
                <div className={styles['tags-wrapper']}>{tags}</div>
            </div>
        </div>
</Link>
  )
}

export default Contact