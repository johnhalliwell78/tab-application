import { Action } from 'interfaces'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getTabsError, getTabsSuccess, getTabContentError, getTabContentSuccess } from 'redux/actions'
import { TabsRepository } from 'services/repository/RepositoryFactory'
import types from '../types'

const getTabListAPI = async () => {
  const result: any = { tabs: [], error: '' }
  try {
    const res = await TabsRepository.getTabs()
    const { data } = res
    result.tabs = data
  } catch (error) {
    console.error(error)
    result.error = error
  } finally {
    return result
  }
}

const getTabAPI = async (endpoint: string) => {
  const result: any = { content: {}, error: '' }
  try {
    const res = await TabsRepository.getFonts({endpoint})
    const { data } = res
    result.content = data
  } catch (error) {
    console.error(error)
    result.error = error
  } finally {
    return result
  }
}

export function* getTabList({ payload }: Action): any {
  const tabList = yield call(getTabListAPI)

  const { error, tabs } = tabList
  if (error) {
    yield put(getTabsError(error))
  }

  yield put(getTabsSuccess({ tabs }))
}

export function* getTab({ payload }: Action): any {
  const { tab: { content_endpoint } } = payload
  const res = yield call(getTabAPI, content_endpoint)

  const { error, content } = res
  if (error) {
    yield put(getTabContentError(error))
  }

  yield put(getTabContentSuccess({ content }))
}

export function* watchTabList() {
  yield takeEvery(types.GET_TABS_ASYNC, getTabList)
}

export function* watchTab() {
  yield takeEvery(types.SET_SELECTED_TAB_ASYNC, getTab)
}

export default function* walletSaga() {
  yield all([call(watchTabList), call(watchTab)])
}
