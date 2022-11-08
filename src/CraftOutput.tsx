import React, {CSSProperties} from 'react'

export const CraftOutput = () => {
  const styles: CSSProperties = {
    background: 'grey',
    gridArea: 'craftoutput',
    padding: '10px',
  }

  return (
    <div style={styles}>
      Craft out goes here
    </div>
  )
}
