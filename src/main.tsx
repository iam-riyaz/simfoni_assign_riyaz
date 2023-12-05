import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store ,{persister} from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persister}>
    <App />
    </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
