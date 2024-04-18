import css from './Contact.module.css';
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ( {contact, deleteContact} ) => {
  console.log(contact)
  return (    
    <ul className={css.contact}>
      <li className={css.userInfo}>
        <span className={css.userItem}><BsPersonFill className={css.icon}/> {contact.name}</span>
        <span className={css.userItem}><FaPhoneAlt className={css.icon}/> {contact.number}</span>
      </li>
      <li>
        <button onClick={() => deleteContact(contact.id)} title="Click to delete contact">Delete</button>
      </li>
    </ul>
  )
}

export default Contact

