import { Action, TabState } from 'interfaces'
import types from 'redux/types'

const initialState: TabState = {
  loading: false,
  tabs: {},
  error: '',
  selectedTab: {},
  content: {},
  selectedFont: ''
}

const accountReducer = (
  state = initialState as TabState,
  action: Action
): TabState => {
  const { type, payload } = action

  switch (type) {
    case types.SET_SELECTED_TAB_ASYNC: {
      const {
        tab: { id }
      } = payload

      return {
        ...state,
        loading: true,
        selectedTab: id
      }
    }

    case types.GET_TABS_ASYNC: {
      return {
        ...state,
        loading: true
      }
    }

    case types.GET_TABS_SUCCESS: {
      const { tabs } = payload

      return {
        ...state,
        loading: false,
        tabs,
        error: '',
        selectedTab: tabs[0].id
      }
    }

    case types.GET_TAB_CONTENT_SUCCESS: {
      const { content } = payload

      return {
        ...state,
        loading: false,
        content,
        error: ''
      }
    }

    case types.GET_TABS_ERROR:
    case types.GET_TAB_CONTENT_ERROR: {
      const { error } = payload
      return {
        ...state,
        loading: false,
        error
      }
    }

    case types.SELECT_FONT: {
      const { id } = payload
      return {
        ...state,
        selectedFont: id
      }
    }

    default:
      return state
  }
}

export default accountReducer
