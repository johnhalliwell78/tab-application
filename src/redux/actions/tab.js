import types from '../types'

export const getTabsAsync = () => ({
  type: types.GET_TABS_ASYNC
})

export const getTabsSuccess = ({ tabs }) => ({
  type: types.GET_TABS_SUCCESS,
  payload: { tabs }
})

export const getTabsError = (error: string) => ({
  type: types.GET_TABS_ERROR,
  payload: { error }
})

export const setSelectedTabAsync = (tab: any) => ({
  type: types.SET_SELECTED_TAB_ASYNC,
  payload: { tab }
})

export const getTabContentSuccess = ({content}) => ({
  type: types.GET_TAB_CONTENT_SUCCESS,
  payload: { content }
})

export const getTabContentError = (error: any) => ({
  type: types.GET_TAB_CONTENT_ERROR,
  payload: { error }
})

export const selectFont = (id: string) => ({
  type: types.SELECT_FONT,
  payload: { id }
})
