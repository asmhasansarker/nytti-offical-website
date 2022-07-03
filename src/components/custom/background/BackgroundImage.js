import React from 'react'

const BackgroundImage = ({children}) => {
  return (
    <div style={{"background":"#FAF0F0","height":"800px"}}>{
        children
        }</div>
  )
}

export default BackgroundImage