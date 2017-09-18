import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import callAPIMiddleware from '../middlewares/callAPIMiddleware'
import DevTools from '../containers/DevTools'
import rootEpic from '../epics'
import { ajax, peerReceive } from '../lib/services/api'

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    callStaticAPI: ajax,
    peerReceive,
  }
})

const loggerMiddleWare = createLogger()

const middlewares = [callAPIMiddleware, epicMiddleware, loggerMiddleWare]

const storeEnhancer = [applyMiddleware(...middlewares)]

if (process.env.NODE_ENV !== 'production') {
  storeEnhancer.push(DevTools.instrument())
}

const finalCreateStore = compose(...storeEnhancer)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
