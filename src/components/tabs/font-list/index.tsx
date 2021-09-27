import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { selectFont } from 'redux/actions'

const FontItem = ({ font, selected, onClick }: any) => {
  const { color, label, abbr } = font
  return (
    <div
      onClick={onClick}
      className={classnames('font-item', selected && 'selected')}
    >
      <div className="font-item__color-wrapper">
        <span style={{ backgroundColor: color }} className="font-item__color">
          {abbr}
        </span>
      </div>
      <span className="font-item__label">{label}</span>
    </div>
  )
}

const FontList = ({ content }: { content: [{ label: string }] }) => {
  const dispatch = useDispatch()
  const { selectedFont } = useSelector((state: any) => state.tab)

  const onSelectFont = useCallback(
    (id: string) => () => {
      dispatch(selectFont(id))
    },
    [dispatch]
  )

  const keyMap = useMemo(() => {
    return content.map((it: any) => ({
      key: it.abbr.charAt(0).toLowerCase(),
      value: it.id
    }))
  }, [content])

  const onkeydown = React.useCallback(
    (e: KeyboardEvent) => {
      const foundedKey = keyMap.find((key) => {
        return (key.key as string) === (e.key as string)
      })
      if (foundedKey) {
        onSelectFont(foundedKey.value)()
      }
    },
    [keyMap, onSelectFont]
  )

  React.useEffect(() => {
    window.addEventListener('keydown', onkeydown)

    return () => {
      window.removeEventListener('keydown', onkeydown)
    }
  }, [onkeydown])

  return (
    <div className="font-list">
      {content.map((font: any) => (
        <FontItem
          selected={selectedFont === font.id}
          font={font}
          onClick={onSelectFont(font.id)}
        />
      ))}
    </div>
  )
}

export default FontList
