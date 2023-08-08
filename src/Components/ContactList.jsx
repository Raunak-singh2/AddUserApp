import React from 'react';
import Contact from './Contact';

function ContactList(props) {
  return (
    <ul>
       {props.contact.map(contact=>(
        <Contact key={contact.id} name={contact.ContactName} num={contact.ContactNum} avatar={contact.avatar}/>
       ))}
    </ul>
  )
}

export default ContactList
