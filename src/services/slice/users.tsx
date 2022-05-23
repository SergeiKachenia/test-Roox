import { createSlice} from "@reduxjs/toolkit";
import { compareByCity, compareByCompany, checkResponse } from "../../pages/utils/utils";
export const initialState = {
  users: [],
  loading: false,
  error: null,
};


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.users = payload;
    },
    getUsersFailed: (state, {payload}) => {
      state.loading = false;
      state. error = payload
    },
    sortByCity: (state) => {
    state.users.sort(compareByCity)
    },
    sortByCompany: (state) => {
      state.users.sort(compareByCompany)
    }
  }
}
)
export const {getUsers, getUsersSuccess, getUsersFailed, sortByCity, sortByCompany} = usersSlice.actions

export const fetchUsers = () => {
  return async (dispatch) => {
    // @ts-ignore
    dispatch(getUsers());
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      checkResponse(res);
      const actualData = await res.json();
      dispatch(getUsersSuccess(actualData));
    } catch (error: unknown) {
      if (typeof error === "string") console.log(error);
      else if (error instanceof Error) {
      dispatch(getUsersFailed(error.message));
      }
    }
  };
}


export const usersSelector = (state) => state.users;
export const usersReducer = usersSlice.reducer;