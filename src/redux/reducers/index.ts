import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import tab from './tab'

// eslint-disable-next-line import/no-anonymous-default-export
export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    tab
  })
