
import React, { useState, useEffect, useReducer} from "react";

import { Route, Switch, useLocation} from "react-router-dom";
import { ListPage } from "../pages/ListPage/ListPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../services/slice/users";
import {usersSelector} from '../services/slice/users'
import {ProfilePage} from '../pages/ProfilePage/ProfilePage'
const App = () => {

  const location = useLocation();
  console.log(location);
  // @ts-ignore
  const background = location.state && location.state.background;
    const { users, error, loading } =
      useSelector(usersSelector);

  const dispatch = useDispatch();
    useEffect(() => {
      //@ts-ignore
      dispatch(fetchUsers());
    }, [])


      return loading ? <div>loading...</div> : (
        <Switch>
          <Route path='/' exact>
          <ListPage/>
          </Route>
          <Route path='/user/:userId' exact>
          <ProfilePage/>
          </Route>
    </Switch>

  )
  }

  export default App;