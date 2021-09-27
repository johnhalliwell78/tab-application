import React from 'react'
import classnames from 'classnames'
import './_loading_skeletons.scss'
const FullWidthBox = ({ style }: any) => {
  return <div style={style} className="skeleton-shine skeleton-fullwidth-box" />
}

const SmallBox = ({ style }: any) => {
  return <div style={style} className="skeleton-shine skeleton-small-box" />
}

const HorizontalLine = ({ style }: any) => {
  return (
    <div style={style} className="skeleton-shine skeleton-horizontal-line" />
  )
}

const VerticalLine = ({ style }: any) => {
  return <div style={style} className="skeleton-shine skeleton-vertical-line" />
}

const ThreeHorizontalLines = ({ style, lineStyle }: any) => {
  return (
    <div style={style} className="skeleton-three-lines">
      <HorizontalLine style={{ width: '90%', ...lineStyle }} />
      <HorizontalLine style={{ width: '75%', ...lineStyle }} />
      <HorizontalLine style={{ width: '60%', ...lineStyle }} />
    </div>
  )
}

const Headline = ({ style, boxStyle, linesStyle, lineStyle }: any) => {
  return (
    <div style={style} className="skeleton-headline">
      <SmallBox style={boxStyle} />
      <ThreeHorizontalLines style={linesStyle} lineStyle={lineStyle} />
    </div>
  )
}

const Circle = ({ style = {}, className }: any) => {
  return (
    <div
      style={style}
      className={classnames('skeleton-shine skeleton-circle', className)}
    />
  )
}

export {
  FullWidthBox,
  SmallBox,
  ThreeHorizontalLines,
  Headline,
  Circle,
  VerticalLine,
  HorizontalLine
}
