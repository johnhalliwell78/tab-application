import React, { useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTabsAsync, setSelectedTabAsync } from 'redux/actions'
import TabSkeleton from 'components/shared/loading_skeleton/tabs'
import FontList from './font-list'
import classnames from 'classnames'
import { Tab, ReduxStore } from 'interfaces'
import './index.scss'

const TabComponent = () => {
  const dispatch = useDispatch()
  const tab = useSelector((state: ReduxStore) => state.tab)
  const {
    loading,
    tabs,
    selectedTab,
    content: { type, content }
  } = tab || {}

  useEffect(() => {
    dispatch(getTabsAsync())
  }, [dispatch])

  useEffect(() => {
    if (tabs.length > 0) {
      dispatch(setSelectedTabAsync(tabs[0]))
    }
  }, [dispatch, tabs])

  const selectTab = useCallback(
    (tab: Tab) => () => {
      dispatch(setSelectedTabAsync(tab))
    },
    [dispatch]
  )

  const renderBody = useMemo(() => {
    switch (type) {
      case 'Text':
        return <span className="text-content-inside">{content}</span>
      case 'Font selection':
        return <FontList content={content} />
    }
  }, [type, content])

  if (loading) {
    return <TabSkeleton style={{ width: '100%' }} />
  }

  return (
    <div className="tab-component">
      <div className="tab-component__header">
        <span className="tab-component__title">Please select one font</span>
        <div className="tab-component__header-toggle">
          {Object.values(tabs).map((tab: any) => {
            const { id, label } = tab
            return (
              <div
                key={id}
                className={classnames(
                  'tab',
                  selectedTab === tab.id ? 'selected' : ''
                )}
                onClick={selectTab(tab)}
              >
                {label}
              </div>
            )
          })}
        </div>
      </div>
      <div
        className={classnames(
          'tab-component__body',
          type === 'Text' ? 'text-content' : ''
        )}
      >
        {renderBody}
      </div>
    </div>
  )
}

export default TabComponent
