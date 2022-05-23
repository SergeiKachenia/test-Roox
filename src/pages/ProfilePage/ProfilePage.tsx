import { useParams } from "react-router-dom";
import { usersSelector } from "../../services/slice/users";
import { useSelector } from "react-redux";
import styles from './ProfilePage.module.scss'
import { SortingNavigation } from '../../components/SortingNavigation/SortingNavigation';
import React from 'react'

export const ProfilePage = () => {
  const { users } = useSelector(usersSelector);
  //@ts-ignore
  const { userId } = useParams();
  const currentUser = users.find((item) => {
    console.log(item.id)
  return item.id == userId});
  return (
    <>
    {currentUser && (
      <main className={styles.profilePage__flexcontainer}>
        <SortingNavigation />
      <section className={styles.profilePage__section}>
<div className={styles.profilePage__wrapcontainer}>
<div className={styles.profilePage__headingcontainer}>
  <h1 className={styles.profilePage__heading}>Профиль пользователя</h1>
  <button className={styles.profilePage__editbutton}>Редактировать</button>
</div>
<section>
<form className={styles.profilePage__inputsform}>
  <label className={styles.profilePage__label}> Name:
  <input className={styles.profilePage__input} type='text' required readOnly placeholder={currentUser.name}/>
  </label>
  <label className={styles.profilePage__label}> Username:
  <input className={styles.profilePage__input} type='text' required readOnly placeholder={currentUser.username}/>
  </label>
  <label className={styles.profilePage__label}> E-mail:
  <input className={styles.profilePage__input} type='email' required readOnly placeholder={currentUser.email}/>
  </label>
  <label className={styles.profilePage__label}> Street:
  <input className={styles.profilePage__input} type='text' required readOnly placeholder={currentUser.address.street}/>
  </label>
  <label className={styles.profilePage__label}> City:
  <input className={styles.profilePage__input} type='text' required readOnly placeholder={currentUser.address.city}/>
  </label>
  <label className={styles.profilePage__label}> Zipcode:
  <input className={styles.profilePage__input} type='number' required readOnly placeholder={currentUser.address.zipcode}/>
  </label>
  <label className={styles.profilePage__label}> Phone:
  <input className={styles.profilePage__input} type='tel' required readOnly placeholder={currentUser.phone}/>
  </label>
  <label className={styles.profilePage__label}> Website:
  <input className={styles.profilePage__input} type='url' required readOnly placeholder={currentUser.website}/>
  </label>
  <label className={styles.profilePage__label}> Comment:
  <textarea className={styles.profilePage__textarea}></textarea>
  </label>
</form>
<button type='submit' className={styles.profilePage__submitbutton} disabled>Отправить</button>
</section>
</div>

      </section>
      </main>
    )}
    </>
  )
}