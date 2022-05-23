import React from 'react';
import {Link} from 'react-router-dom'
import styles from './UserItem.module.scss'
export const UserItem = ({user}) => {
  return (
    <>
    <ul className={styles.userItem__list}>
    <li className={styles.userItem__listitem}><p className={styles.userItem__heading}>Имя:</p> {user.name}</li>
    <li className={styles.userItem__listitem}><p className={styles.userItem__heading}>Город:</p> {user.address.city}</li>
    <li className={styles.userItem__listitem}><p className={styles.userItem__heading}>Компания:</p> {user.company.name}</li>
    </ul>
</>
  )
}