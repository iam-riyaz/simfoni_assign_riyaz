// store.ts
import { legacy_createStore as createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer.ts';
;

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
