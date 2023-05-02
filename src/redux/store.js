// import { contactsReducer } from './contactsSlice';
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { authReducer } from './Auth/authSlice';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);
// const persistedAuth = persistReducer(persistConfig, authReducer);
// // (_, contactsSlice.reducer)

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     auth: persistedAuth,
//     // contacts: contactsSlice.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { contactsReducer } from './contactsSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['@@auth.registration.error'], // добавляем игнор для ошибки регистрации
      },
    }),

  devTools: process.env.NODE_ENV !== 'production',
});
