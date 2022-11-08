import React, {CSSProperties} from "react"

export const Toolbox = () => {
  const toolBoxStyles: CSSProperties = {
    gridArea: 'toolbox',
    background: 'lightpurple',
    textAlign: 'center',
  }

  const buttonStyles = {
    padding: '5px 10px',
    margin: '10px auto',
    backgroundColor: 'lightblue',
    cursor: 'pointer',
  }

  return (
    <div style={toolBoxStyles}>
      <button style={buttonStyles}>Insert text dynamically</button>
    </div>
  )
}
