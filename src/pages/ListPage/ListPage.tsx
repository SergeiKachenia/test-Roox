import React, { useRef, useState, useContext } from "react";
import {UserItem} from '../../components/UserItem/UserItem'
import { useSelector} from "react-redux";
import {
  usersSelector
} from "../../services/slice/users";
import styles from './ListPage.module.scss'
import { Link, useLocation } from "react-router-dom";
import { SortingNavigation } from "../../components/SortingNavigation/SortingNavigation";

export const ListPage = () => {
  const { users } = useSelector(usersSelector);
    const location = useLocation();
  return users && (
    <>
    <main className={styles.listPage__flexcontainer}>
<SortingNavigation />
    <section className={styles.listPage__section}>
      <div className={styles.listPage__wrapcontainer}>
      <h1 className={styles.listPage__heading}>Список пользователей</h1>
      <ul className={styles.listPage__list}>
{users.map((user)=> (
<li className={styles.listPage__listitem} key={user.id}>
<UserItem user={user}></UserItem>
<Link

to={{
  pathname: `/user/${user.id}`,
  state: { background: location }
}}
className={styles.listPage__link}
href="#"
>Подробнее</Link>
</li>)
)
}
      </ul>
      <span className={styles.listPage__span}>{`Найдено ${users.length} пользователей`}</span>
      </div>
    </section>
    </main>
    </>
  )
}