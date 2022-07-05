import React from 'react'

const BackgroundImage = ({children}) => {
  return (
    <div style={{"background":"#FAF0F0"}}>{
        children
        }</div>
  )
}

export default BackgroundImage