import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import contactsReduser from './contacts/contactSlice';
import storage from 'redux-persist/lib/storage';

import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

const authPersistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
};

const contactsPersistConfig = {
   key: 'contacts',
   storage,
   whitelist: ['token'],
};

export const store = configureStore({
   reducer: {
      contacts: persistReducer(contactsPersistConfig, contactsReduser),
      auth: persistReducer(authPersistConfig, authSlice),
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
   ],
   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);


