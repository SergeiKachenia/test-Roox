import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { render } from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./services/index";
import { BrowserRouter as Router } from 'react-router-dom';
const store = configureStore({
  reducer: rootReducer
});

render(
  <React.StrictMode>

  <Provider store={store}>
  <Router>
      <App />
      </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);