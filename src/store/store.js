import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory as createHistory } from 'history'
// import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'

import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import storage from 'redux-persist/lib/storage'
import rootSaga from 'redux/sagas'

import reducer from '../redux/reducers'
export const history = createHistory()
// const logger = createLogger({ collapsed: true })

const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routerMiddleware(history)]

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension())
}

// middleware.push(logger)

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tab'],
  stateReconciler: autoMergeLevel1
}

const persistedReducer = persistReducer(persistConfig, reducer(history))

const store = createStore(persistedReducer, {}, composedEnhancers)
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
