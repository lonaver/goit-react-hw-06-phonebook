import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

import { deleteTask } from 'redux/taskSlice';
import styles from './ContactList.module.css';
import stylesApp from '../../components/App.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getTasks);
  const { value } = useSelector(getFilter);

  const handleDelete = idContact => dispatch(deleteTask(idContact));

  const [visibleContacts, setVisibleContacts] = useState([]);
  useEffect(() => {
    const normoliseFilter = value.toLowerCase();
    setVisibleContacts(
      contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normoliseFilter) ||
          number.toLowerCase().includes(normoliseFilter)
      )
    );
  }, [value, contacts]);

  return (
    <div className={styles.listAbonent}>
      {visibleContacts.map(({ name, number, id }, index) => (
        <li className={styles.item_contact} key={index}>
          <div className={styles.text_contact}>
            <span>{name} </span>
            <span className={styles.accent_text}>{number}</span>
          </div>
          <button
            type="button"
            className={stylesApp.btn}
            onClick={() => handleDelete(id)}
          >
            delete
          </button>
        </li>
      ))}
    </div>
  );
};
export default ContactList;
