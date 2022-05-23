import styles from './SortingNavigation.module.scss'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  usersSelector
} from "../../services/slice/users";
import {sortByCity, sortByCompany} from '../../services/slice/users'
export const SortingNavigation = () => {

const dispatch = useDispatch();

  return (
<section className={styles.sortNav__sort}>
      <h1 className={styles.sortNav__sortheading}>Сортировка</h1>
<button className={styles.sortNav__sortbutton} onClick={() => {
              {
                dispatch(sortByCity());
              }

            }}>по городу</button>
<button className={styles.sortNav__sortbutton} onClick={() => {
              {
                dispatch(sortByCompany());
              }

            }}>по компании</button>
    </section>
  )
}