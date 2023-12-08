
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer.ts';
import { persistStore,persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig= {
    key:"persist-sotre",
    storage,
} 

const persistedReducer=persistReducer(persistConfig,reducer)

const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persister=persistStore(store)
export default store;
