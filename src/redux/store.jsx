// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// localStorage'dan yüklenen loginData, belirli bir reducer altında saklanmalıdır.
// Örneğin, 'adminLogin' reducer'ı için başlangıç state'i olarak ayarlayalım.
// const preloadedState = {
//   adminLogin: {
//     loginData: localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null,
//   }
// };

const store = configureStore({
  reducer: rootReducer,
//   preloadedState, 
});

export default store;