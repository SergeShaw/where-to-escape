import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

export const history = createBrowserHistory()

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

export const store = createStore(
  persistedReducer, // root reducer with router state
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunk,
      logger,
      // ... other middlewares ...
    ),
  ),
)

export const persistor = persistStore(store);
