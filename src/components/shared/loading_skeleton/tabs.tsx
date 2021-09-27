import React from 'react'

import {
  ThreeHorizontalLines,
  HorizontalLine
} from './skeleton'


const TabSkeleton = ({ style = {}, verticalLineStyle = {}, linesStyle = {}}) => {
  return (
    <div style={{ marginTop: 8, marginLeft:20, padding: 8, display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{display: 'flex', marginTop:'20px', ...style}}>
        <HorizontalLine style={{width: '300px', height: '40px'}} />
      </div>
      <div style={{display: 'flex', marginTop:'20px', ...style}}>
        <ThreeHorizontalLines style={{...style}} />
      </div>
      <div style={{display: 'flex', marginTop:'20px', ...style}}>
        <ThreeHorizontalLines style={{...style}} />
      </div>
      <div style={{display: 'flex', marginTop:'20px', ...style}}>
        <HorizontalLine style={{width: '200px', height: '30px'}} />
      </div>
      <div style={{display: 'flex', marginTop:'10px', flexDirection:'column', ...style}}>
        <HorizontalLine style={{width: '100px', height: '10px'}} />
        <ThreeHorizontalLines style={{...style}} />
      </div>
      <div style={{display: 'flex', marginTop:'10px', flexDirection:'column', ...style}}>
        <HorizontalLine style={{width: '100px', height: '10px'}} />
        <ThreeHorizontalLines style={{...style}} />
      </div>
      <div style={{display: 'flex', marginTop:'10px', flexDirection:'column', ...style}}>
        <HorizontalLine style={{width: '100px', height: '10px'}} />
        <ThreeHorizontalLines style={{...style}} />
      </div>
    </div>
  )
}

export default TabSkeleton
